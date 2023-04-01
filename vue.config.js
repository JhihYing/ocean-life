const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/ocean-life/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/global.scss";
        `,
      },
    },
  },
});
