<script>
// ----------------- Vue使用方法 -----------------
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const routerArr = [
      "/",
      "news",
      "information",
      "explore",
      "onlineshop",
      "member",
      "cart",
    ];
    const routeNow = useRoute();
    const idx = ref(0);

    // ----------------- 定義資料 -----------------
    const navHamClose = ref(false); // 漢堡選單-是否展開

    // ----------------- function -----------------
    // 點擊 | 漢堡選單
    const handClickNavbarHam = () => {
      navHamClose.value = !navHamClose.value;

      $(".burger_nav").slideToggle();
    };

    onMounted(() => {
      const coll = document.getElementsByClassName("dropdown");
      let i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    });

    // 透過watch監聽網址的變化
    watch(
      () => routeNow.path,
      () => {
        // console.log("123");
        // console.log(routeNow.path); // 會顯示出 / ,/about, /Courses , /Courses/286
        routerArr.forEach((item, index) => {
          const rp = routeNow.path.substr(1).split("/")[0]; // Courses
          // console.log(rp);

          if (rp === item) {
            // console.log(index);
            idx.value = index;
          }
        });
      },
      { immediate: true }
    );

    return { navHamClose, handClickNavbarHam, routerArr, routeNow, idx };
  },
};
</script>

<template>
  <!-- ----------------- 漢堡選單按鈕 ----------------- -->
  <button
    :class="['hamburger hamburger--slider', { isActive: navHamClose }]"
    type="button"
    @click="handClickNavbarHam"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>

  <!-- ----------------- 展開的選單 ----------------- -->
  <div class="burger_nav">
    <div class="burger_container">
      <ul class="burger_ul">
        <li>
          <div class="burger_li">
            <router-link
              class="on"
              :class="{ active: idx === 1 }"
              to="/news/newsIndex"
              @click="handClickNavbarHam"
              >最新消息
            </router-link>
          </div>
        </li>
        <li>
          <div class="burger_li dropdown">
            <a :class="{ active: idx === 2 }">入館資訊</a>
            <div class="add-icon"></div>
          </div>
          <div class="burger_content">
            <router-link to="/information/ticket" @click="handClickNavbarHam"
              >票價 & 購票</router-link
            >
            <router-link to="/information/traffic" @click="handClickNavbarHam"
              >交通指南</router-link
            >
            <router-link to="/information/faq" @click="handClickNavbarHam"
              >常見問答</router-link
            >
            <router-link to="/information/contact" @click="handClickNavbarHam"
              >聯絡我們</router-link
            >
          </div>
        </li>
        <li>
          <div class="burger_li dropdown">
            <a :class="{ active: idx === 3 }">探索之旅</a>
            <div class="add-icon"></div>
          </div>
          <div class="burger_content">
            <router-link to="/explore/guide" @click="handClickNavbarHam"
              >館內導覽</router-link
            >
            <router-link to="/explore/activity" @click="handClickNavbarHam"
              >館內活動</router-link
            >
            <router-link to="/explore/restaurant" @click="handClickNavbarHam"
              >特色餐廳</router-link
            >
          </div>
        </li>
        <li>
          <div class="burger_li">
            <router-link
              :class="{ active: idx === 4 }"
              to="/onlineshop/shopIndex"
              @click="handClickNavbarHam"
              >線上商城</router-link
            >
          </div>
        </li>
      </ul>

      <!-- 網路購票 -->
      <a href="https://www.kkday.com/zh-tw" class="buy_ticket" target="_blank">
        <p>網路購票</p>
      </a>

      <!-- follow us -->
      <div class="burger_follow">
        <p>Follow Us</p>
        <span>|</span>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="@/assets/images/circle_fb.svg" alt="fb圖示" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="@/assets/images/circle_yt.svg" alt="youtube圖示" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="@/assets/images/circle_ig.svg" alt="ig圖示" />
        </a>
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/header/_navbarHamburger.scss"
  scoped
></style>
