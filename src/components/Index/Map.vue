<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <section class="mapBox">
    <div class="containerMain mapMain" data-aos="fade-up">
      <div class="leftBox">
        <!-- ----------------- 標題 & 內文 ----------------- -->
        <!-- 標題 -->
        <h3>交通位置</h3>
        <ul class="mapTitle">
          <!-- 地址 -->
          <li>
            <p class="title">地址</p>
            <!-- <span class="line"> | </span> -->
            <p>202基隆市中正區北寧路367號</p>
          </li>

          <!-- 營業時間 -->
          <li>
            <p class="title">營業時間</p>
            <!-- <span class="line"> | </span> -->
            <p>
              週日~週五 10:00~20:30 /
              <br />
              週六(包含國定假日) 9:30 ~ 22:00
            </p>
          </li>

          <!-- 客服專線 -->
          <li>
            <p class="title">客服專線</p>
            <!-- <span class="line"> | </span> -->
            <p>02-2690-9031</p>
          </li>
        </ul>

        <!-- 瞭解更多 -->
        <router-link to="/information/traffic">瞭解更多</router-link>
      </div>

      <!-- ----------------- 地圖 ----------------- -->
      <div class="rightBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.868532056656!2d121.7970616150084!3d25.140135183922723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4f9d5531aa59%3A0xd5ccbfae9a4e35d6!2zMjAy5Z-66ZqG5biC5Lit5q2j5Y2A5YyX5a-n6LevMzY36Jmf!5e0!3m2!1szh-TW!2stw!4v1629112278844!5m2!1szh-TW!2stw"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <h3>交通位置</h3>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/scss/layout/index/_map.scss" scoped></style>
