<script>
import Backtop from "@/components/Footer/backtop.vue";

export default {
  components: { Backtop },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <Backtop />

      <div class="footer-text">
        <div class="footer-follow">
          <p class="moreMsg">更多情報 |</p>
          <a href="">
            <img
              class="fbIcon"
              src="@/assets/images/fbIcon.svg"
              alt="Facebook圖示"
            />
          </a>
          <a href="">
            <img
              class="ytIcon"
              src="@/assets/images/ytIcon.svg"
              alt="YouTube圖示"
            />
          </a>
          <a href="">
            <img
              class="igIcon"
              src="@/assets/images/igIcon.svg"
              alt="Instagram圖示"
            />
          </a>
        </div>
        <div class="footer-content">
          <div class="addTelText">
            <p class="addText">地址：202基隆市中正區北寧路367號</p>
            <p class="telText">TEL：(02) 2690-9031</p>
          </div>
          <hr />
          <p>
            本平台僅供學習、展示之用，參考資源：Xpark ｜
            海遊館｜墨田水族館｜品川水族館。
          </p>
          <div class="copyText">
            <p class="copyrightText">Copyright © 2023 OCEAN LIFE.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/footer/_footer.scss"
  scoped
></style>
