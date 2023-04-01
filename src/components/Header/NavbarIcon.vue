<script>
import { ref, watch } from "vue";
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

    const isShow = ref(false);
    // 透過watch監聽網址的變化
    watch(
      () => routeNow.path,
      () => {
        // console.log("123");
        // console.log(routeNow.path); // 會顯示出 / ,/about, /Courses , /Courses/286
        routerArr.forEach((item, index) => {
          const rp = routeNow.path.substr(1).split("/")[0]; // Courses
          // console.log(rp);
          // console.log(item);

          if (rp === item) {
            // console.log(index);
            idx.value = index;
            // isShow.value = true;
            // console.log("X");
          }
          // else {
          //   // isShow.value = false;
          //   console.log("O");
          //   idx.value = null;
          // }
        });
      },
      { immediate: true }
    );

    return { isShow, idx };
  },
};
</script>

<template>
  <div class="narbar-icon">
    <router-link to="/member/memberProfile" class="memberBtn">
      <div class="memberIcon" :class="{ on: idx === 5 }"></div>
    </router-link>

    <router-link to="/cart/cartNull" class="cartBtn">
      <div class="cartIcon" :class="{ on: idx === 6 }"></div>
    </router-link>
  </div>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/header/_navbarIcon.scss"
  scoped
></style>
