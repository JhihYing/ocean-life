<script>
// 套件(Axios)
import axios from "axios";

import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const userName = ref("oceanLife@gmail.com");
    const password = ref("123123");

    const showEye = ref(false);

    const store = useStore();
    const router = useRouter();
    // console.log(router);

    // --------------- 處理頁首 、 頁尾 ---------------
    // 取得 (頁首) 資料
    const headerIsSohow = computed(() => {
      return store.getters.getHeaderIsSohow;
    });

    // 修改 (頁首) 資料
    store.dispatch("headerIsSohow");

    // 取得 (頁尾) 資料
    const footerIsSohow = computed(() => {
      return store.getters.getFooterIsSohow;
    });

    // 修改 (頁尾)) 資料
    store.dispatch("footerIsSohow");

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

    const login = () => {
      axios({
        method: "post",
        url: "https://oceandemo.herokuapp.com/MySpringBoot/login",
        // API要求的資料
        data: {
          userAccount: userName.value,
          userPass: password.value,
        },
      }).then(function (res) {
        if (document.getElementById("keepLogin").checked === false) {
          // console.log("沒勾");

          // 使用Cookie
          if (res.data.is_login === true) {
            if (res.data.userAccount) {
              setCookie("token", res.data.userToken);
              setCookie("userCode", res.data.userAccount);
              setCookie("userId", res.data.userId);
            } else {
              setCookie("mangerToken", res.data.mangerToken);
              setCookie("mangerCode", res.data.mangerAccount);
              setCookie("mangerId", res.data.mangerId);
            }

            // 清空被選取的checkBox
            router.push({
              path: "/backend/memberbackend/member",
            });
            $("#keepLogin").prop("checked", false);
          } else {
            // console.log(res.data.is_login + "錯誤");
            alert(res.data.is_login);
            userName.value = "";
            password.value = "";
            $("#keepLogin").prop("checked", false);
          }
        } else {
          // console.log("有勾");

          // 使用localStorage
          if (res.data.is_login === true) {
            if (res.data.userAccount) {
              localStorage.setItem("token", res.data.userToken); // 保存token
              localStorage.setItem("userCode", res.data.userAccount);
              localStorage.setItem("userId", res.data.userId);
            } else {
              localStorage.setItem("mangerToken", res.data.mangerToken);
              localStorage.setItem("mangerCode", res.data.mangerAccount);
              localStorage.setItem("mangerId", res.data.mangerId);
            }

            router.push({
              path: "/backend/memberbackend/member",
            });
            $("#keepLogin").prop("checked", false);
          } else {
            // console.log(res.data.is_login + "錯誤");
            alert(res.data.is_login);
            userName.value = "";
            password.value = "";
            $("#keepLogin").prop("checked", false);
          }
        }
      });
    };

    const alertFn = (e) => {
      e.preventDefault();
      alert("此功能維修中，若有不便，敬請見諒！");
    };

    return {
      login,
      headerIsSohow,
      footerIsSohow,
      userName,
      password,
      setCookie,
      getCookie,
      checkCookie,
      showEye,
      alertFn,
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logoTitleBox">
        <!-- <Logo /> -->
        <router-link class="logoBtn" to="/backend/memberBackend">
          <img
            class="logoIcon"
            src="@/assets/images/logo.svg"
            alt="Ocean Life的Logo"
          />
        </router-link>

        <h5>後台管理系統</h5>
      </div>
    </div>
  </header>

  <main class="login">
    <div class="containerMain">
      <form
        @submit.prevent="login"
        class="loginForm"
        action="https://oceandemo.herokuapp.com/MySpringBoot/login"
        method="post"
        enctype="multipart/form-data"
      >
        <h3>後台登入</h3>
        <input
          class="inputText"
          type="email"
          placeholder="電子郵件"
          v-model.trim="userName"
          name="userAccount"
          required
        />
        <br />
        <div class="passwordBox">
          <input
            class="inputText"
            placeholder="密碼"
            v-model.trim="password"
            name="userPass"
            required
            :type="showEye ? 'text' : 'password'"
          />
          <div class="eyeBtn" @click="showEye = !showEye">
            <!-- 處理img動態scr使用三元運算符是不行的，其實vue是將圖片轉換成base64的，所有我們最好的方式是用v-if: -->
            <!-- <img src="@/assets/images/openEye.svg" alt="" /> -->
            <img
              v-if="showEye"
              class="closeEyeImg"
              src="@/assets/images/closeEye.svg"
            />
            <img v-else class="showEyeImg" src="@/assets/images/openEye.svg" />
          </div>
        </div>
        <div class="loginInfoBox">
          <div class="keepLogin">
            <input type="checkbox" id="keepLogin" />
            <label for="keepLogin">保持登入狀態</label>
          </div>
          <a @click="alertFn">忘記密碼?</a>
        </div>
        <button class="loginBtn" type="submit">登入</button>
      </form>
    </div>
  </main>
  <footer class="footer">
    Copyright © 2022 OCEAN LIFE. All rights reserved
  </footer>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_backendLogin.scss"
  scoped
></style>
