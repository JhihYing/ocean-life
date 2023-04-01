<script>
// 套件(Axios)
import axios from "axios";

// 導入內部檔案
import cityName from "@/assets/json/cityName.json";

import { ref, onMounted, reactive, inject } from "vue";
// import { useRouter } from "vue-router";

import MemberList from "@/components/Member/MemberList.vue";
import Loading from "@/components/Global/Loading.vue";
import Title from "@/components/Member/Title.vue";

export default {
  components: { MemberList, Loading, Title },
  setup() {
    // reload (inject)
    const reload = inject("reload");
    const loading = ref(true); // false完成

    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const form = ref(null);
    const nameInput = ref(null);

    const cityNameInfo = reactive({ data: cityName });
    const memberDatas = reactive({ data: [] });

    const userCode = ref();
    const userId = ref();
    const gender = ref(""); // 性別
    const isChecked = ref(); // 是否訂閱
    const select = reactive({
      data: [
        {
          city: "",
          area: "",
        },
      ],
    });

    // v-model資訊
    const name = ref("");
    const road = ref("");
    const phone = ref("");

    onMounted(() => {
      if (checkCookie("token")) {
        userId.value = getCookie("userId");
        userCode.value = getCookie("userCode");
      } else if (localStorage.getItem("token")) {
        userId.value = localStorage.getItem("userId");
        userCode.value = localStorage.getItem("userCode");
      }

      axios
        .post("https://oceandemo.herokuapp.com/MySpringBoot/findByUserId", {
          userId: userId.value,
        })
        .then((response) => {
          // console.log(response.data);
          memberDatas.data = response.data;
          // console.log(memberDatas.data);

          name.value = memberDatas.data.userName;
          road.value = memberDatas.data.userRoad;
          phone.value = memberDatas.data.userPhone;
          select.data[0].city = memberDatas.data.userCountry;
          select.data[0].area = memberDatas.data.userDistrict;

          gender.value = memberDatas.data.userGender;
          isChecked.value = memberDatas.data.userSub;

          loading.value = false;
        });
    });

    // --------------------- cookie函式 ---------------------
    // 設定 cookie
    const setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    // 取得 cookie 的值
    const getCookie = (cname) => {
      const name = cname + "=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };

    // 檢查某 cookie 是否存在
    const checkCookie = (cname) => {
      const cookieValue = getCookie(cname);
      if (cookieValue !== "") {
        return true;
      } else {
        return false;
      }
    };

    // 取得資料
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        // (1) 取得表單資料

        // const statusInfo = $("#status").val(); // 狀態
        // console.log(statusInfo);

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // file-to-upload 是 input標籤name 的名稱
        formData.append("id", userId.value); // 會員ID
        formData.append("status", memberDatas.data.userStatus); // 會員狀態

        formData.append("account", memberDatas.data.userAccount); // 帳號
        formData.append("name", name.value); // 名稱
        formData.append("birth", memberDatas.data.userBirth); // 出生日期
        formData.append("gender", gender.value); // 性別
        formData.append("phone", phone.value); // 電話
        formData.append("country", select.data[0].city); // 地址 (縣市)
        formData.append("district", select.data[0].area); // 地址 (縣市)
        formData.append("road", road.value); // 地址 (路)
        formData.append("sub", isChecked.value); // 是否訂閱

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url = "https://oceandemo.herokuapp.com/MySpringBoot/updateUser";

        axios.post(url, formData).then(function (res) {
          // console.log(res.data);
          alert("資料更新成功！");

          reload();
        });
        // .catch(function (error) {
        //   console.log(error);
        // });
      } else {
        e.preventDefault();
      }
    };

    const cancelFn = () => {
      // console.log("取消");

      name.value = memberDatas.data.userName;
      road.value = memberDatas.data.userRoad;
      phone.value = memberDatas.data.userPhone;
      select.data[0].city = memberDatas.data.userCountry;
      select.data[0].area = memberDatas.data.userDistrict;

      gender.value = memberDatas.data.userGender;
      isChecked.value = memberDatas.data.userSub;
    };

    const alertFn = (e) => {
      e.preventDefault();
      alert("此功能維修中，若有不便，敬請見諒！");
    };

    return {
      // exit,
      userCode,
      setCookie,
      getCookie,
      checkCookie,
      // getId,
      userId,
      memberDatas,
      name,
      road,
      phone,
      select,
      cityNameInfo,
      gender,
      isChecked,
      form,
      submitFn,
      reload,
      nameInput,
      cancelFn,
      loading,
      // clearCookie,
      alertFn,
    };
  },
};
</script>

<template>
  <main class="MemberpProfile">
    <div class="containerMain">
      <h3>會員中心</h3>

      <Title :userCode="userCode" />

      <div class="profileBox">
        <MemberList />

        <section v-if="loading" class="loading">
          <Loading />
        </section>
        <section v-else>
          <form
            ref="form"
            action="https://oceandemo.herokuapp.com/MySpringBoot/updateUser"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="profile">
              <div class="profileLeft">
                <div class="profileImg">
                  <img src="@/assets/images/member.svg" alt="會員照片" />
                </div>
                <button @click="alertFn">上傳圖片</button>
              </div>

              <div class="profileRight">
                <a href="" class="editProfile">
                  <div class="editIcon"></div>
                  <p>編輯會員資料</p>
                </a>

                <ul class="profileText">
                  <li>
                    <p class="textTitle">電子郵件</p>
                    <!-- <p>el841031@gmail.com</p> -->
                    <p name="account">{{ memberDatas.data.userAccount }}</p>
                  </li>
                  <li>
                    <p class="textTitle">姓名*</p>
                    <!-- <input type="text" value="斑比" /> -->
                    <input
                      class="inputText"
                      type="text"
                      v-model.trim="name"
                      ref="nameInput"
                      name="name"
                      required
                    />
                  </li>
                  <li>
                    <p class="textTitle">生日</p>
                    <p name="birth">{{ memberDatas.data.userBirth }}</p>
                  </li>
                  <li>
                    <p class="textTitle">密碼</p>
                    <a class="password" @click="alertFn">修改密碼</a>
                  </li>
                  <li>
                    <p class="textTitle">性別</p>
                    <div class="boy">
                      <input
                        type="radio"
                        id="boy"
                        value="男"
                        v-model="gender"
                        name="gender"
                      />
                      <label for="boy">男</label>
                    </div>
                    <div class="girl">
                      <input
                        type="radio"
                        id="girl"
                        value="女"
                        v-model="gender"
                        name="gender"
                      />
                      <label for="girl">女</label>
                    </div>
                    <div class="others">
                      <input
                        type="radio"
                        id="others"
                        value="其他"
                        v-model="gender"
                        name="gender"
                      />
                      <label for="others">其他</label>
                    </div>
                  </li>
                  <li>
                    <p class="textTitle">連絡電話</p>
                    <input
                      class="inputText"
                      type="text"
                      v-model.trim="phone"
                      name="phone"
                    />
                  </li>
                  <li class="addressTitle">
                    <p class="textTitle">地址</p>

                    <div class="addressBox inputText">
                      <div class="address">
                        <select
                          name="country"
                          class="county"
                          ref="countyInput"
                          id="county"
                          v-model="select.data[0].city"
                          required
                        >
                          <option value="" disabled>請選擇縣市</option>
                          <option
                            v-for="item in cityNameInfo.data"
                            :key="item.CityName"
                            :value="item.CityName"
                          >
                            {{ item.CityName }}
                          </option>
                        </select>

                        <select
                          name="district"
                          ref="townshipInput"
                          id="township"
                          v-model="select.data[0].area"
                          v-if="select.data[0].city"
                          required
                        >
                          <option value="" disabled>請選擇地區</option>
                          <option
                            v-for="item in cityNameInfo.data.find(
                              (city) => city.CityName === select.data[0].city
                            ).AreaList"
                            :key="item.AreaName"
                            :value="item.AreaName"
                          >
                            {{ item.AreaName }}
                          </option>
                        </select>
                      </div>

                      <input
                        class="road"
                        type="text"
                        v-model.trim="road"
                        name="road"
                      />
                    </div>
                  </li>
                </ul>

                <div class="agreenBox">
                  <input
                    type="checkbox"
                    id="agreenEmail"
                    v-model="isChecked"
                    name="sub"
                  />

                  <div class="agreenEmailText">
                    <label class="agreenTitle" for="agreenEmail"
                      >訂閱電子報</label
                    >
                    <label for="agreenEmail"
                      >獲得會員福利的最新消息、優惠好禮
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="profileBtn">
              <button type="button" class="cancel" @click="cancelFn">
                取消
              </button>

              <button class="save" type="button" @click="submitFn">更新</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/member/_memberpProfile.scss"
  scoped
></style>
