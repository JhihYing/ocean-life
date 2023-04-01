<script>
import { ref, onMounted, watch } from "vue";

export default {
  props: {
    productDatas: {
      type: Object,
      default: () => ({}),
      // default: 10,
    },
    specItems: {
      type: Array,
      default: () => [],
      // default: 10,
    },
    numItems: {
      type: Array,
      default: () => [],
      // default: 10,
    },
  },
  setup(props) {
    const num = ref(0);
    const stockNum = ref(0);
    const stockNotic = ref(false);

    const addNumCount = () => {
      if (num.value < props.numItems.data[stockNum.value]) {
        num.value += 1;
      }
    };

    const minusNumCount = () => {
      if (num.value > 0) {
        num.value -= 1;
      }
    };

    const specChange = () => {
      // console.log("變換");
      // console.log($("#spec").val());
      // console.log(props.specItems.data);

      const myselect = document.querySelector("#spec");
      // const index = myselect.selectedIndex - 1;
      stockNum.value = myselect.selectedIndex - 1;
      // console.log(index);

      num.value = 0;

      // console.log(props.numItems.data);
      // console.log(props.numItems.data[0]);
      // console.log(props.numItems.data[index]);
      // console.log(props.numItems.data[stockNum.value]);
    };

    watch(
      () => num.value,
      (newVal) => {
        // console.log("ref:", newVal);

        if (num.value > props.numItems.data[stockNum.value]) {
          stockNotic.value = true;
          // console.log("超過");
        } else {
          stockNotic.value = false;
          // console.log("正常");
        }
      }
    );

    onMounted(() => {
      if (num.value > props.numItems.data[stockNum.value]) {
        stockNotic.value = true;
        // console.log("超過");
      } else {
        stockNotic.value = false;
        // console.log("正常");
      }
    });

    const alertFn = () => {
      alert("此功能維修中，若有不便，敬請見諒！");
    };

    return {
      props,
      num,
      // numCount,
      addNumCount,
      minusNumCount,
      specChange,
      stockNum,
      stockNotic,
      alertFn,
    };
  },
};
</script>

<template>
  <div class="productMainInfoBox">
    <!-- <h3>夢幻海洋護手膏</h3> -->
    <h3>{{ props.productDatas.data.productName }}</h3>
    <h6 class="free">全店，滿3000元 宅配到府「免運」優惠</h6>
    <div class="price">
      <h5
        :class="{ saleActive: props.productDatas.data.productPriceSale !== '' }"
      >
        NT${{ props.productDatas.data.productPrice }}
      </h5>
      <!-- <h5>
        <del> NT${{ props.productDatas.data.productPrice }} </del>
      </h5> -->
      <div
        class="priceSale"
        v-if="props.productDatas.data.productPriceSale !== ''"
      >
        <!-- <h5>NT$720</h5>
        <span>sale</span> -->
        <h5>NT${{ props.productDatas.data.productPriceSale }}</h5>
        <span>sale</span>
      </div>
    </div>

    <select name="" id="spec" @change="specChange">
      <option value="" disabled>請選擇商品規格</option>
      <option v-for="item in props.specItems.data" :key="item" :value="item">
        {{ item }}
      </option>
      <!-- <option value="2">選項2</option>
      <option value="3">選項3</option> -->
    </select>
    <div class="numCollectBox">
      <div class="numBox">
        <span class="num">數量</span>
        <div class="numBtn">
          <span @click="minusNumCount">–</span>
          <input type="text" v-model="num" />
          <!-- <input type="text" :value="num"  /> -->
          <span class="addBtn" @click="addNumCount">+</span>
        </div>
      </div>
      <div class="collectBox" @click="alertFn">
        <div class="collectImg">
          <img src="@/assets/images/collect.svg" alt="" />
        </div>
        <span>加入收藏</span>
      </div>
    </div>

    <div class="productBtnBox">
      <button type="button" class="addCartBtn" @click="alertFn">
        加入購物車
      </button>
      <button type="button" class="buyBtn" @click="alertFn">立即購買</button>
      <!-- <a href="">加入購物車</a>
      <a class="buyNowBtn" href="">立即購買</a> -->
    </div>

    <p class="stock" v-if="props.numItems.data[stockNum] < 20">
      現在庫存只剩下 {{ props.numItems.data[stockNum] }} 件
    </p>
    <p class="stock" v-else>庫存充足</p>

    <p v-show="stockNotic" class="stockNotic">您所填寫的商品數量超過庫存</p>
    <!-- <p>{{ num }}</p> -->
  </div>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/product/_productMainText.scss"
  scoped
></style>
