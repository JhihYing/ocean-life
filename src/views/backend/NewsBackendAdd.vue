<script>
// 套件(Axios)
import axios from "axios";

// Vue 方法
import { ref, inject } from "vue";

export default {
  setup() {
    // --------------- 定義資料 ---------------
    // reload (inject)
    const reload = inject("reload");

    // 彈跳視窗 (是否顯示)
    const popupBtn = ref(false);

    // 預覽圖
    const images = ref("");

    // 控制圖片顯示
    const imageOpen = ref(false);

    // 所上傳的圖片
    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const fileInput = ref(null); // 圖片
    const titleInput = ref(null); // 標題
    const contentInput = ref(null); // 內容
    const remarkInput = ref(null); // 備註

    const form = ref(null);

    // -------------- 取得資料(axios) ---------------
    // 所有消息
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        // (1) 取得表單資料
        const uploadfile = fileInput.value.files[0]; // 圖片
        // console.dir(uploadfile);

        const typeInfo = $("#value").val(); // 類別
        const titleInfo = $("#title").val(); // 標題
        const contentInfo = $("#content").val(); // 內容
        const remarkInfo = $("#remark").val(); // 備註
        const statusInfo = $("#status").val(); // 狀態

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // file-to-upload 是 input標籤name 的名稱
        formData.append("value", typeInfo); // 文章類別
        formData.append("file-to-upload", uploadfile); // 文章圖片
        formData.append("title", titleInfo); // 文章標題
        formData.append("content", contentInfo); // 文章內容
        formData.append("remark", remarkInfo); // 文章內容-備註
        formData.append("status", statusInfo); // 文章狀態

        // console.log(formData);

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url = "https://oceandemo.herokuapp.com/MySpringBoot/addArticle";

        axios.post(url, formData).then(function (res) {
          // console.log(res.data);
          // alert("新增成功");

          // 清空輸入的內容
          titleInput.value = "";
          contentInput.value = "";
          remarkInput.value = "";

          reload();
          // }
        });
        // .catch(function (error) {
        //   console.log(error);
        // });
      } else {
        e.preventDefault();
        // console.log("請完成必填欄位");
      }
    };

    // 預覽圖
    const fileChange = (e) => {
      // (1) 取得選取檔案的資料
      const uploadfile = fileInput.value.files[0];
      // console.log("open file", uploadfile);

      const input = e.target;

      // 判斷是否有選擇圖檔
      if (input.files.length === 0) {
        // console.log("取消,沒有選擇圖片");
        imageOpen.value = false;
      } else {
        // (2) 建立URL網址:createObjectURL()
        const urlInfo = window.URL.createObjectURL(uploadfile, {
          type: "image/jpeg",
        });
        // console.log("_url", urlInfo);

        // (3) 將URL網址存入images裡
        images.value = urlInfo;

        imageOpen.value = true;
      }
    };

    return {
      form,
      imageOpen,
      popupBtn,
      fileInput,
      images,
      submitFn,
      titleInput,
      contentInput,
      remarkInput,
      fileChange,
      reload,
    };
  },
};
</script>

<template>
  <div class="titleBox">
    <h3>消息管理</h3>
    <span>- 新增文章</span>
  </div>

  <!-- 表格資料 -->
  <form
    ref="form"
    action="https://oceandemo.herokuapp.com/MySpringBoot/addArticle"
    method="post"
    enctype="multipart/form-data"
  >
    <div class="tableBox">
      <ul class="tableContent">
        <li>
          <label for="">文章編號</label>
          <p>{{ $route.query.id }}</p>
          <!-- <p>000001</p> -->
        </li>
        <li>
          <label for="">文章類別*</label>
          <select name="value" id="value">
            <option value="活動消息">活動消息</option>
            <option value="園區公告">園區公告</option>
            <option value="商城公告">商城公告</option>
          </select>
        </li>
        <li>
          <label for="">圖片*</label>
          <div class="box">
            <input
              required
              id="customFile"
              class="imgInput"
              type="file"
              name="file-to-upload"
              ref="fileInput"
              @change="fileChange"
            />
            <div class="imgBox" v-if="imageOpen">
              <img :src="images" />
            </div>
          </div>
        </li>
        <li>
          <label for="">標題*</label>
          <input
            type="text"
            name="title"
            id="title"
            ref="titleInput"
            required
          />
        </li>
        <li class="positionTop">
          <label for="">文章內容*</label>
          <textarea
            name="content"
            id="content"
            ref="contentInput"
            required
          ></textarea>
        </li>
        <li class="positionTop">
          <label for="">注意事項</label>
          <textarea name="remark" id="remark" ref="remarkInput"></textarea>
        </li>
        <li>
          <label for="">文章狀態*</label>
          <select name="status" id="status">
            <option value="上架">上架</option>
            <option value="下架">下架</option>
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

        <router-link to="/backend/newsbackend/news">
          <button type="submit" class="addBtn allBtn" @click="submitFn">
            新增
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
          <router-link to="/backend/newsbackend/news">
            <button class="popupOkBtn" type="button">確定</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_newsBackendAdd.scss"
  scoped
></style>
