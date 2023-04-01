<script>
export default {};
</script>

<template>
  <ul class="infoIconBox">
    <li class="infoIconLi">
      <router-link to="/information/ticket" class="ticket">
        <div class="ticketIcon infoIcon">
          <div class="ticketImg"></div>
        </div>
        <p>票價&購票</p>
      </router-link>
    </li>

    <li class="infoIconLi">
      <router-link to="/information/traffic" class="traffic">
        <div class="trafficIcon infoIcon">
          <div class="trafficImg"></div>
        </div>
        <p>交通指南</p>
      </router-link>
    </li>

    <li class="infoIconLi">
      <router-link to="/information/faq" class="faq">
        <div class="faqIcon infoIcon">
          <div class="faqImg"></div>
        </div>
        <p>常見問答</p>
      </router-link>
    </li>

    <li class="infoIconLi">
      <router-link to="/information/contact" class="contact">
        <div class="contactIcon infoIcon">
          <div class="contactImg"></div>
        </div>
        <p>聯絡我們</p>
      </router-link>
    </li>
  </ul>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/_infoMenuInformation.scss"
  scoped
></style>
