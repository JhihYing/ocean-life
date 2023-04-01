<script>
// ----------------- 套件 (Axios) -----------------
import axios from "axios";

// ----------------- Vue使用方法 -----------------
import { reactive, ref, onMounted, computed } from "vue";

// ----------------- 元件 -----------------
import BgTitle from "@/components/Global/BgTitle.vue";
import CategoryBtn from "@/components/News/CategoryBtn.vue";
import NewsItem from "@/components/News/NewsItem.vue";
import Pagination from "@/components/Global/Pagination.vue";
import Loading from "@/components/Global/Loading.vue";

export default {
  components: { BgTitle, CategoryBtn, NewsItem, Pagination, Loading },

  setup() {
    // ----------------- 定義資料 -----------------
    const loading = ref(true); // loading 狀態

    const statusEmit = ref(); // 新聞類別

    const newsListArr = reactive({ data: [] }); // 所有新聞
    const filterDatas = reactive({ data: [] }); // 所有新聞 (關鍵字-篩選後)

    // 頁碼相關
    const currentPage = ref(1); // 當前在第幾頁 (預設第1頁)
    const pagesize = ref(8); // 每頁顯示幾筆資料 (預設顯示8筆)
    const dataLength = ref(""); // 資料長度

    // ----------------- 取得資料 -----------------
    // 所有新聞
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/findArticle")
        .then((response) => {
          // 過濾是否有上架
          newsListArr.data = response.data.filter(function (e) {
            return e.articleStatus === "上架";
          });

          // 排列順序：新 → 舊
          newsListArr.data = newsListArr.data.reverse();

          loading.value = false;
        });
    });

    // ----------------- computed -----------------
    // 判斷需要多少頁
    const lists = computed(() => {
      return statusInfo.value.slice(
        (currentPage.value - 1) * pagesize.value,
        currentPage.value * pagesize.value
      );
    });

    // 判斷該新聞類別需要出現哪些資料
    const statusInfo = computed(() => {
      if (statusEmit.value === "所有消息" || statusEmit.value === undefined) {
        return newsListArr.data;
      } else {
        return newsListArr.data.filter(function (item) {
          return item.valueEN === statusEmit.value;
        });
      }
    });

    // ----------------- function -----------------
    // 子元件傳遞當前所選擇的頁碼
    // newlist：子元件(Pagination.vue)傳來的，參數：currentPage.value (當前所選擇的頁碼)
    const newlist = (e) => {
      currentPage.value = e;
    };

    // 新聞類別
    const statusEmitFn = (e) => {
      statusEmit.value = e;
    };

    return {
      lists,
      newsListArr,
      currentPage,
      pagesize,
      newlist,
      filterDatas,
      dataLength,
      statusEmitFn,
      statusEmit,
      statusInfo,
      loading,
    };
  },
};
</script>

<template>
  <main class="news">
    <!-- ----------------- 大標 ----------------- -->
    <BgTitle />

    <!-- ----------------- 主要內容 ----------------- -->
    <div class="containerMain">
      <!-- 新聞類別 -->
      <CategoryBtn @statusEmit="statusEmitFn" />

      <!-- loading -->
      <section v-if="loading" class="loading">
        <Loading />
      </section>

      <!-- 新聞列表 -->
      <section v-else>
        <ul class="newsContent">
          <NewsItem :lists="lists" :status="statusEmit" />
        </ul>

        <!-- ----------------- 頁碼 ----------------- -->
        <Pagination
          :total="statusInfo.length"
          :pagesize="pagesize"
          :currentPage="currentPage"
          @change-page="newlist"
          :keyWordFinish="statusEmit"
        />
      </section>
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/news/_news.scss" scoped></style>
