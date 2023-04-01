<script>
import InfoMenuInformation from "@/components/Global/InfoMenuInformation.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";

export default {
  components: { InfoMenuInformation, ContactForm },
  setup() {
    return {};
  },
};
</script>

<template>
  <main class="contact">
    <div class="bg">
      <InfoMenuInformation />
    </div>

    <div class="containerMain">
      <section class="serveInfoBox">
        <h3>營業時間</h3>
        <p>
          需要協助？有任何問題？歡迎先看看我們的
          <router-link to="/information/faq">【常見問題】</router-link
          >，為你快速解答！ >
        </p>
        <div class="infoBox">
          <span>服務時間:9:00~18:00</span>
          <span class="andIcon">|</span>
          <span>客服專線:02-2690-9031</span>
        </div>
      </section>

      <hr />

      <ContactForm />
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/contact/_contact.scss"
  scoped
></style>
