<script>
// ----------------- Vue使用方法 -----------------
import { onMounted } from "vue";

// ----------------- 元件 -----------------
import Logo from "@/components/Header/Logo.vue";
import NavbarHamburger from "@/components/Header/NavbarHamburger.vue";
import NavbarIcon from "@/components/Header/NavbarIcon.vue";
import Navbar from "@/components/Header/Navbar.vue";

export default {
  components: {
    Logo,
    NavbarHamburger,
    NavbarIcon,
    Navbar,
  },
  setup() {
    // 網頁下滑，切換 Header
    onMounted(() => {
      window.onscroll = function () {
        const scroll =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (scroll >= 78) {
          $(".headerIndex").css("display", "flex");
        } else {
          $(".headerIndex").css("display", "none");
        }
      };
    });

    return {};
  },
};
</script>

<template>
  <!-- ----------------- 一開始出現的 Header | absolute ----------------- -->
  <header class="headerTop">
    <div class="container">
      <!-- logo -->
      <router-link class="logo" to="/">
        <img
          class="logoIcon"
          src="@/assets/images/logo.svg"
          alt="Ocean Life的Logo"
        />
      </router-link>

      <!-- follow us -->
      <div class="followIconBox">
        <p>Follow Us</p>
        <span> | </span>
        <ul class="followIcon">
          <li class="fbIcon">
            <img src="@/assets/images/fbIcon.svg" alt="fb圖示" />
          </li>
          <li class="ytIcon">
            <img src="@/assets/images/ytIcon.svg" alt="youtube圖示" />
          </li>
          <li class="igIcon">
            <img src="@/assets/images/igIcon.svg" alt="ig圖示" />
          </li>
        </ul>
      </div>

      <div class="navbarBox">
        <Navbar />
        <NavbarIcon />
        <NavbarHamburger />
      </div>
    </div>
  </header>

  <!-- 下滑出現的 Header | flexd-->
  <header class="headerIndex">
    <div class="container">
      <Logo />

      <div class="navbarBox">
        <Navbar />
        <NavbarIcon />
        <NavbarHamburger />
      </div>
    </div>
  </header>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/index/_headerIndex.scss"
  scoped
></style>
