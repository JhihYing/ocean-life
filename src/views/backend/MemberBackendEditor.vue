<script>
// 套件(Axios)
import axios from "axios";

// Vue 方法
import { useRoute } from "vue-router";
import { reactive, onMounted, ref, inject } from "vue";
import Loading from "@/components/Global/Loading.vue";

export default {
  components: { Loading },
  setup() {
    const loading = ref(true); // false完成

    const route = useRoute();

    // --------------- 定義資料 ---------------
    // reload (inject)
    const reload = inject("reload");

    // 該名會員
    const memberDatas = reactive({ data: [] });

    // 彈跳視窗 (是否顯示)
    const popupBtn = ref(false);

    // 所上傳的圖片
    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const form = ref(null);

    // v-model資訊
    const status = ref();
    const sub = ref();

    // -------------- 取得資料 ---------------
    // 所選擇的會員
    onMounted(() => {
      axios
        .post("https://oceandemo.herokuapp.com/MySpringBoot/findByUserId", {
          userId: getId(),
        })
        .then((response) => {
          memberDatas.data = response.data;
          // console.log(memberDatas.data);

          status.value = response.data.userStatus; // 狀態
          // console.log(status.value);

          // 訂閱
          if (response.data.userSub === false) {
            sub.value = "否";
            // console.log(sub.value);
          } else {
            sub.value = "是";
            // console.log(sub.value);
          }
          // sub.value = response.data.userSub; // 訂閱

          loading.value = false;
        });
    });

    // -------------- function ---------------
    // 取得該篇新聞的ID
    const getId = () => {
      return route.query.id;
    };

    // 取得資料
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        // (1) 取得表單資料

        const statusInfo = $("#status").val(); // 狀態
        // console.log(statusInfo);

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // file-to-upload 是 input標籤name 的名稱
        formData.append("id", getId()); // 會員ID
        formData.append("status", statusInfo); // 會員狀態

        formData.append("name", memberDatas.data.userName); // 名稱
        formData.append("gender", memberDatas.data.userGender); // 性別
        formData.append("account", memberDatas.data.userAccount); // 帳號
        formData.append("birth", memberDatas.data.userBirth); // 出生日期
        formData.append("country", memberDatas.data.userCountry); // 地址 (縣市)
        formData.append("district", memberDatas.data.userDistrict); // 地址 (縣市)
        formData.append("road", memberDatas.data.userRoad); // 地址 (路)
        // formData.append("phone", memberDatas.data.userPhone); // 電話
        formData.append("sub", memberDatas.data.userSub); // 是否訂閱

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url = "https://oceandemo.herokuapp.com/MySpringBoot/updateUser";

        axios.post(url, formData).then(function (res) {
          // console.log(res.data);
          // alert("新增成功");

          reload();
        });
        // .catch(function (error) {
        //   console.log(error);
        // });
      } else {
        e.preventDefault();
      }
    };

    return {
      memberDatas,
      getId,
      popupBtn,
      submitFn,
      form,
      reload,
      status,
      loading,
      sub,
    };
  },
};
</script>

<template>
  <section v-if="loading" class="loading">
    <Loading />
  </section>
  <section v-else>
    <div class="titleBox">
      <!-- 傳來的index:{{ $route.query.index }} -->
      <h3>會員管理</h3>
      <span>- 編輯會員</span>
      <!-- 傳來的參數:{{ $route.query.id }} -->
    </div>

    <!-- 表格資料 -->
    <form
      ref="form"
      action="https://oceandemo.herokuapp.com/MySpringBoot/updateUser"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="tableBox">
        <ul class="tableContent">
          <li>
            <label for="">會員編號</label>
            <p>{{ $route.query.index }}</p>
          </li>
          <li>
            <label for="">姓名</label>
            <p name="name">{{ memberDatas.data.userName }}</p>
          </li>
          <li>
            <label for="">性別</label>
            <p name="gender">{{ memberDatas.data.userGender }}</p>
          </li>
          <li>
            <label for="">帳號(信箱)</label>
            <p name="account">{{ memberDatas.data.userAccount }}</p>
          </li>
          <li>
            <label for="">出生日期</label>
            <p name="birth">{{ memberDatas.data.userBirth }}</p>
          </li>
          <li>
            <label for="">地址</label>
            <span name="country">{{ memberDatas.data.userCountry }}</span>
            <span name="district" class="district">{{
              memberDatas.data.userDistrict
            }}</span>
            <span name="road">{{ memberDatas.data.userRoad }}</span>
          </li>
          <li>
            <label for="">連絡電話</label>
            <p name="phone">{{ memberDatas.data.userPhone }}</p>
          </li>
          <li>
            <label for="">是否訂閱電子報</label>
            <p name="sub">{{ sub }}</p>
          </li>
          <li>
            <label for="">會員狀態</label>
            <select name="status" id="status" v-model="status">
              <option value="正常">正常</option>
              <option value="停權">停權</option>
            </select>
          </li>
        </ul>

        <div class="btnBox">
          <button
            type="button"
            class="cancelBtn allBtn"
            @click="popupBtn = !popupBtn"
          >
            取消
          </button>

          <router-link to="/backend/memberbackend/member">
            <button type="submit" class="addBtn allBtn" @click="submitFn">
              更新
            </button>
          </router-link>
        </div>
      </div>
    </form>

    <!-- 彈跳視窗 -->
    <main class="ticket-popup" v-show="popupBtn">
      <div class="containerMain">
        <div class="popupTop">
          <h3>關閉視窗</h3>
        </div>

        <div class="popupUnder">
          <p>尚未存檔，是否確認關閉？</p>
          <div class="popupBtnBox">
            <button
              class="popupCloseBtn"
              type="button"
              @click="popupBtn = !popupBtn"
            >
              取消
            </button>
            <router-link to="/backend/memberbackend/member">
              <button class="popupOkBtn" type="button">確定</button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_memberBackendEditor.scss"
  scoped
></style>
