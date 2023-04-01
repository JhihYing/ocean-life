<script>
// ----------------- Vue使用方法 -----------------
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      $(".featureTitle > li").click(function (e) {
        // e.preventDefault();
        console.log(e.target);
        $(this).addClass("active").siblings().removeClass("active");
      });
    });

    return {};
  },
};
</script>

<template>
  <section class="featureBox">
    <div class="containerMain featureMain">
      <div class="leftBox">
        <!-- 標題 -->
        <h3>
          OCEAN LIFE
          <br />
          獨特魅力
        </h3>

        <!-- 特色標題 -->
        <ul class="featureTitle">
          <li class="active">
            <span>1.</span>
            <h5>夢幻海底隧道</h5>
          </li>
          <li>
            <span>2.</span>
            <h5>月亮型水母展區</h5>
          </li>
          <li>
            <span>3.</span>
            <h5>聲光結合藝術饗宴</h5>
          </li>
        </ul>
      </div>

      <div class="rightBox">
        <!-- 圖片01 -->
        <div class="leftImgBox">
          <img src="@/assets/images/feature_01a.jpg" alt="" />
        </div>

        <div class="rightTextBox">
          <!-- 圖片02 -->
          <div class="featureImg">
            <img src="@/assets/images/feature_01b.jpg" alt="" />
          </div>

          <!-- 內文 -->
          <p>
            長達100公尺全台最長的海底隧道，
            <br />
            穿梭於150萬加侖水量之巨型人造
            <br />
            海洋中，享受180度視角觀賞海中
            <br />
            界，提供身歷其境的海底探險。
          </p>

          <!-- 深入瞭解 -->
          <router-link to="/guide">深入瞭解</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/index/_feature.scss"
  scoped
></style>
