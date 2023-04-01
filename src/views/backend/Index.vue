<script>
import Header from "@/components/Backend/Header.vue";
import Aside from "@/components/Backend/Aside.vue";

import { computed, provide, ref, nextTick } from "vue";
import { useStore } from "vuex";

export default {
  components: { Header, Aside },
  setup() {
    // 局部组件刷新
    const isRouterAlive = ref(true);

    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        // 重新渲染组件
        isRouterAlive.value = true;
      });
    };

    // provide("figure", "爺爺");
    provide("reload", reload);

    const store = useStore();

    // --------------- 處理頁首 、 頁尾 ---------------
    // 取得 (頁首) 資料
    const headerIsSohow = computed(() => {
      return store.getters.getHeaderIsSohow;
    });

    // 修改 (頁首) 資料
    store.dispatch("headerIsSohow");

    // 取得 (頁尾) 資料
    const footerIsSohow = computed(() => {
      return store.getters.getFooterIsSohow;
    });

    // 修改 (頁尾)) 資料
    store.dispatch("footerIsSohow");

    return {
      headerIsSohow,
      footerIsSohow,
      isRouterAlive,
      reload,
    };
  },
};
</script>

<template>
  <Header />

  <section class="content">
    <Aside />

    <main class="main">
      <router-view v-if="isRouterAlive" />
    </main>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_index.scss"
  scoped
></style>
