<script>
export default {
  props: ["lists"],
  setup(props) {
    // console.log(props.lists);
    return { props };
  },
};
</script>

<template>
  <li class="productCard" v-for="item in props.lists" :key="item.productId">
    <router-link
      :to="{
        path: '/onlineshop/product',
        query: {
          id: item.productId,
        },
      }"
    >
      <div class="productImg">
        <img :src="'data:image/png;base64,' + item.productImg[0]" alt="" />
        <!-- <img
          :src="require(`@/assets/images/${item.img}.jpg`)"
          :alt="item.productName"
        /> -->
      </div>
      <div class="productInfo">
        <h5>{{ item.productName }}</h5>
        <div class="priceBox">
          <p :class="{ saleActive: item.productPriceSale !== '' }">
            NT${{ item.productPrice }}
          </p>

          <div v-if="item.productPriceSale !== ''" class="saleBox">
            <span class="salePrice">NT${{ item.productPriceSale }}</span>
            <span class="sale">sale</span>
          </div>
          <!-- <span v-if="item.productPriceSale !== ''" class="salePrice"
            >NT${{ item.productPriceSale }}</span
          >
          <span v-if="item.productPriceSale !== ''" class="sale">sale</span> -->
        </div>
      </div>
    </router-link>
  </li>

  <!-- <li class="productCard">
    <a href="">
      <div class="productImg">
        <img src="@/assets/images/product01.jpg" alt="" />
      </div>
      <div class="productInfo">
        <h5>夢幻海洋護手霜</h5>
        <div class="priceBox">
          <p>NT$900</p>
        </div>
      </div>
    </a>
  </li> -->
</template>

<style lang="scss" src="@/assets/scss/layout/_productItem.scss" scoped></style>
