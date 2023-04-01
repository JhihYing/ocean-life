<script>
// 套件(Axios)
import axios from "axios";

// Vue 方法
import { useRoute } from "vue-router";
import { reactive, onMounted, ref, inject } from "vue";

import Loading from "@/components/Global/Loading.vue";

export default {
  components: { Loading },
  setup() {
    const route = useRoute();
    const loading = ref(true); // false完成
    // --------------- 定義資料 ---------------
    // reload (inject)
    const reload = inject("reload");

    // 控制圖片顯示
    const imageOpen = ref(true);

    // 預覽圖 (axios)
    const imagesAxios = ref("");

    // 預覽圖
    const images = ref("");

    // 該篇消息
    const newsData = reactive({ data: [] });

    // 彈跳視窗 (是否顯示)
    const popupBtn = ref(false);

    // 所上傳的圖片
    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const fileInput = ref(null);
    const titleInput = ref(null);
    const contentInput = ref(null);
    const remarkInput = ref(null);

    const form = ref(null);

    // v-model資訊
    const title = ref("");
    const content = ref("");
    const remark = ref("");
    const status = ref("");
    const valueEN = ref("");

    // -------------- 取得資料 ---------------
    // 所選擇的消息
    onMounted(() => {
      axios
        .post(
          "https://oceandemo.herokuapp.com/MySpringBoot/findArticleByArticleID",
          {
            articleID: getId(),
          }
        )
        .then((response) => {
          // console.log(response);
          newsData.data = response.data;

          title.value = response.data.articleTitle;
          // content.value = response.data.articleContent;
          content.value = response.data.articleContent.replace(/<br>/g, "\n");
          // remark.value = response.data.articleRemark;
          remark.value = response.data.articleRemark.replace(/<br>/g, "\n");
          status.value = response.data.articleStatus;
          valueEN.value = response.data.valueEN;

          // 傳入對應資料
          // console.log(newsData.data);
          // console.log("圖片" + response.data.articleImg);

          imagesAxios.value = response.data.articleImg;

          loading.value = false;
        });
    });

    // -------------- function ---------------
    // 取得該篇消息的ID
    const getId = () => {
      return route.query.id;
    };

    // console.log("傳來的參數:" + getId);
    // console.log("傳來的參數:" + getId());

    // 取得資料
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        // (1) 取得表單資料
        const uploadfile = fileInput.value.files[0]; // 圖片
        // console.dir(uploadfile);

        const typeInfo = $("#value").val();
        const titleInfo = $("#title").val();
        const contentInfo = $("#content").val();
        const remarkInfo = $("#remark").val();
        const statusInfo = $("#status").val();

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // file-to-upload 是 input標籤name 的名稱
        formData.append("id", getId()); // 文章ID

        formData.append("value", typeInfo); // 文章類別
        formData.append("file-to-upload", uploadfile); // 文章圖片
        formData.append("title", titleInfo); // 文章標題
        formData.append("content", contentInfo); // 文章內容
        formData.append("remark", remarkInfo); // 文章內容-備註
        formData.append("status", statusInfo); // 文章狀態

        // console.log(formData);

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url =
          "https://oceandemo.herokuapp.com/MySpringBoot/updateArticle";

        axios
          .post(url, formData)
          .then(function (res) {
            reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        e.preventDefault();
        // console.log("請完成必填欄位");
      }
    };

    // 預覽圖
    const fileChange = () => {
      // (1) 取得選取檔案的資料
      const uploadfile = fileInput.value.files[0];
      // console.log("open file", uploadfile);

      // (2) 建立URL網址:createObjectURL()
      const urlInfo = window.URL.createObjectURL(uploadfile, {
        type: "image/jpeg",
      });
      // console.log("_url", urlInfo);

      // (3) 將URL網址存入images裡
      images.value = urlInfo;

      imageOpen.value = false;
    };

    return {
      form,
      newsData,
      getId,
      popupBtn,
      fileInput,
      images,
      submitFn,
      titleInput,
      contentInput,
      remarkInput,
      fileChange,
      imageOpen,
      imagesAxios,
      reload,
      title,
      content,
      remark,
      status,
      valueEN,
      loading,
      // contentReplace,
      // remarkReplace,
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
      <!-- 傳來的參數:{{ $route.query.id }} -->
      <h3>消息管理</h3>
      <span>- 編輯文章</span>
    </div>

    <!-- 表格資料 -->
    <form
      ref="form"
      action="https://oceandemo.herokuapp.com/MySpringBoot/updateArticle"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="tableBox">
        <ul class="tableContent">
          <li>
            <label for="">文章編號*</label>
            <p>{{ $route.query.index }}</p>
          </li>
          <li>
            <label for="">文章類別*</label>
            <select name="value" id="value" v-model="valueEN">
              <option value="活動消息">活動消息</option>
              <option value="園區公告">園區公告</option>
              <option value="商城公告">商城公告</option>
            </select>
          </li>
          <li>
            <label for="">圖片*</label>
            <div class="box">
              <input
                id="customFile"
                class="imgInput"
                type="file"
                name="file-to-upload"
                ref="fileInput"
                @change="fileChange"
              />
              <div class="imgBox" v-if="!imageOpen">
                <img :src="images" />
              </div>
              <div class="imgBox" v-if="imageOpen">
                <img :src="'data:image/png;base64,' + imagesAxios" />
              </div>
            </div>
          </li>
          <li>
            <label for="">標題*</label>
            <input
              required
              type="text"
              name="title"
              id="title"
              ref="titleInput"
              v-model.trim="title"
            />
          </li>
          <li class="positionTop">
            <label for="">文章內容*</label>
            <textarea
              required
              name="content"
              id="content"
              ref="contentInput"
              v-model.trim="content"
            ></textarea>
          </li>
          <li class="positionTop">
            <label for="">注意事項</label>
            <textarea
              name="remark"
              id="remark"
              ref="remarkInput"
              v-model.trim="remark"
            ></textarea>
          </li>
          <li>
            <label for="">文章狀態*</label>
            <select name="status" id="status" v-model="status">
              <option value="上架">上架</option>
              <option value="下架">下架</option>
            </select>
          </li>
        </ul>
        <!-- <a class="cancel" href="">取消</a> -->
        <div class="btnBox">
          <button
            type="button"
            class="cancelBtn allBtn"
            @click="popupBtn = !popupBtn"
          >
            取消
          </button>

          <router-link to="/backend/newsbackend/news">
            <button type="submit" class="addBtn allBtn" @click="submitFn">
              更新
            </button>
          </router-link>
        </div>
      </div>
    </form>

    <!-- 彈跳視窗 -->
    <main class="ticket-popup" v-show="popupBtn">
      <div class="containerMain">
        <div class="popupTop">
          <h3>關閉視窗</h3>
        </div>

        <div class="popupUnder">
          <p>尚未存檔，是否確認關閉？</p>
          <div class="popupBtnBox">
            <button
              class="popupCloseBtn"
              type="button"
              @click="popupBtn = !popupBtn"
            >
              取消
            </button>
            <router-link to="/backend/newsbackend/news">
              <button class="popupOkBtn" type="button">確定</button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/backend/_newsBackendEditor.scss"
  scoped
></style>
