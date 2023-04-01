<script>
import { reactive } from "vue";

export default {
  setup() {
    // --------------- 定義資料 ---------------
    // 取得 (運輸方式) 資料
    const trafficTypeList = reactive([
      {
        type: "火車",
        img: "train",
        class: "trainImg",
        alt: "火車的圖示",
        info: [
          "搭乘東部幹線 → 瑞芳車站 → 深澳線至「海科館站」→ 步行5分鐘即可抵達",
          "搭乘西部幹線 → 基隆車站 → 基隆市公車103路線至「海科館/碧水巷」→ 步行2分鐘即可抵達",
          "搭乘西部幹線 → 七堵車站 → 基隆客運R66路線至「海科館/碧水巷」→ 步行2分鐘即可抵達",
        ],
        notice: "",
      },
      {
        type: "公車",
        img: "bus",
        class: "busImg",
        alt: "公車的圖示",
        info: [
          "大都會客運 - 2088：搭乘至海科館站(終點站)下車，步行3分鐘即可抵",
          "首都客運 - 1579：搭乘至海科館站(終點站)下車，步行3分鐘即可抵達",
        ],
        notice: "",
      },
      {
        type: "汽車",
        img: "car",
        class: "carImg",
        alt: "汽車的圖示",
        info: [
          "中山高速公路 → 大華系統交流道 → (往瑞濱) 台62線快速道路 → (瑞芳過後靠右)八斗子匝道 → 調和街 → 北寧路(右轉過後靠左) → 即可抵達OCEAN LIFE ",
        ],
        notice: "貼心提醒：本館有設置停車場，竭誠歡迎您蒞臨",
      },
    ]);

    return { trafficTypeList };
  },
};
</script>

<template>
  <li class="howToGoLi" v-for="item in trafficTypeList" :key="item.type">
    <div class="trafficBox">
      <div :class="item.class">
        <img
          :src="require(`@/assets/images/${item.img}.svg`)"
          :alt="item.alt"
        />
      </div>
      <h5>{{ item.type }}</h5>
    </div>

    <ul class="trafficInfo">
      <li v-for="item in item.info" :key="item">
        {{ item }}
      </li>
      <p v-if="item.notice !== ''">{{ item.notice }}</p>
    </ul>
  </li>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/traffic/_trafficType.scss"
  scoped
></style>
