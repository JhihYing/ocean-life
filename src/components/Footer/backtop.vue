<script>
// import { onMounted } from "vue";

export default {
  setup() {
    const clcikTop = () => {
      // console.log("點擊");
      $("html,body").animate({ scrollTop: 0 }, 333);
    };

    return { clcikTop };
  },
};
</script>

<template>
  <a id="BackTopBtn" class="BackTopBtn" @click="clcikTop">
    <img
      class="backTopIcon"
      src="@/assets/images/backTopIcon.svg"
      alt="Top圖示"
    />
  </a>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/footer/_backtop.scss"
  scoped
></style>
