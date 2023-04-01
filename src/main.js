import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 載入 jQuery 套件
import jquery from "jquery";
// import jQuery from "jquery/dist/jquery";

import hamburger from "hamburgers/dist/hamburgers.css";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false });

window.$ = window.jQuery = jquery;

createApp(App).use(hamburger).use(jquery);
createApp(App).use(store).use(router).mount("#app");
