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
    const memberDatas = reactive({ data: [] });

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
    // 所有會員
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/findAllUser")
        .then((response) => {
          memberDatas.data = response.data;
          dataLength.value = response.data.length;
          // console.log(memberDatas.data);

          loading.value = false;
        });
    });

    // -------------- computed ---------------
    // 功能 | 分頁顯示的資料
    const lists = computed(() => {
      // 初始畫面 (傳回全部資料)
      if (keyWordFinish.value === "" || keyWord.value === "") {
        return memberDatas.data.slice(
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
        memberDatas.data.forEach((item) => {
          if (item.userName.includes(str) || item.userAccount.includes(str)) {
            arr.push(item);
          }
          // else {
          //   console.log(item.valueEN);
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
          dataLength.value = memberDatas.data.length;
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
      if (keyWord.value === "") {
        dataLength.value = memberDatas.data.length;
        keyWordFinish.value = "";
      } else {
        keyWordFinish.value = keyWord.value;
        dataLength.value = filterDatas.data.length;
      }
    };

    return {
      memberDatas,
      lists,
      currentPage,
      pagesize,
      newlist,
      editorBtn,
      keyWord,
      keyWordFinish,
      dataLength,
      goSearch,
      filterDatas,
      idInfo,
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
      <h3>會員管理</h3>

      <!-------------- 消息管理(標題) 區域 -------------->
      <div class="textBox">
        <div class="infoBox">
          <p>
            共有
            <span>{{ dataLength }}位</span>
            會員
          </p>

          <div class="searchBox">
            <input
              type="serch"
              placeholder="會員姓名、帳號"
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
            <th>會員編號</th>
            <th class="title">姓名</th>
            <th>性別</th>
            <th>帳號</th>
            <th>註冊日期</th>
            <th>最後更新時間</th>
            <th>會員狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in lists" :key="item.userId">
            <td>
              <!-- <input
                class="check"
                type="checkbox"
                v-show="editorBtn"
                @click="getID($event, item.userId)"
              /> -->
            </td>
            <td>{{ (currentPage - 1) * pagesize + index + 1 }}</td>
            <td>{{ item.userName }}</td>
            <td>{{ item.userGender }}</td>
            <td>{{ item.userAccount }}</td>
            <!-- <td>{{ item.productNum }}</td> -->
            <td>{{ item.createDate }}</td>
            <td>{{ item.updateDate }}</td>
            <td>
              <button
                type="bttton"
                class="stateBtn"
                :class="{ off: item.userStatus == '停權' }"
              >
                {{ item.userStatus }}
              </button>
            </td>
            <td>
              <router-link
                :to="{
                  path: '/backend/memberbackend/editor',
                  query: {
                    id: item.userId,
                    index: (currentPage - 1) * pagesize + index + 1,
                  },
                }"
              >
                <button type="bttton" class="editorBtn">編輯</button>
              </router-link>
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
  src="@/assets/scss/layout/backend/_memberBackend.scss"
  scoped
></style>
