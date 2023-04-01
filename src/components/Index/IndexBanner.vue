<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <!-- ----------------- 首頁封面 ----------------- -->
  <section class="indexBanner">
    <!-- Banner -->
    <div class="bgBlack"></div>

    <div class="indexBannerMain">
      <!-- logo資訊 -->
      <div class="logoBox">
        <div class="logo">
          <img src="@/assets/images/logo01.svg" alt="Ocean Life的Logo" />
        </div>
        <hr />
        <h3>AQUARIUM</h3>
      </div>

      <!-- scroll -->
      <div class="scrollInfo">
        <p>SCROLL</p>
        <div class="scrollIcon">
          <img src="@/assets/images/scroll_arrow.svg" alt="Scroll圖示" />
        </div>
      </div>
    </div>
  </section>

  <!-- ----------------- 時間 & 購票資訊 ----------------- -->
  <section class="timeTicketBox">
    <!-- 時間資訊 -->
    <div class="timeBox">
      <div class="timeIcon"></div>
      <div class="timeTitle">
        <span>本日的營業時間</span>
        <span class="time">10:00~20:30</span>
      </div>
    </div>

    <!-- 購票資訊 -->
    <a class="ticketBox" href="https://www.kkday.com/zh-tw" target="_blank">
      <div class="ticketIcon"></div>
      <span>線上預約購票</span>
    </a>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/index/_indexBanner.scss"
  scoped
></style>
