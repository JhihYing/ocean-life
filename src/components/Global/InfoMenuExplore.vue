<script>
export default {};
</script>

<template>
  <ul class="infoIconBox">
    <li class="infoIconLi">
      <router-link to="/explore/guide" class="guide">
        <div class="guideIcon infoIcon">
          <div class="guideImg"></div>
        </div>
        <p>館內導覽</p>
      </router-link>
    </li>

    <li class="infoIconLi">
      <router-link to="/explore/activity" class="activity">
        <div class="activityIcon infoIcon">
          <div class="activityImg"></div>
        </div>
        <p>館內活動</p>
      </router-link>
    </li>

    <li class="infoIconLi">
      <router-link to="/explore/restaurant" class="restaurant">
        <div class="restaurantIcon infoIcon">
          <div class="restaurantImg"></div>
        </div>
        <p>特色餐廳</p>
      </router-link>
    </li>
  </ul>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/_infoMenuExplore.scss"
  scoped
></style>
