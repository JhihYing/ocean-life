<script>
// ----------------- 元件 -----------------
import InfoMenuInformation from "@/components/Global/InfoMenuInformation.vue";
import OpenTimeTable from "@/components/Traffic/OpenTimeTable.vue";
import TrafficType from "@/components/Traffic/TrafficType.vue";

export default {
  components: { InfoMenuInformation, OpenTimeTable, TrafficType },

  setup() {
    return {};
  },
};
</script>

<template>
  <main class="traffic">
    <!-- ----------------- 選單列表 ----------------- -->
    <div class="bg">
      <InfoMenuInformation />
    </div>

    <!-- ----------------- 主要內容 ----------------- -->
    <div class="containerMain">
      <section class="openInfoBox">
        <h3 class="rwdH3">營業時間</h3>

        <!-- 圖片 -->
        <div class="oceanLifeImg">
          <img src="@/assets/images/open.jpg" alt="Ocaen Life的大門" />
        </div>

        <div class="openInfo">
          <h3>營業時間</h3>

          <OpenTimeTable />

          <ul class="noticeText">
            <li>最終入場時間為閉館前1小時</li>
            <li>
              本館全年無休，若遇任何天候或其它因素而休館將另行公告，敬請留意本館最新消息
            </li>
          </ul>
        </div>
      </section>

      <hr />

      <!-- 交通指南 -->
      <section class="trafficInfoBox">
        <h3>交通指南</h3>

        <!-- 地圖 -->
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.868532056656!2d121.7970616150084!3d25.140135183922723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4f9d5531aa59%3A0xd5ccbfae9a4e35d6!2zMjAy5Z-66ZqG5biC5Lit5q2j5Y2A5YyX5a-n6LevMzY36Jmf!5e0!3m2!1szh-TW!2stw!4v1629112278844!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h5 class="address">地址: 202基隆市中正區北寧路367號</h5>
        <ul class="howToGo">
          <TrafficType />
        </ul>
      </section>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/traffic/_traffic.scss"
  scoped
></style>
