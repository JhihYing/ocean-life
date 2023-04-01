<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <ul class="memberList">
    <li>
      <router-link to="/member/memberProfile">會員資料</router-link>
    </li>
    <li>
      <router-link to="/member/orderTracking">訂單查詢</router-link>
    </li>
    <li>
      <router-link to="/member/myCollection">我的收藏</router-link>
    </li>
  </ul>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/member/_memberList.scss"
  scoped
></style>
