<script>
import CartStep from "@/components/Global/CartStep.vue";

export default {
  components: { CartStep },
};
</script>

<template>
  <main class="cartNull">
    <div class="containerMain">
      <h3>購物車</h3>
      <CartStep />

      <section class="cartBox">
        <div class="cartImg">
          <img src="@/assets/images/cartNull.svg" alt="" />
        </div>
        <h5>購物車中沒有商品</h5>
        <p>
          再忙，也要記得買點什麼東西慰勞自己
          <br />
          讓Ｏcean Life陪伴您的生活
        </p>

        <router-link to="/onlineshop/shopIndex">馬上去逛逛吧！</router-link>
      </section>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/cart/_cartNull.scss"
  scoped
></style>
