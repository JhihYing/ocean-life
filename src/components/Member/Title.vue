<script>
import { useRouter } from "vue-router";

import { ref, onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();
    const userCode = ref();
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
      if (checkCookie("token")) {
        setCookie("token", "", -1);
        // window.localStorage.clear();
        router.push({
          name: "Login",
        });
      } else if (localStorage.getItem("token")) {
        window.localStorage.clear();
        router.push({
          name: "Login",
        });
      }
    };

    onMounted(() => {
      if (checkCookie("token")) {
        userCode.value = getCookie("userCode");
      } else if (localStorage.getItem("token")) {
        userCode.value = localStorage.getItem("userCode");
      }
    });

    return { exit, userCode };
  },
};
</script>

<template>
  <div class="title">
    <p>Hi, {{ userCode }}</p>
    <!-- <p>Hi, {{ props.userCode }}</p> -->
    <a @click="exit">登出</a>
  </div>
</template>

<style lang="scss" src="@/assets/scss/layout/member/_title.scss" scoped></style>
