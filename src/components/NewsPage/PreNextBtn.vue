<script>
// 套件(Axios)
import axios from "axios";

import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    getId: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    // 初始化路由
    const router = useRouter();

    const newsListArr = reactive({ data: [] }); // 所有新聞
    const allIdArr = reactive({ data: [] }); // 所有新聞的ID
    const newsListNumArr = ref(); // 所有資料共有幾筆
    const nowIndex = ref(); // 目前的文章ID
    const nextNewsArr = reactive({ data: [] }); // 下一頁的文章的資料
    const nextId = ref(); // 下一頁的文章ID

    // 所有新聞
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/findArticle")
        .then((response) => {
          newsListArr.data = response.data.filter(function (e) {
            return e.articleStatus === "上架";
          });
          // 所有資料
          newsListArr.data = newsListArr.data.reverse();

          // 所有資料共有幾筆
          newsListNumArr.value = newsListArr.data.length;

          // 抓出所有資料裡面的ID
          // item.articleID [704, 684, 384, 344, 54, 44, 24, 14, 4]
          allIdArr.data = newsListArr.data.map((item) => item.articleID);

          // 目前的文章ID
          nowIndex.value = allIdArr.data.indexOf(+props.getId);
          // console.log("目前ID" + nowIndex.value);
          // console.log("資料長度" + newsListNumArr.value);
        });
    });

    // console.log("目前ID" + nowIndex.value);
    const prevPage = () => {
      // console.log("上一篇");

      if (nowIndex.value < newsListNumArr.value && nowIndex.value > 0) {
        nowIndex.value -= 1;

        nextNewsArr.data = newsListArr.data.filter(function (item, index) {
          return index === nowIndex.value;
        });

        nextId.value = nextNewsArr.data[0].articleID;

        context.emit("id", nextId.value); // (事件名稱, 要回傳的內容)

        router.push({ path: "/news/newspage", query: { id: nextId.value } });
      } else {
        alert("已經是第一篇文章了");
        // console.log("第一筆資料了");
      }
    };

    const nextPage = () => {
      // console.log("下一篇");
      // console.log("nowIndex.value" + nowIndex.value);

      if (nowIndex.value < newsListNumArr.value - 1) {
        nowIndex.value += 1;

        nextNewsArr.data = newsListArr.data.filter(function (item, index) {
          return index === nowIndex.value;
        });

        nextId.value = nextNewsArr.data[0].articleID;

        context.emit("id", nextId.value); // (事件名稱, 要回傳的內容)

        router.push({ path: "/news/newspage", query: { id: nextId.value } });
      } else {
        alert("已經是最後一篇文章了");
        // console.log("最後一筆資料了");
      }
    };

    return {
      prevPage,
      nextPage,
      props,
      allIdArr,
      newsListNumArr,
      nowIndex,
      nextNewsArr,
      nextId,
    };
  },
};
</script>

<template>
  <div class="BackBTN">
    <!-- {{ props.getId }} -->
    <a class="prev" @click="prevPage">
      <img src="@/assets/images/prev.svg" alt="" />
    </a>
    <router-link
      class="back"
      :to="{
        path: '/news/newsIndex',
      }"
    >
      <p>back</p>
    </router-link>

    <a class="next" @click="nextPage">
      <img src="@/assets/images/next.svg" alt="" />
    </a>
  </div>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/newsPage/_preNextBtn.scss"
  scoped
></style>
