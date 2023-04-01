<script>
// ----------------- 元件 -----------------
import HeaderIndex from "@/components/Index/HeaderIndex.vue";
import IndexBanner from "@/components/Index/IndexBanner.vue";
import News from "@/components/Index/News.vue";
import Shop from "@/components/Index/Shop.vue";
import About from "@/components/Index/About.vue";
import Map from "@/components/Index/Map.vue";
import Ig from "@/components/Index/Ig.vue";
// import Feature from "@/components/Index/Feature.vue";
// import TicketLink from "@/components/Global/TicketLink.vue";

export default {
  components: {
    HeaderIndex,
    IndexBanner,
    News,
    Shop,
    About,
    Map,
    Ig,
    // Feature,
    // TicketLink,
  },

  setup() {},
};
</script>

<template>
  <!-- <TicketLink /> -->

  <!-- ----------------- header ----------------- -->
  <HeaderIndex />

  <!-- ----------------- Banner、時間 & 購票資訊 ----------------- -->
  <IndexBanner />

  <!-- ----------------- 最新消息 ----------------- -->
  <News />

  <!-- ----------------- 線上商城 ----------------- -->
  <Shop />

  <!-- ----------------- 關於我 ----------------- -->
  <About />

  <!-- ----------------- 獨特魅力 ----------------- -->
  <!-- <Feature /> -->

  <!-- ----------------- 交通位置 ----------------- -->
  <Map />

  <!-- ----------------- ig ----------------- -->
  <Ig />
</template>

<style lang="scss" src="@/assets/scss/layout/index/_index.scss" scoped></style>
