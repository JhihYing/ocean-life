<script>
// Vue 方法
// import { onMounted } from "vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const routerArr = [
      "memberbackend",
      "newsbackend",
      "activityBackend",
      "onlineBackend",
      "online",
    ];
    const routeNow = useRoute();
    const idx = ref(0);
    const productIdx = ref(0);

    onMounted(() => {
      $("#showHandle").click(function () {
        $(".navbar-dropdown").slideToggle(300);
        $(".arrowIcon").toggleClass("active");

        $(this).toggleClass("change");
      });
    });

    // 透過watch監聽網址的變化
    watch(
      () => routeNow.path,
      () => {
        // console.log("123");
        // console.log(routeNow.path); // 會顯示出 / ,/about, /Courses , /Courses/286
        routerArr.forEach((item, index) => {
          const rp = routeNow.path.substr(1).split("/")[1]; // Courses
          const rp2 = routeNow.path.substr(1).split("/")[2]; // Courses
          // console.log(rp);
          // console.log(rp2);
          // console.log(item);

          if (rp === item) {
            // console.log(index);
            idx.value = index;
            // console.log("2");
            productIdx.value = null;
          } else if (rp2 === item) {
            // console.log(index);
            productIdx.value = index;
          }
        });
      },
      { immediate: true }
    );

    // return {};
    return { routerArr, routeNow, idx, productIdx };
  },
};
</script>

<template>
  <aside class="aside">
    <ul class="navbar">
      <li>
        <router-link to="/backend/memberbackend/member">
          <div class="icon member" :class="{ active: idx === 0 }">
            <div class="memberImg"></div>
            <!-- <img src="@/assets/images/backMember.svg" alt="" /> -->
          </div>
          <p class="on" :class="{ active: idx === 0 }">會員管理</p>
        </router-link>
      </li>
      <li>
        <router-link to="/backend/newsbackend/news">
          <div class="icon news" :class="{ active: idx === 1 }">
            <div class="newsImg"></div>
            <!-- <img src="@/assets/images/backNews.svg" alt="" /> -->
          </div>
          <p :class="{ active: idx === 1 }">消息管理</p>
        </router-link>
      </li>
      <li>
        <router-link to="/backend/activityBackend/activity">
          <div class="icon activity" :class="{ active: idx === 2 }">
            <div class="activityImg"></div>
            <!-- <img src="@/assets/images/backActivity.svg" alt="" /> -->
          </div>
          <p :class="{ active: idx === 2 }">活動管理</p>
        </router-link>
      </li>
      <li>
        <a id="showHandle">
          <div class="icon shop" :class="{ active: idx === 3 }">
            <div class="shopImg"></div>
            <!-- <img src="@/assets/images/backShop.svg" alt="" /> -->
          </div>
          <p class="shop" :class="{ active: idx === 3 }">商城管理</p>
          <div class="arrowIcon" :class="{ active: idx === 3 }">
            <div class="arrowImg"></div>
            <!-- <img src="@/assets/images/backArrow.svg" alt="" /> -->
          </div>
        </a>
        <ul class="navbar-dropdown">
          <li class="dropdownList">
            <router-link to="/backend/onlineBackend/order">
              訂單管理
            </router-link>
          </li>
          <li class="dropdownList">
            <router-link
              to="/backend/onlineBackend/online/product"
              :class="{ active: productIdx === 4 }"
            >
              商品管理
            </router-link>
          </li>
          <li class="dropdownList">
            <router-link to="/backend/onlineBackend/sale">
              折扣碼管理
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_aside.scss"
  scoped
></style>
