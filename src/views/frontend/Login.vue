<script>
// 套件(Axios)
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const userName = ref("");
    const password = ref("");

    const showEye = ref(false);

    const router = useRouter();

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
          // 使用Cookie
          if (res.data.is_login === true) {
            console.log(res.data);

            if (res.data.userAccount) {
              setCookie("token", res.data.userToken);
              setCookie("userCode", res.data.userAccount);
              setCookie("userId", res.data.userId);
            } else {
              setCookie("mangerToken", res.data.mangerToken);
              setCookie("mangerCode", res.data.mangerAccount);
              setCookie("mangerId", res.data.mangerId);
            }

            router.push({
              path: "/member/memberProfile",
            });
            $("#keepLogin").prop("checked", false);
          } else {
            alert(res.data.is_login);
            userName.value = "";
            password.value = "";
            $("#keepLogin").prop("checked", false);
          }
        } else {
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
              path: "/member/memberProfile",
            });

            $("#keepLogin").prop("checked", false);
          } else {
            alert(res.data.is_login);
            userName.value = "";
            password.value = "";
            $("#keepLogin").prop("checked", false);
          }
        }
      });
    };

    const alertFn = () => {
      alert("此功能維修中，若有不便，敬請見諒！");
    };

    return {
      login,
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
  <main class="login">
    <div class="containerMain">
      <form
        class="loginForm"
        @submit.prevent="login"
        action="https://oceandemo.herokuapp.com/MySpringBoot/login"
        method="post"
        enctype="multipart/form-data"
      >
        <h3>會員登入</h3>
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
            :type="showEye ? 'text' : 'password'"
            placeholder="密碼"
            v-model.trim="password"
            name="userPass"
            required
          />
          <div class="eyeBtn" @click="showEye = !showEye">
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
        <p>快速登入</p>
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
          >不是會員?
          <router-link to="/member/signup">加入我們</router-link>
        </span>
      </form>
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/login/_login.scss" scoped></style>
