<script>
// 套件(Axios)
import axios from "axios";

// 組件
import Pagination from "@/components/Global/Pagination.vue";
import Loading from "@/components/Global/Loading.vue";

// Vue 方法
import { computed, reactive, ref, onMounted, watch, inject } from "vue";

export default {
  components: { Pagination, Loading },
  setup() {
    const loading = ref(true); // false完成

    // --------------- 定義資料 ---------------
    // reload (inject)
    const reload = inject("reload");

    // 當前在第幾頁 (預設第1頁)
    const currentPage = ref(1);

    // 每頁顯示幾筆資料 (預設顯示10筆)
    const pagesize = ref(10);

    // 所有產品
    // const productDatas = reactive({ data: [] });
    // const objectProductDatas = reactive({ data: [] });
    const productDatas = reactive({ data: [] });

    // 所有商品 (關鍵字-篩選後)
    const filterDatas = reactive({ data: [] });

    // 編輯按鈕狀態
    const editorBtn = ref(false);

    // 關鍵字 (v-model雙向綁定，立即更新)
    const keyWord = ref("");

    // 關鍵字 (最後輸入完成)
    const keyWordFinish = ref("");

    // 資料長度
    const dataLength = ref("");

    // 所勾選要刪除的ID
    const idInfo = reactive([]);

    // -------------- 取得資料(axios) ---------------
    // 所有商品
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/productPage")
        .then((response) => {
          // console.log("111");
          // console.log(response.data);

          // console.log(Object.values(response.data));
          const toArray = Object.values(response.data);

          // productDatas.data = toArray.reverse();
          productDatas.data = toArray;
          // productDatas.data = response.data.reverse();
          dataLength.value = productDatas.data.length;
          // console.log(dataLength.value);

          loading.value = false;
        });
    });

    // -------------- computed ---------------
    // 功能 | 分頁顯示的資料
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
        // console.log("strArr是什麼" + strArr);
        // console.log("str是什麼" + str); // 輸入的關鍵字
        // console.log(typeof str); // 輸入的關鍵字

        productDatas.data.forEach((item) => {
          // console.log(productDatas.data);
          if (item.productName.includes(str)) {
            arr.push(item);
          }
          // else {
          //   console.log(item.productName);
          // }
        });
      });

      // console.log("arr" + arr);
      return [...new Set(arr)]; // Set 轉成 Array
    });

    // -------------- watch ---------------
    // 監聽 關鍵字(keyWord)的變化
    watch(
      () => keyWord.value,
      (newVal) => {
        // console.log("ref:", newVal);

        if (keyWord.value === "") {
          dataLength.value = productDatas.data.length;
          // console.log(dataLength.value);
        }
        // else {
        //   console.log("其他");
        // }
      }
    );

    // -------------- function ---------------
    // 子元件傳遞當前所選擇的頁碼
    // newlist：子元件(Pagination.vue)傳來的，參數：currentPage.value (當前所選擇的頁碼)
    const newlist = (e) => {
      currentPage.value = e;
    };

    // 點擊(搜尋)按鈕
    const goSearch = () => {
      // console.log("長度");
      // console.log(filterDatas.data);

      if (keyWord.value === "") {
        dataLength.value = productDatas.data.length;
        keyWordFinish.value = "";
      } else {
        keyWordFinish.value = keyWord.value;
        dataLength.value = filterDatas.data.length;
      }
    };

    // 點擊(編輯完成)按鈕
    const finish = () => {
      editorBtn.value = !editorBtn.value;

      // 清空被選取的checkBox
      $(".check").prop("checked", false);
    };

    // 點擊(編輯刪除)按鈕
    const deleteInfo = () => {
      // console.log("刪除");

      axios
        .post(
          `https://oceandemo.herokuapp.com/MySpringBoot/deleteProduct?idList=${idInfo}`
        )
        .then(function (res) {
          // console.log(res.data);
          // console.log("成功");
          reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    // 勾選 - 取得該勾選的ID
    const getID = (e, value) => {
      // console.log(e.target); // 所勾選的元素
      // console.log(value); // 撈取出ID

      if (e.target.checked) {
        // console.log("有打勾");
        idInfo.push(value);
        // console.log(idInfo);
      } else {
        // console.log("沒有打勾");

        idInfo.map((val, i) => {
          if (val === value) {
            idInfo.splice(i, 1);
            // console.log(idInfo);
          }
          return idInfo;
        });
      }
    };

    return {
      getID,
      finish,
      productDatas,
      lists,
      currentPage,
      pagesize,
      newlist,
      editorBtn,
      keyWord,
      keyWordFinish,
      dataLength,
      // objectProductDatas,
      goSearch,
      filterDatas,
      idInfo,
      deleteInfo,
      reload,
      loading,
    };
  },
};
</script>

<template>
  <section v-if="loading" class="loading">
    <Loading />
  </section>
  <section v-else>
    <div class="titleBox">
      <h3>商品管理</h3>

      <!-------------- 消息管理(標題) 區域 -------------->
      <div class="textBox">
        <div class="editorBox">
          <button
            type="bttton"
            class="cancelBtn"
            v-show="editorBtn"
            @click="deleteInfo"
          >
            刪除
          </button>
          <button
            type="bttton"
            class="okBtn"
            v-show="editorBtn"
            @click="finish"
          >
            完成
          </button>

          <button
            type="button"
            class="allEditorBtn"
            v-show="!editorBtn"
            @click="editorBtn = !editorBtn"
          >
            編輯
          </button>
          <router-link
            class="addBtn"
            :to="{
              path: '/backend/onlineBackend/online/add',
              query: {
                id: dataLength + 1,
              },
            }"
            >+ 新增商品</router-link
          >
        </div>

        <div class="infoBox">
          <p>
            共有
            <span>{{ dataLength }}項</span>
            商品
          </p>

          <div class="searchBox">
            <input
              type="serch"
              placeholder="商品名稱"
              v-model.lazy.trim="keyWord"
              @keyup.enter="goSearch"
            />
            <button class="searchBtn" type="button" @click="goSearch"></button>
          </div>
        </div>
      </div>
    </div>

    <!-- 表格內容 -->
    <div class="tableBox">
      <table class="memberTable">
        <thead>
          <tr>
            <th></th>
            <th>商品編號</th>
            <th class="title">名稱</th>
            <th>原價</th>
            <th>售價</th>
            <!-- <th>庫存</th> -->
            <th>上架日期</th>
            <th>最後更新時間</th>
            <th>商品狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in lists" :key="item.productId">
            <td>
              <input
                class="check"
                type="checkbox"
                v-show="editorBtn"
                @click="getID($event, item.productId)"
              />
            </td>
            <td>{{ (currentPage - 1) * pagesize + index + 1 }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.productPrice }}</td>
            <td>{{ item.productPriceSale }}</td>
            <!-- <td>{{ item.productNum }}</td> -->
            <td>{{ item.createDate }}</td>
            <td>{{ item.updateDate }}</td>
            <td>
              <button
                type="bttton"
                class="stateBtn"
                :class="{ off: item.productStatus == '下架' }"
              >
                {{ item.productStatus }}
              </button>
            </td>
            <td>
              <router-link
                :to="{
                  path: '/backend/onlineBackend/online/editor',
                  query: {
                    id: item.productId,
                    index: (currentPage - 1) * pagesize + index + 1,
                  },
                }"
              >
                <button type="bttton" class="editorBtn">編輯</button>
              </router-link>
              <!-- </router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_productBackend.scss"
  scoped
></style>
