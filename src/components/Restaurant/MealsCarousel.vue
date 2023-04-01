<script>
import { reactive } from "vue";

// 套件(Swiper) | 輪播圖
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default {
  components: { Swiper, SwiperSlide },

  setup() {
    // --------------- 定義資料 ---------------
    // 所有餐點
    const mealsList = reactive([
      {
        title: "企鵝海洋冰沙氣泡飲",
        img: "menu_01",
      },
      {
        title: "海上冰淇淋飲品",
        img: "menu_02",
      },
      {
        title: "招牌可可拿鐵",
        img: "menu_03",
      },
      {
        title: "頂級生魚片拼盤",
        img: "menu_04",
      },
      {
        title: "蒜香奶油波士頓龍蝦",
        img: "menu_05",
      },
      {
        title: "蘇打水母造型冰淇淋",
        img: "menu_06",
      },
    ]);

    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };

    return {
      mealsList,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay, A11y],
    };
  },
};
</script>

<template>
  <section class="foodBox">
    <h3>推薦餐點</h3>
    <p>*菜單內容僅供參考，餐點以現場實際供應為主</p>

    <!-- 輪播圖 -->
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="0"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{
        '300': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '576': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '798': {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in mealsList" :key="item.title">
        <div class="slideImg">
          <img
            :src="require(`@/assets/images/${item.img}.jpg`)"
            :alt="item.title"
          />
        </div>
        <p>{{ item.title }}</p>
      </swiper-slide>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/restaurant/_mealsCarousel.scss"
  scoped
></style>
