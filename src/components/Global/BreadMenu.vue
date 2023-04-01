<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<template>
  <div class="breadMenuBox">
    <router-link to="/">首頁</router-link>
    <span>→</span>
    <router-link to="/news/newsIndex">最新消息</router-link>
    <span>→</span>
    <span class="breadTitle">{{ props.title }}</span>
  </div>
</template>

<style lang="scss" src="@/assets/scss/layout/_breadMenu.scss" scoped></style>
