<script>
export default {
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
    status: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    // ----------------- function -----------------
    // 斷行格式
    const textReplace = (str) => {
      str.replace(/<br>/g, "\n");
      return str.replace(/<br>/g, "\n");
    };

    return { props, textReplace };
  },
};
</script>

<template>
  <li class="newsLi" v-for="item in props.lists" :key="item.articleID">
    <router-link
      :to="{
        path: '/news/newspage',
        query: {
          id: item.articleID,
        },
      }"
    >
      <!-- 圖片 -->
      <div class="newsImgBox">
        <img :src="'data:image/png;base64,' + item.articleImg" alt="" />
      </div>

      <!-- 日期 & 類別 -->
      <div class="newsTimeBox">
        <h6>{{ item.createDate }}</h6>
        <h6 class="newsCategory">{{ item.valueEN }}</h6>
      </div>

      <!-- 標題 & 內文 -->
      <div class="newsTitleBox">
        <h5>{{ item.articleTitle }}</h5>
        <p style="white-space: pre-wrap">
          {{ textReplace(item.articleContent) }}
        </p>
      </div>
    </router-link>
  </li>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/news/_newsItem.scss"
  scoped
></style>
