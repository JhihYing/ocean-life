<script>
// ----------------- 套件(Axios) -----------------
import axios from "axios";

// ----------------- 套件 (Swiper-輪播圖) -----------------
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// ----------------- Vue使用方法 -----------------
import { ref, reactive, onMounted } from "vue";

// ----------------- 元件 -----------------
import Loading from "@/components/Global/Loading.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading,
  },
  setup() {
    // ----------------- 定義資料 -----------------
    const loading = ref(true); // loading 狀態
    const productDatas = reactive({ data: [] }); // 所有商品

    // ----------------- 取得資料 -----------------
    // 所有商品
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/productPage")
        .then((response) => {
          const toArray = Object.values(response.data);

          productDatas.data = toArray
            .filter(function (e) {
              return e.productStatus === "上架";
            })
            .reverse();

          productDatas.data = productDatas.data.slice(0, 5);

          loading.value = false;
        });
    });

    // ----------------- function -----------------
    // 文字斷行
    const textReplace = (str) => {
      str.replace(/<br>/g, "\n");
      return str.replace(/<br>/g, "\n");
    };

    return {
      productDatas,
      textReplace,
      loading,
      modules: [Navigation, Pagination, Autoplay, A11y],
    };
  },
};
</script>

<template>
  <section class="shopBox">
    <div class="containerMain" data-aos="fade-up">
      <!-- ----------------- 標題 & 內文 ----------------- -->
      <h3>線上商城</h3>
      <p>販售各種多元化的獨家限定商品，<span>為旅程劃下最美麗的記憶</span></p>

      <!-- ----------------- loading ----------------- -->
      <section v-if="loading" class="loading">
        <Loading />
      </section>

      <!-- ----------------- 輪播圖 ----------------- -->
      <section v-else>
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
          <swiper-slide v-for="item in productDatas.data" :key="item.productId">
            <li class="productCard">
              <router-link
                :to="{
                  path: '/onlineshop/product',
                  query: {
                    id: item.productId,
                  },
                }"
              >
                <!-- 輪播圖-圖片 -->
                <div class="slideImg">
                  <img
                    :src="'data:image/png;base64,' + item.productImg[0]"
                    alt=""
                  />
                </div>

                <div class="productInfo">
                  <!-- 輪播圖-名稱 -->
                  <h5>{{ item.productName }}</h5>

                  <!-- 輪播圖-價格 -->
                  <div class="priceBox">
                    <p :class="{ saleActive: item.productPriceSale !== '' }">
                      NT${{ item.productPrice }}
                    </p>

                    <div v-if="item.productPriceSale !== ''" class="saleBox">
                      <span class="salePrice"
                        >NT${{ item.productPriceSale }}</span
                      >
                      <span class="sale">sale</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </swiper-slide>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </section>

      <!-- 更多商品 -->
      <router-link to="/onlineshop/shopIndex">更多商品</router-link>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/scss/layout/index/_shop.scss" scoped></style>
