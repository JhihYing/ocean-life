<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const userCode = ref();

    onMounted(() => {
      if (checkCookie("mangerToken")) {
        userCode.value = getCookie("mangerCode");
      } else if (localStorage.getItem("mangerToken")) {
        userCode.value = localStorage.getItem("mangerCode");
      }
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

    const exit = () => {
      if (checkCookie("mangerToken")) {
        setCookie("mangerToken", "", -1);
        // window.localStorage.clear();
        router.push({
          name: "BackendLogin",
        });
      } else if (localStorage.getItem("mangerToken")) {
        window.localStorage.clear();
        router.push({
          name: "BackendLogin",
        });
      }
    };

    return {
      exit,
      userCode,
      setCookie,
      getCookie,
      checkCookie,
      // clearCookie,
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logoTitleBox">
        <!-- <Logo /> -->
        <router-link class="logoBtn" to="/backend/memberbackend/member">
          <img
            class="logoIcon"
            src="@/assets/images/logo.svg"
            alt="Ocean Life的Logo"
          />
        </router-link>

        <h5>後台管理系統</h5>
      </div>

      <div class="infoBox">
        <p>您好，{{ userCode }}</p>
        <a @click="exit">登出</a>
      </div>
    </div>
  </header>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_header.scss"
  scoped
></style>
