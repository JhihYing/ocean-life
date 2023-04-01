<script>
export default {};
</script>

<template>
  <div class="bg">
    <div class="titleText">
      <h2>
        <slot name="titleCN">最新消息</slot>
      </h2>
      <h3>
        <slot name="titleEN">Latest News</slot>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/layout/_bgTitle.scss" scoped></style>
