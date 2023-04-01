<script>
// ----------------- 套件(Axios) -----------------
import axios from "axios";

// ----------------- Vue使用方法 -----------------
import { useRoute, useRouter } from "vue-router";
import { reactive, onMounted, ref, watch } from "vue";

// ----------------- 元件 -----------------
import BreadMenu from "@/components/Global/BreadMenu.vue";
import ShareNews from "@/components/NewsPage/ShareNews.vue";
import PreNextBtn from "@/components/NewsPage/PreNextBtn.vue";
import Loading from "@/components/Global/Loading.vue";

export default {
  components: { BreadMenu, ShareNews, PreNextBtn, Loading },

  setup() {
    const route = useRoute();
    const router = useRouter();

    // ----------------- 定義資料 -----------------
    const loading = ref(true); // loading 狀態
    const nextId = ref();

    const articleDatas = reactive({ data: [] }); // 所有該篇新聞資訊
    const content = ref(); // 新聞內容
    const remark = ref(); // 新聞注意事項

    // ----------------- function -----------------
    // 取得該篇新聞的ID
    const getId = () => {
      return route.query.id;
    };

    // ----------------- 取得資料 -----------------
    // 所選擇的新聞資訊
    onMounted(() => {
      axios
        .post(
          "https://oceandemo.herokuapp.com/MySpringBoot/findArticleByArticleID",
          {
            articleID: getId(),
          }
        )
        .then((response) => {
          articleDatas.data = response.data;
          // console.log(articleDatas.data);
          content.value = response.data.articleContent.replace(/<br>/g, "\n");
          remark.value = response.data.articleRemark.replace(/<br>/g, "\n");

          loading.value = false;
        });
    });

    // ----------------- watch -----------------
    watch(
      () => router.currentRoute.value,
      (thisRoute) => {
        // console.log(thisRoute.query.id);
        // console.log(nextId.value);

        axios
          .post(
            "https://oceandemo.herokuapp.com/MySpringBoot/findArticleByArticleID",
            {
              articleID: thisRoute.query.id,
            }
          )
          .then((response) => {
            articleDatas.data = response.data;
            content.value = response.data.articleContent.replace(/<br>/g, "\n");
            remark.value = response.data.articleRemark.replace(/<br>/g, "\n");
          });
      },
      { immediate: true }
    );

    return { articleDatas, getId, content, remark, nextId, loading };
  },
};
</script>

<template>
  <!-- ----------------- loading ----------------- -->
  <section v-if="loading" class="loading">
    <Loading />
  </section>

  <!-- ----------------- 主要內容 ----------------- -->
  <section v-else>
    <!-- <p>{{ $route.query.id }}</p> -->
    <main class="news_page">
      <div class="containerMain">
        <!-- 麵包屑 -->
        <BreadMenu :title="articleDatas.data.articleTitle" />

        <section class="article">
          <!-- 圖片 -->
          <div class="articleIMG">
            <img
              :src="'data:image/jpeg;base64,' + articleDatas.data.articleImg"
              alt=""
            />
          </div>

          <div class="content">
            <!-- 日期 -->
            <h6>{{ articleDatas.data.createDate }}</h6>
            <div class="titleBox">
              <!-- 標題 -->
              <h2>{{ articleDatas.data.articleTitle }}</h2>

              <!-- 分享文章組件 -->
              <ShareNews />
            </div>
            <div class="textBox">
              <!-- 內文 -->
              <p style="white-space: pre-wrap">
                {{ content }}
              </p>

              <!-- 注意事項 -->
              <div class="notice" v-if="articleDatas.data.articleRemark !== ''">
                <p class="noticeTitle">注意事項:</p>
                <p class="noticeInfo" style="white-space: pre-wrap">
                  {{ remark }}
                </p>
              </div>
            </div>

            <!-- 分享文章組件(RWD) -->
            <ShareNews class="rwdShareNews" />

            <!-- 切換文章 -->
            <PreNextBtn :getId="getId()" @id="nextId" />
          </div>
        </section>
      </div>
    </main>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/newsPage/_newsPage.scss"
  scoped
></style>
