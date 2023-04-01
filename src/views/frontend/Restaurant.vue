<script>
import MealsCarousel from "@/components/Restaurant/MealsCarousel.vue";
import InfoMenuExplore from "@/components/Global/InfoMenuExplore.vue";

export default {
  components: { InfoMenuExplore, MealsCarousel },

  setup() {
    return {};
  },
};
</script>

<template>
  <main class="restaurant">
    <div class="bg">
      <InfoMenuExplore />
    </div>

    <div class="containerMain">
      <section class="restaurantBox">
        <h3 class="rwdTitle">Ocean Blue 餐廳</h3>
        <div class="restaurantImgBox">
          <div class="restaurantImg01 restaurantImg">
            <img src="@/assets/images/restaurant_01.jpg" alt="" />
          </div>
          <div class="restaurantImg02 restaurantImg">
            <img src="@/assets/images/restaurant_02.jpg" alt="" />
          </div>
        </div>
        <div class="restaurantInfoBox">
          <h3>Ocean Blue 餐廳</h3>
          <h5>「海中的特別指定席」</h5>
          <p>
            全台首座第一海底隧道餐廳，
            <br />
            360度觀看魚並邊享受美味的餐飲，
            <br />
            一同度過悠閒療癒的時光。
            <br />
            <br />
            店內提供多樣化的餐點選擇，
            <br />
            滿足視覺及味蕾享受，等您一同來品嘗。
          </p>
          <p class="openTime">
            營業時間： 11:30~20:00
            <br />
            最後點餐時間:打烊前30分鐘
          </p>
        </div>
      </section>

      <MealsCarousel />
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/restaurant/_restaurant.scss"
  scoped
></style>
