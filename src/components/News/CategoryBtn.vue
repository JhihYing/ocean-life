<script>
// ----------------- Vue使用方法 -----------------
import { onMounted } from "vue";

export default {
  setup(props, context) {
    // ----------------- function -----------------
    onMounted(() => {
      // 點選選單變色 (告訴使用者目前位置)
      $(".newsBtnLi").click(function (e) {
        // console.log(e.target.innerHTML);
        context.emit("statusEmit", e.target.innerHTML); // (事件名稱, 要回傳的內容)

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      });
    });

    return {};
  },
};
</script>

<template>
  <ul class="newsBtn">
    <li class="newsBtnLi active">所有消息</li>
    <li class="newsBtnLi">活動消息</li>
    <li class="newsBtnLi">園區公告</li>
    <li class="newsBtnLi">商城公告</li>
  </ul>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/news/_categoryBtn.scss"
  scoped
></style>
