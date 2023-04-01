<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
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

    const store = useStore();
    // console.log(store);
    // console.log(store.state.isOpen); // true

    const isOpen = computed(() => {
      return store.state.isOpen;
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

    return { isOpen, routerArr, routeNow, idx };
  },
};
</script>

<template>
  <ul class="navbar-list" v-show="isOpen">
    <li class="navbar nav-news">
      <router-link to="/news/newsIndex" :class="{ active: idx === 1 }"
        >最新消息</router-link
      >
    </li>
    <li class="navbar nav-info dropdownOpen">
      <router-link to="/information/ticket" :class="{ active: idx === 2 }"
        >入館資訊</router-link
      >
      <ul class="navbar-dropdown">
        <li>
          <router-link to="/information/ticket">票價&購票</router-link>
        </li>
        <li>
          <router-link to="/information/traffic">交通指南</router-link>
        </li>
        <li>
          <router-link to="/information/faq">常見問答</router-link>
        </li>
        <li>
          <router-link to="/information/contact">聯絡我們</router-link>
        </li>
      </ul>
    </li>
    <li class="navbar nav-explore dropdownOpen">
      <router-link to="/explore/guide" :class="{ active: idx === 3 }"
        >探索之旅</router-link
      >
      <ul class="navbar-dropdown">
        <li>
          <router-link to="/explore/guide">館內導覽</router-link>
        </li>
        <li>
          <router-link to="/explore/activity">館內活動</router-link>
        </li>
        <li>
          <router-link to="/explore/restaurant">特色餐廳</router-link>
        </li>
      </ul>
    </li>
    <li class="navbar nav-store">
      <router-link to="/onlineshop/shopIndex" :class="{ active: idx === 4 }"
        >線上商城</router-link
      >
    </li>
  </ul>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/header/_navbar.scss"
  scoped
></style>
