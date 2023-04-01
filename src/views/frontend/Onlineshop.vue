<script>
// 套件(Axios)
import axios from "axios";

import BgTitle from "@/components/Global/BgTitle.vue";
import ProductItem from "@/components/Global/ProductItem.vue";
import Pagination from "@/components/Global/Pagination.vue";
import Loading from "@/components/Global/Loading.vue";

import { computed, reactive, ref, onMounted, watch } from "vue";

export default {
  components: { ProductItem, BgTitle, Pagination, Loading },
  setup() {
    const loading = ref(true); // false完成

    // --------------- 定義資料 ---------------
    // 所有商品
    const productDatas = reactive({ data: [] });

    // 所有商品 (關鍵字-篩選後)
    const filterDatas = reactive({ data: [] });

    // 當前在第幾頁 (預設第1頁)
    const currentPage = ref(1);

    // 每頁顯示幾筆資料 (預設顯示8筆)
    const pagesize = ref(8);

    // 關鍵字 (v-model雙向綁定，立即更新)
    const keyWord = ref("");

    // 關鍵字
    const keyWordFinish = ref("");

    // 資料長度
    const dataLength = ref("");

    const sortAnswer = ref("");

    // -------------- 取得資料 ---------------
    // 所有商品
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/productPage")
        .then((response) => {
          // console.log(response.data);
          // console.log(Object.values(response.data));

          const toArray = Object.values(response.data);

          // productDatas.data = toArray.reverse();
          productDatas.data = toArray
            .filter(function (e) {
              return e.productStatus === "上架";
            })
            .reverse();

          dataLength.value = productDatas.data.length;
          // console.log(dataLength.value);

          loading.value = false;
        });
    });

    // -------------- computed ---------------

    const lists = computed(() => {
      // 初始畫面 (傳回全部資料)
      if (keyWordFinish.value === "" || keyWord.value === "") {
        return productDatas.data.slice(
          (currentPage.value - 1) * pagesize.value,
          currentPage.value * pagesize.value
        );
      } else {
        // 傳回全部資料 (關鍵字篩選後)
        return filterDatas.data.slice(
          (currentPage.value - 1) * pagesize.value,
          currentPage.value * pagesize.value
        );
      }
    });

    // 功能 | 關鍵字篩選 ()
    filterDatas.data = computed(() => {
      const strArr = keyWordFinish.value.split(" "); // 以空白格切分字串
      const arr = []; // 篩選出搜尋結果的陣列

      strArr.forEach((str) => {
        // console.log("str是什麼" + str); // 輸入的關鍵字
        productDatas.data.forEach((item) => {
          if (item.productName.includes(str)) {
            arr.push(item);
          }
        });
      });

      // console.log("arr" + arr);

      return [...new Set(arr)]; // Set 轉成 Array
    });

    // -------------- watch ---------------

    watch(
      () => keyWord.value,
      (newVal) => {
        // console.log("ref:", newVal);

        if (keyWord.value === "") {
          dataLength.value = productDatas.data.length;
          // console.log(dataLength.value);
        } else {
          // console.log("其他");
        }
      }
    );

    // -------------- function ---------------
    // 子元件傳遞當前所選擇的頁碼
    // newlist：子元件(Pagination.vue)傳來的，參數：currentPage.value (當前所選擇的頁碼)
    const newlist = (e) => {
      currentPage.value = e;
    };

    // 點擊搜尋按鈕
    const goSearch = () => {
      if (keyWord.value === "") {
        dataLength.value = productDatas.data.length;
        keyWordFinish.value = "";
      } else {
        keyWordFinish.value = keyWord.value;
        dataLength.value = filterDatas.data.length;
      }
    };

    return {
      lists,
      currentPage,
      pagesize,
      newlist,
      productDatas,
      keyWord,
      filterDatas,
      dataLength,
      goSearch,
      keyWordFinish,
      sortAnswer,
      loading,
      // sortByDate,
    };
  },
};
</script>

<template>
  <main class="onlineshop">
    <BgTitle>
      <template v-slot:titleCN>線上商城 </template>
      <template v-slot:titleEN>Online Shop </template>
    </BgTitle>

    <div class="containerMain">
      <div class="titleBox">
        <h3>全部商品</h3>
        <div class="serchSortBox">
          <div class="searchBox">
            <input
              type="serch"
              placeholder="請輸入商品名稱"
              v-model.lazy.trim="keyWord"
              @keyup.enter="goSearch"
            />
            <button class="searchBtn" type="button" @click="goSearch"></button>
          </div>
          {{ sortAnswer }}

          <!-- <select name="" id="" v-model="sortAnswer">
            <option value="" disabled>排列依據</option>
            <option value="dateNew">上架時間：由新至舊</option>
            <option value="dateOld">上架時間：由舊至新</option>
            <option value="priceLow">價錢：由低至高</option>
            <option value="priceHigh">價錢：由高至低</option>
          </select> -->
        </div>
      </div>

      <section v-if="loading" class="loading">
        <Loading />
      </section>
      <section v-else>
        <section class="productBox">
          <ul class="productList">
            <!-- 商品資料 -->
            <ProductItem :lists="lists" />
          </ul>
        </section>

        <!-- 頁碼 -->
        <Pagination
          :total="dataLength"
          :pagesize="pagesize"
          :currentPage="currentPage"
          @change-page="newlist"
          :keyWord="keyWord"
          :keyWordFinish="keyWordFinish"
        />
      </section>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/onlineshop/_onlineshop.scss"
  scoped
></style>
