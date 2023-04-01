<script>
// ----------------- Vue使用方法 -----------------
import { computed, ref, watch } from "vue";

export default {
  // 注意，「遞迴元件」必須要有 `name` 屬性，這樣在 template 內才會認得
  // name: "MyPagination",
  props: {
    total: {
      type: Number,
    },
    pagesize: {
      type: Number,
    },
    keyWord: {
      type: String,
      Number,
      default: "",
    },
    keyWordFinish: {
      type: String,
      Number,
      default: "",
    },
  },

  // setup(props, context)
  // context.emit("CallBack", num); // (事件名稱, 要回傳的內容)

  // -解構 setup(props, { emit, attrs })
  // 可以直接用emit("CallBack", num); // (事件名稱, 要回傳的內容)

  setup(props, { emit, attrs }) {
    // ----------------- 定義資料 -----------------
    const skipNum = ref(); // 跳轉頁數
    const currentPage = ref(attrs.currentPage); // 當前在第幾頁

    // ----------------- computed -----------------
    // 計算總頁數
    // Math.ceil()：無條件進位，回傳小於等於所給數字的最大整數
    const pages = computed(() => Math.ceil(props.total / props.pagesize));

    // 頁碼顯示 (判斷頁碼要顯示幾頁)
    const listShow = computed(() => {
      const result = [];
      // 判斷沒有省略號...的情況
      // 總頁數 <= 5頁 的時候
      // 若要取得上面定義的資料，要使用.value的方式
      if (pages.value <= 5) {
        for (let i = 1; i <= pages.value; i++) {
          result.push(i);
        }
      } else {
        // 判斷有省略號...的情況，是否要顯示左右兩邊的省略號...
        // 使選中的頁碼居中
        // 當前頁碼 <= 5頁 的時候
        if (currentPage.value <= 2) {
          for (let i = 1; i <= 5; i++) {
            result.push(i);
          }
        } else if (
          // && 是 且
          currentPage.value >= 3 &&
          currentPage.value <= pages.value - 2
        ) {
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i);
          }
        } else if (currentPage.value > pages.value - 2) {
          for (let i = pages.value - 4; i <= pages.value; i++) {
            result.push(i);
          }
        }
      }
      return result;
    });

    // ----------------- function -----------------
    // 頁碼按鈕事件
    const changePage = (type) => {
      // 點擊上一頁
      if (type === false) {
        if (currentPage.value <= 1) return;
        currentPage.value -= 1;
      } else if (type === true) {
        // 點擊下一頁
        if (currentPage.value >= pages.value) return;
        currentPage.value += 1;
      } else {
        // 點擊頁碼數字
        currentPage.value = type;
      }
      // 傳給父組件-當前的頁面
      // emit(事件名稱, 要回傳的內容)
      emit("change-page", currentPage.value);
    };

    // 頁碼跳轉事件
    const goPage = () => {
      // 判定填入的內容
      if (typeof skipNum.value !== "number") {
        // console.log("不是一個數字");
        alert("請填入數值");
        skipNum.value = ""; // 清空輸入框
      } else if (skipNum.value > pages.value) {
        // console.log("不能大於總頁數");
        alert("查無此頁碼，請重新輸入");
        skipNum.value = ""; // 清空輸入框
      } else if (skipNum.value < 1) {
        // console.log("不能小於1");
        alert("請輸入正確頁碼");
        skipNum.value = ""; // 清空輸入框
      } else {
        // console.log("正確頁碼");
        currentPage.value = skipNum.value;
        // emit(事件名稱, 要回傳的內容)
        emit("change-page", skipNum.value);
        skipNum.value = ""; // 清空輸入框
      }
    };

    // ----------------- watch -----------------
    // ref監控 - 監控單一的key (O)
    // 必須使用函式return的方式還去做監控
    // 使頁碼回到第一頁
    watch(
      () => props.keyWordFinish,
      (newVal) => {
        // console.log("ref:", newVal);
        if (props.keyWordFinish === "") {
          changePage(1);
        } else {
          changePage(1);
        }
      }
    );

    watch(
      () => props.keyWord,
      (newVal) => {
        // console.log("ref:", newVal);

        if (props.keyWord === "") {
          changePage(1);
        } else {
          // console.log("數字-父組件");
          // changePage(1);
        }
      }
    );

    return {
      currentPage,
      pages,
      listShow,
      changePage,
      goPage,
      skipNum,
      props,
    };
  },
};
</script>

<template>
  <section class="paginationBox">
    <div class="pagination">
      <!-- 上一頁 -->
      <div
        class="preBtn arrowBtn"
        :class="{ disabled: currentPage === 1 }"
        @click="changePage(false)"
      >
        <img src="@/assets/images/preIcon.svg" alt="" />
      </div>

      <!-- ( … 頁碼過多) -->
      <span class="dot" v-if="currentPage > 3">...</span>

      <!-- 頁碼 -->
      <ul class="pageItemBox">
        <li
          class="pageItem"
          v-for="item in listShow"
          :key="item"
          :class="{ active: currentPage === item }"
          @click="changePage(item)"
        >
          {{ item }}
        </li>
      </ul>

      <!-- ( … 頁碼過多) -->
      <span class="dot" v-if="currentPage < pages - 2">...</span>

      <!-- 下一頁 -->
      <div
        class="nextBtn arrowBtn"
        :class="{ disabled: currentPage === pages }"
        @click="changePage(true)"
      >
        <img src="@/assets/images/nextIcon.svg" alt="" />
      </div>
    </div>

    <!-- 頁碼跳轉 -->
    <div class="goBox">
      <input type="text" v-model.number="skipNum" @keyup.enter="goPage" />
      <!-- <p>input 輸入的是: {{ skipNum }}</p> -->
      <button type="button" @click="goPage">Go</button>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/scss/layout/_pagination.scss" scoped></style>
