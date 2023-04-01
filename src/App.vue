<script>
// @代表src資料夾
import Header from "@/components/Global/Header.vue";
import Footer from "@/components/Global/Footer.vue";
import TicketLink from "@/components/Global/TicketLink.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  // 輸出
  components: {
    Header,
    Footer,
    TicketLink,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    // 取得 (頁首) 資料
    const headerIsSohow = computed(() => {
      return store.getters.getHeaderIsSohow;
    });

    // 取得 (頁尾) 資料
    const footerIsSohow = computed(() => {
      return store.getters.getFooterIsSohow;
    });

    onMounted(() => {
      AOS.init({
        duration: 1500,
        once: true,
      });

      AOS.init();
    });

    return { headerIsSohow, footerIsSohow, route };
  },
};
</script>

<template>
  <Header v-if="route.meta.keepAlive" />

  <TicketLink v-if="route.meta.ticketAlive" />

  <router-view />
  <!-- <Footer v-if="footerIsSohow" /> -->
  <Footer v-if="route.meta.footerKeepAlive" />
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
.showHeader {
  display: none !important;
}

// 會造成其他頁面header的問題 (不能使用sticky)
#app {
  height: calc(100% - 191px);
}
</style>
