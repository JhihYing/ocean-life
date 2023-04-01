<script>
// ----------------- 套件(Axios) -----------------
import axios from "axios";

// ----------------- Vue使用方法 -----------------
import { ref, reactive, onMounted } from "vue";

// ----------------- 元件 -----------------
import Loading from "@/components/Global/Loading.vue";

export default {
  components: {
    Loading,
  },
  setup() {
    // ----------------- 定義資料 -----------------
    const loading = ref(true); // loading 狀態
    const newsListArr = reactive({ data: [] }); // 所有新聞

    // ----------------- 取得資料 -----------------
    // 所有新聞
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/findArticle")
        .then((response) => {
          newsListArr.data = response.data.filter(function (e) {
            return e.articleStatus === "上架";
          });
          newsListArr.data = newsListArr.data.reverse();
          newsListArr.data = newsListArr.data.slice(0, 3);

          loading.value = false;
        });
    });

    // ----------------- function -----------------
    // 斷行格式
    const textReplace = (str) => {
      str.replace(/<br>/g, "\n");
      return str.replace(/<br>/g, "\n");
    };

    return { newsListArr, loading, textReplace };
  },
};
</script>

<template>
  <section class="newsBox">
    <!-- ----------------- 背景 ----------------- -->
    <div class="newsBg"></div>

    <!-- ----------------- 主要內容 ----------------- -->
    <div class="containerMain newsMain" data-aos="fade-up">
      <!-- 小魚裝飾 -->
      <div class="leftFish"></div>
      <div class="rightFish"></div>

      <!-- 標題 & 內文 -->
      <h3>訊息特報</h3>
      <p>一手掌握 Ocean Life 最新情報，<span>好康優惠不要錯過</span></p>

      <!-- loading -->
      <section v-if="loading" class="loading">
        <Loading />
      </section>

      <!-- 新聞列表 -->
      <section v-else>
        <ul class="newsContent">
          <li
            class="newsLi"
            v-for="item in newsListArr.data"
            :key="item.articleID"
          >
            <router-link
              :to="{
                path: '/news/newspage',
                query: {
                  id: item.articleID,
                },
              }"
            >
              <!-- 新聞列表-圖片 -->
              <div class="newsImgBox">
                <img :src="'data:image/png;base64,' + item.articleImg" alt="" />
              </div>

              <!-- 新聞列表-日期 -->
              <div class="newsTimeBox">
                <h6>{{ item.createDate }}</h6>
                <h6 class="newsCategory">{{ item.valueEN }}</h6>
              </div>

              <!-- 新聞列表-標題 -->
              <div class="newsTitleBox">
                <h5>{{ item.articleTitle }}</h5>
                <div class="waveSvg"></div>
                <p style="white-space: pre-wrap">
                  {{ textReplace(item.articleContent) }}
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </section>

      <!-- 更多消息 -->
      <router-link to="/news/newsIndex">更多消息</router-link>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/scss/layout/index/_news.scss" scoped></style>
