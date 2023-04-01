<script>
// 套件(Axios)
import axios from "axios";

// Vue 方法
import { useRoute } from "vue-router";

import { ref, reactive, onMounted } from "vue";

// import Swiper core and required modules
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import Loading from "@/components/Global/Loading.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";

import "swiper/css/free-mode";
import "swiper/css/thumbs";
import ProductMainText from "@/components/Product/ProductMainText.vue";

export default {
  // components: { Swiper, SwiperSlide, ProductItem, ProductMainText },
  components: { Swiper, SwiperSlide, ProductMainText, Loading },

  setup() {
    const loading = ref(true); // false完成
    const route = useRoute();

    // --------------- 定義資料 ---------------
    const content = ref();
    const remark = ref();

    const open = ref(true);

    // 該個商品
    const productDatas = reactive({ data: [] });

    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    // -------------- function ---------------
    // 取得該篇新聞的ID
    const getId = () => {
      return route.query.id;
    };

    const specItems = reactive({ data: [] });
    const numItems = reactive({ data: [] });

    // -------------- 取得資料 ---------------
    // 所選擇的新聞
    onMounted(() => {
      axios
        .post("https://oceandemo.herokuapp.com/MySpringBoot/findByProductID", {
          productId: getId(),
        })
        .then((response) => {
          // console.log(response.data);
          productDatas.data = response.data;

          content.value = response.data.productContent.replace(/<br>/g, "\n");
          remark.value = response.data.productRemark.replace(/<br>/g, "\n");
          // console.log(remark.value);

          // 字串轉型為陣列
          specItems.data = response.data.productType.split(",");
          numItems.data = response.data.productNum.split(",");

          // console.log(specItems.data);
          // console.log(numItems.data);

          loading.value = false;
        });
    });

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Navigation, Autoplay, FreeMode, Thumbs],
      getId,
      productDatas,
      content,
      remark,
      open,
      specItems,
      numItems,
      loading,
    };
  },
};
</script>

<template>
  <section v-if="loading" class="loading">
    <Loading />
  </section>
  <section v-else>
    <main class="product">
      <div class="containerMain">
        <div class="breadMenuBox">
          <router-link to="/">首頁</router-link>
          <!-- <a href="">首頁</a> -->
          <span>→</span>
          <!-- <a href="">線上商城</a> -->
          <router-link to="/onlineshop/shopIndex">線上商城</router-link>
          <span>→</span>
          <span class="breadTitle"> {{ productDatas.data.productName }}</span>
          <!-- <p>{{ $route.query.id }}</p> -->
        </div>

        <section class="productSection">
          <!-- 輪播圖 -->

          <div class="carouselBox">
            <swiper
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }"
              :spaceBetween="10"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
              class="mySwiper2"
            >
              <swiper-slide
                v-for="item in productDatas.data.productImg"
                :key="item.productId"
              >
                <img :src="'data:image/jpeg;base64,' + item" alt="" />
              </swiper-slide>
            </swiper>

            <swiper
              @swiper="setThumbsSwiper"
              :spaceBetween="10"
              :slidesPerView="4"
              :freeMode="true"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              :watchSlidesProgress="true"
              :breakpoints="{
                // '300': {
                //   slidesPerView: 2,
                // },
                '300': {
                  slidesPerView: 3,
                },
                '576': {
                  slidesPerView: 4,
                },
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="item in productDatas.data.productImg"
                :key="item.productId"
              >
                <img :src="'data:image/jpeg;base64,' + item" alt="" />
              </swiper-slide>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </swiper>
          </div>

          <ProductMainText
            :productDatas="productDatas"
            :specItems="specItems"
            :numItems="numItems"
          />
        </section>

        <section class="productInfo">
          <div class="infoTitle">
            <a :class="{ active: open == true }" @click="open = !open"
              >商品詳情</a
            >
            <!-- <a class="active" @click="open = !open">商品詳情</a> -->
            <a :class="{ active: open == false }" @click="open = !open"
              >送貨及付款方式</a
            >
          </div>
          <hr />
          <!-- 商品詳情 -->
          <div class="infoTextBox" v-show="open">
            <div class="infoText">
              <p class="title">說明</p>

              <p style="white-space: pre-wrap">
                {{ content }}
              </p>
            </div>
            <div class="specification">
              <p class="title">規格</p>
              <ul>
                <li>
                  <span class="spacTitle">材質</span>

                  <span>{{ productDatas.data.productSpenMaterial }}</span>
                </li>
                <li>
                  <span class="spacTitle">尺寸</span>

                  <span>{{ productDatas.data.productSpenSize }}</span>
                </li>
                <li>
                  <span class="spacTitle">產地</span>
                  <span>{{ productDatas.data.productSpenMF }}</span>
                </li>
                <li>
                  <span class="spacTitle noticeTitle">注意事項</span>
                  <p style="white-space: pre-wrap">{{ remark }}</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- 送貨及付款方式 -->
          <div class="payBox" v-show="!open">
            <div class="trans">
              <p class="title">送貨方式</p>
              <p>
                Ocean Life 門市自取 | 全家超商取貨 | 7-ELEVEN超商取貨 | 黑貓宅配
              </p>
            </div>
            <div class="pay">
              <p class="title">付款方式</p>
              <p>超商貨到付款 | ATM轉帳 | 信用卡一次付清</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/product/_product.scss"
  scoped
></style>
