<script>
export default {};
</script>

<template>
  <router-link class="logoBtn" to="/" :class="{ active: idx === 0 }">
    <img
      class="logoIcon"
      src="@/assets/images/logo.svg"
      alt="Ocean Life的Logo"
    />
  </router-link>
</template>

<style lang="scss" src="@/assets/scss/layout/header/_logo.scss" scoped></style>
