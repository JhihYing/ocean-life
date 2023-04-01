<script>
// 套件(Axios)
import axios from "axios";

// Vue 方法
import { useRoute } from "vue-router";
import { ref, inject, reactive, onMounted } from "vue";
import Loading from "@/components/Global/Loading.vue";

export default {
  components: { Loading },
  setup() {
    const loading = ref(true); // false完成

    const route = useRoute();
    // --------------- 定義資料 ---------------
    // 該個商品
    const productDatas = reactive({ data: [] });

    // 控制圖片顯示
    const imageOpen = ref(true);

    // 預覽圖 (axios)
    // const imagesAxios = ref("");
    const imagesAxios = reactive({ data: [""] });

    // 庫存
    const numItems = reactive({ data: [""] });

    // 存放預覽圖片
    const previewList = reactive({ data: [] });

    // 存放實際檔案
    const imageList = reactive({ data: [] });

    // reload (inject)
    const reload = inject("reload");

    // 彈跳視窗 (是否顯示)
    const popupBtn = ref(false);

    // 預覽圖
    const images = ref("");

    // 所上傳的圖片
    // 在vue3中，如果DOM上使用了ref，必須在setup中先定義，否則打包會報錯。
    const fileInput = ref(null);

    const titleInput = ref(null);
    const priceInput = ref(null);
    const salePriceInput = ref(null);
    const typeInput = ref(null);
    const numInput = ref(null);

    const contentInput = ref(null);
    const materialInput = ref(null);
    const sizeInput = ref(null);
    const madeInput = ref(null);
    const remarkInput = ref(null);

    const form = ref(null);

    // v-model資訊
    const title = ref("");
    const content = ref("");
    const remark = ref("");
    const status = ref("");
    const price = ref("");
    const priceSale = ref("");
    const size = ref("");
    const mf = ref("");
    const material = ref("");

    // 規格
    const specItems = reactive({ data: [] });
    // const specItems = reactive({ data: [""] });

    // -------------- 取得資料 ---------------
    // 所選擇的新聞
    onMounted(() => {
      axios
        .post("https://oceandemo.herokuapp.com/MySpringBoot/findByProductID", {
          productId: getId(),
        })
        .then((response) => {
          // console.log(response.data);

          // const toArray = Object.values(response.data);

          productDatas.data = response.data;

          title.value = response.data.productName;
          // content.value = response.data.productContent;
          // remark.value = response.data.productRemark;
          content.value = response.data.productContent.replace(/<br>/g, "\n");
          remark.value = response.data.productRemark.replace(/<br>/g, "\n");

          status.value = response.data.productStatus;
          price.value = response.data.productPrice;
          priceSale.value = response.data.productPriceSale;
          size.value = response.data.productSpenSize;
          mf.value = response.data.productSpenMF;
          material.value = response.data.productSpenMaterial;

          // console.log("規格型別" + typeof response.data.productType);
          // console.log(response.data.productType);
          // console.log("規格" + response.data.productType.split(","));

          // 字串轉型為陣列
          // console.log(typeof response.data.productType.split(","));
          // console.log(response.data.productType.split(","));
          // console.log("庫存" + response.data.productNum);
          specItems.data = response.data.productType.split(",");

          numItems.data = response.data.productNum.split(",");
          // specItems.data.push(response.data.productType.split(","));

          // numItems.data.push(response.data.productNum);
          // console.log(specItems.data);
          // console.log(specItems.data[0].length);

          // 傳入對應資料
          // console.log(activityDatas.data);
          // console.log("圖片" + response.data.productImg);

          imagesAxios.data = response.data.productImg;
          // console.log(imagesAxios.data);
          // console.log(previewList.data);
          previewList.data = response.data.productImg;
          // console.log(previewList.data);

          // imageList.data = response.data.productImg;

          loading.value = false;
        });
    });

    // -------------- function ---------------
    // 取得該篇新聞的ID
    const getId = () => {
      return route.query.id;
    };

    // console.log("傳來的參數:" + getId);
    // console.log("傳來的參數:" + getId());

    // -------------- function ---------------
    // 取得資料
    const submitFn = (e) => {
      if (form.value.reportValidity()) {
        // (1) 取得表單資料
        const titleInfo = $("#title").val(); // 標題
        const priceInfo = $("#price").val(); // 原價
        const salePriceInfo = $("#salePrice").val(); // 售價
        // const numInfo = $("#num").val(); // 庫存

        const contentInfo = $("#content").val(); // 說明
        const materialInfo = $("#material").val(); // 材質
        const sizeInfo = $("#size").val(); // 尺寸
        const madeInfo = $("#made").val(); // 產地
        const remarkInfo = $("#remark").val(); // 備註
        const statusInfo = $("#status").val(); // 狀態

        // console.log(titleInfo);
        // console.log(priceInfo);
        // console.log(salePriceInfo);
        // console.log(numInfo);

        // console.log(contentInfo);
        // console.log(materialInfo);
        // console.log(sizeInfo);
        // console.log(madeInfo);
        // console.log(remarkInfo);
        // console.log(statusInfo);

        // (2) 轉成 FormData 檔案格式
        const formData = new FormData(); // 就能建立一個FormData格式的內容

        // append 增加一個欄位到表單內，其中一個 file-to-upload
        // file-to-upload 是 input標籤name 的名稱

        formData.append("productId", getId()); // 文章ID

        // for (let i = 0; i < fileInput.value.files.length; i++) {
        //   formData.append("file-to-upload", fileInput.value.files[i]); // 活動圖片
        // }
        for (let i = 0; i < imageList.data.length; i++) {
          formData.append("file-to-upload", imageList.data[i]); // 活動圖片
        }

        formData.append("name", titleInfo); // 標題
        formData.append("price", priceInfo); // 原價
        formData.append("priceSale", salePriceInfo); // 售價
        formData.append("type", specItems.data); // 規格
        formData.append("num", numItems.data); // 庫存

        formData.append("content", contentInfo); // 說明
        formData.append("meterial", materialInfo); // 材質
        formData.append("size", sizeInfo); // 尺寸
        formData.append("mf", madeInfo); // 產地
        formData.append("remark", remarkInfo); // 備註
        formData.append("status", statusInfo); // 狀態

        // console.log(formData);

        // (3) 將form表單的內容透過API的方式，發送到伺服器
        // const fileName = fileInput.value.id;

        const url =
          "https://oceandemo.herokuapp.com/MySpringBoot/updateProduct";

        axios
          .post(url, formData)
          .then(function (res) {
            // console.log(res.data);
            // alert("新增成功");

            reload();
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        e.preventDefault();
        // console.log("請完成必填欄位");
      }
    };

    // $("#imgInput").one("change", function () {
    //   previewList.data = [];
    // });

    const init = () => {
      previewList.data = [];
    };

    const invoked = ref(false);
    // 預覽圖 (多圖)
    const previewMultiImage = (e) => {
      // 記錄狀態
      // let invoked = false;
      if (!invoked.value) {
        invoked.value = true;
        init();
      }
      const input = e.target;
      let count = input.files.length; // 選擇幾張照片
      let index = 0;

      // console.log(count);

      if (input.files) {
        // console.log("input.files");
        // console.log(count);
        // console.log(index);

        while (count--) {
          // console.log("迴圈 " + count);

          const reader = new FileReader();
          reader.onload = (e) => {
            if (previewList.data.length < 6) {
              previewList.data.push(e.target.result);
            }
            // else {
            //   // alert("只能放六張圖片");
            //   return;
            // }
          };

          imageList.data.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;

          // console.log(imageList.data);
          imageOpen.value = false;
        }
      }
    };

    const onAdd = () => {
      // console.log("點擊");

      if (specItems.data.length < 5) {
        specItems.data.push("");
        // console.log(specItems.data);
        // console.log(numItems.data);
      } else {
        alert("以達到上限");
      }
    };

    const onMinus = (index) => {
      // console.log("點擊刪除");
      // console.log(index);
      // console.log("event", index);
      specItems.data.splice(index, 1);
      numItems.data.splice(index, 1);
    };

    const inp = () => {
      // console.log(specItems.value);
    };

    return {
      invoked,
      init,
      typeInput,
      inp,
      // specItems,
      onAdd,
      fileInput,
      priceInput,
      salePriceInput,
      numInput,
      contentInput,
      materialInput,
      sizeInput,
      madeInput,
      remarkInput,
      previewMultiImage,
      previewList,
      imageList,
      popupBtn,
      form,
      images,
      submitFn,
      reload,
      numItems,
      productDatas,
      imagesAxios,
      imageOpen,
      price,
      priceSale,
      size,
      mf,
      material,
      title,
      content,
      remark,
      status,
      specItems,
      titleInput,
      onMinus,
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
      <!-- 傳來的index:{{ $route.query.index }} -->
      <h3>商品管理</h3>
      <span>- 編輯商品</span>
      <!-- 傳來的參數:{{ $route.query.id }} -->
    </div>

    <!-- 表格資料 -->
    <form
      ref="form"
      action="https://oceandemo.herokuapp.com/MySpringBoot/updateProduct"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="tableBox">
        <ul class="tableContent">
          <li>
            <label for="">商品編號</label>
            <p>{{ $route.query.index }}</p>
          </li>

          <!-- 圖片區域 -->
          <li>
            <label for="">圖片*</label>

            <div class="imageBox">
              <!-- 上傳按鈕 -->
              <input
                type="file"
                class="imgInput"
                id="imgInput"
                name="file-to-upload"
                ref="fileInput"
                multiple
                @change="previewMultiImage"
              />
              <p>※ 上傳數量以六張為限，第一張為首圖，請依序上傳</p>

              <!-- 預覽圖 -->
              <div class="showImgBox">
                <template v-if="previewList.data.length">
                  <!-- imgBox會依照上傳數量變動 -->
                  <div
                    class="imgBox"
                    v-for="(item, index) in previewList.data"
                    :key="index"
                  >
                    <!-- 新的 -->
                    <img class="showImg" :src="item" v-if="!imageOpen" />

                    <!-- 載入舊圖檔 -->
                    <img
                      :src="'data:image/png;base64,' + item"
                      v-if="imageOpen"
                    />
                    <!-- <img
                    :key="index"
                    :src="'data:image/png;base64,' + imagesAxios.data"
                    v-if="imageOpen"
                  /> -->
                  </div>
                </template>
              </div>
            </div>
          </li>

          <li>
            <label for="">名稱*</label>
            <input
              required
              type="text"
              name="name"
              id="title"
              ref="titleInput"
              v-model.trim="title"
            />
          </li>
          <li>
            <div class="box priceBox">
              <label class="price" for="">原價*</label>
              <input
                required
                type="text"
                name="price"
                id="price"
                ref="priceInput"
                v-model.trim="price"
              />
            </div>
            <div class="box">
              <label for="">售價</label>
              <input
                type="text"
                name="priceSale"
                id="salePrice"
                ref="salePriceInput"
                v-model.trim="priceSale"
              />
            </div>
          </li>

          <li class="specLi">
            <label for="">規格/庫存*</label>

            <!-- specNumBox 會依照輸入的數量變動 -->
            <div class="specNumSection">
              <div
                class="specNumBox"
                v-for="(item, i) of specItems.data"
                :key="i"
              >
                <!-- {{ item }} -->
                <div class="specBox">
                  <input
                    class="spec"
                    type="text"
                    name="type"
                    id="type"
                    ref="typeInput"
                    v-model.trim="specItems.data[i]"
                    @input="inp"
                    required
                  />
                  <!-- <span>{{ i + 1 }}/5</span> -->
                  <span>規格</span>
                </div>

                <div class="numBox">
                  <input
                    required
                    type="text"
                    name="num"
                    id="num"
                    ref="numInput"
                    v-model.trim="numItems.data[i]"
                  />
                  <span>庫存</span>
                </div>
                <span>{{ i + 1 }}/5</span>

                <!-- <button type="button" class="minusBtn" @click="onMinus">-</button> -->
                <button type="button" class="minusBtn" @click="onMinus(i)">
                  -
                </button>
              </div>

              <button type="button" class="addBtn" @click="onAdd">+</button>
            </div>
          </li>

          <!-- <li>
          <label for="">庫存</label>
          <input type="text" name="num" id="num" ref="numInput" />
        </li> -->
        </ul>
      </div>

      <h3 class="productInfo">商品詳情</h3>
      <div class="tableBox">
        <ul class="tableContent">
          <li class="positionTop">
            <label for="">說明*</label>
            <textarea
              required
              name="content"
              id="content"
              ref="contentInput"
              v-model.trim="content"
            ></textarea>
          </li>
          <li>
            <label for="">材質*</label>
            <input
              required
              type="text"
              name="meterial"
              id="material"
              ref="materialInput"
              v-model.trim="material"
            />
          </li>
          <li>
            <div class="box priceBox">
              <label for="">尺寸*</label>
              <input
                required
                type="text"
                name="size"
                id="size"
                ref="sizeInput"
                v-model.trim="size"
              />
            </div>
            <div class="box">
              <label for="">產地*</label>
              <input
                required
                type="text"
                name="mf"
                id="made"
                ref="madeInput"
                v-model.trim="mf"
              />
            </div>
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
            <label for="">商品狀態*</label>
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
          <!-- :key="$route.path" -->

          <router-link to="/backend/onlineBackend/online/productd">
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
            <router-link to="/backend/onlineBackend/online/product">
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
  src="@/assets/scss/layout/backend/_productBackendEditor.scss"
  scoped
></style>
