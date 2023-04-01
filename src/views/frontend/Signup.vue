<script>
// 套件(Axios)
import axios from "axios";

import { useRouter } from "vue-router";

// 導入內部檔案
import cityName from "@/assets/json/cityName.json";

// Vue 方法
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    const showEye = ref(false);
    const showEyeConfirm = ref(false);

    const router = useRouter();

    const cityNameInfo = reactive({ data: cityName });
    const select = reactive({
      data: [
        {
          city: "",
          area: "",
        },
      ],
    });

    // --------------- 定義資料 ---------------
    // 所上傳的圖片
    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const emailInput = ref(null);
    const pwdInput = ref(null);
    const confirmPwdInput = ref(null);
    const dayInput = ref(null);

    const nameInput = ref(null);
    const sexInput = ref(null);
    const countyInput = ref(null);
    const townshipInput = ref(null);
    const addressInput = ref(null);
    const subscriptionInput = ref(null);

    const form = ref(null);

    // -------------- function ---------------
    // 取得資料
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        // (1) 取得表單資料

        const emailInfo = $("#email").val(); // 信箱
        const pwdInfo = $("#pwd").val(); // 密碼
        // const confirmPwdInfo = $("#confirmPwd").val(); // 確認密碼
        const dateInfo = $("#date").val(); // 生日

        const nameInfo = $("#name").val(); // 姓名
        const sexInfo = $("#sex").val(); // 性別

        const countyInfo = $("#county").val(); // 縣市
        const townshipInfo = $("#township").val(); // 地區
        const addressInfo = $("#address").val(); // 地址

        // const subscriptionInfo = $("#subscription").val(); // 訂閱
        const subscriptionInfo = $("input[name='sub']").is(":checked");

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // email是 input標籤name 的名稱
        // formData.append("value", typeInfo); // 文章類別
        formData.append("account", emailInfo); // 帳號(信箱)
        formData.append("pass", pwdInfo); // 密碼
        // formData.append("confirmPwd", confirmPwdInfo); // 確認密碼?
        formData.append("name", nameInfo); // 姓名
        formData.append("gender", sexInfo); // 性別
        formData.append("birth", dateInfo); // 日期
        formData.append("country ", countyInfo); // 城市
        formData.append("district", townshipInfo); // 地區
        formData.append("road", addressInfo); // 地址
        formData.append("sub", subscriptionInfo); // 狀態

        // console.log(formData);

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url = "https://oceandemo.herokuapp.com/MySpringBoot/addUser";

        axios.post(url, formData).then(function (res) {
          // console.log(res.data);

          if (res.data === "註冊成功") {
            alert(res.data);

            router.push({
              path: "/member/login",
            });

            // 清空輸入的內容
            emailInput.value = "";
            pwdInput.value = "";
            confirmPwdInput.value = "";

            dayInput.value = "";
            nameInput.value = "";
            sexInput.value = "";
            countyInput.value = "";
            townshipInput.value = "";
            addressInput.value = "";
            $("#subscription").prop("checked", false);
          } else {
            alert(res.data);
            // console.log(res.data);
          }

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

    watch(
      () => select.data[0].city,
      (newVal) => {
        // console.log("ref:", newVal);
        select.data[0].area = "";
      }
    );

    return {
      confirmPwdInput,
      submitFn,
      nameInput,
      sexInput,
      countyInput,
      emailInput,
      pwdInput,
      form,
      townshipInput,
      addressInput,
      dayInput,
      subscriptionInput,
      cityNameInfo,
      select,
      showEye,
      showEyeConfirm,
    };
  },
};
</script>

<template>
  <main class="signup">
    <div class="containerMain">
      <form
        @submit.prevent="submitFn"
        class="signupForm"
        ref="form"
        action="https://oceandemo.herokuapp.com/MySpringBoot/addUser"
        method="post"
        enctype="multipart/form-data"
      >
        <h3>會員註冊</h3>
        <p class="signupInfo">
          建立 Ｏcean Life 會員個人檔案，獨家優惠搶先領，歡迎加入 Ｏcean Life
          這個大家庭。
        </p>
        <input
          class="inputText"
          type="email"
          placeholder="電子郵件*"
          id="email"
          name="account"
          ref="emailInput"
          required
        />
        <br />
        <div class="InfoBox">
          <div class="passwordBox">
            <input
              class="inputText"
              :type="showEye ? 'text' : 'password'"
              placeholder="密碼*"
              id="pwd"
              name="pass"
              ref="pwdInput"
              required
            />
            <div class="eyeBtn" @click="showEye = !showEye">
              <img
                v-if="showEye"
                class="closeEyeImg"
                src="@/assets/images/closeEye.svg"
              />
              <img
                v-else
                class="showEyeImg"
                src="@/assets/images/openEye.svg"
              />
            </div>
          </div>
          <!-- <p>最少8個字元，至少包含1個數字、1個字母</p> -->
        </div>
        <!-- <div class="InfoBox">
          <div class="passwordBox">
            <input
              class="inputText"
              :type="showEyeConfirm ? 'text' : 'password'"
              placeholder="確認密碼*"
              id="confirmPwd"
              name="confirmPwd"
              ref="confirmPwdInput"
              required
            />
            <div class="eyeBtn" @click="showEyeConfirm = !showEyeConfirm">
              <img
                v-if="showEyeConfirm"
                class="closeEyeImg"
                src="@/assets/images/closeEye01.svg"
              />
              <img
                v-else
                class="showEyeImg"
                src="@/assets/images/openEye.svg"
              />
            </div>
          </div>
        </div> -->

        <div class="InfoBox">
          <input
            placeholder="出生日期*"
            class="birthday"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            name="birth"
            ref="dayInput"
            required
          />
          <p>每年生日時獲得獨家好禮。</p>
        </div>

        <div class="InfoBox">
          <input
            type="text"
            placeholder="姓名*"
            name="name"
            ref="nameInput"
            id="name"
            required
          />
          <p>需填寫真實姓名</p>
        </div>

        <select name="gender" class="sexBox" ref="sexInput" id="sex">
          <option value="男" selected>男</option>
          <option value="女">女</option>
          <option value="其他">其他</option>
        </select>

        <br />

        <div class="addressBox">
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
          type="text"
          placeholder="地址*"
          name="road"
          ref="addressInput"
          required
          id="address"
        />

        <div class="subscriptionBox">
          <input
            type="checkbox"
            id="subscription"
            name="sub"
            ref="subscriptionInput"
          />
          <label for="subscription"
            >訂閱 Ocean Life， 獲得會員福利最新消息</label
          >
        </div>
        <span class="agreeInfo"
          >如建立帳號，即代表同意 Ocean Life 的
          <a> 隱私權政策</a>
          和
          <a> 使用條款</a>。</span
        >

        <button class="signupBtn" type="submit">註冊</button>

        <p class="fastSignup">快速註冊</p>
        <div class="communityIconBox">
          <div class="fb communityIcon">
            <img src="@/assets/images/fbIcon01.svg" alt="" />
          </div>
          <div class="google communityIcon">
            <img src="@/assets/images/googleIcon01.svg" alt="" />
          </div>
          <div class="line communityIcon">
            <img src="@/assets/images/lineIcon01.svg" alt="" />
          </div>
        </div>

        <span
          >已經是會員了?
          <router-link to="/member/login">立即登入</router-link>
        </span>
      </form>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/signup/_signup.scss"
  scoped
></style>
