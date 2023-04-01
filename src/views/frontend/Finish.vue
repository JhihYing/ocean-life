<script>
import CartStep from "@/components/Global/CartStep.vue";

export default {
  components: { CartStep },
};
</script>

<template>
  <main class="cartStep03">
    <div class="containerMain">
      <h3>購物車</h3>
      <CartStep />
      <!-- <section class="cartStep">
        <ul class="cartUl">
          <li>
            <div class="circle">
              <p class="stepNum">1</p>
            </div>
            <p>購物車</p>
          </li>
          <li>
            <div class="circle">
              <p class="stepNum">2</p>
            </div>
            <p>填寫資料</p>
          </li>
          <li>
            <div class="circle">
              <p class="stepNum">3</p>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
      </section> -->

      <section class="cartBox">
        <div class="cartOkBox">
          <div class="okImg">
            <img src="@/assets/images/okIcon.svg" alt="" />
          </div>
          <h5>已經收到您的訂單</h5>
          <p>訂單編號：2021100401</p>
        </div>

        <div class="cartInfoBox">
          <p>
            恭喜您完成訂單！
            <br />
            確定付款完成後，依照您的取貨方式，我們會於1~3個工作天內，
            <br />
            將產品寄到您的收貨地址或傳送Email提醒您可至門市領取。
          </p>
          <p class="rwdText">
            恭喜您完成訂單！
            <br />
            確定付款完成後，依照您的取貨方式，我們會於1~3個工作天內，
            將產品寄到您的收貨地址或傳送Email提醒您可至門市領取。
          </p>
        </div>
      </section>

      <div class="cartStepBtn">
        <a href="Onlineshop">繼續購物</a>
        <a class="nextBtn" href="">查看訂單</a>
        <!-- <button>繼續購物</button> -->
        <!-- <button class="nextBtn">查看訂單</button> -->
      </div>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/finish/_finish.scss"
  scoped
></style>
