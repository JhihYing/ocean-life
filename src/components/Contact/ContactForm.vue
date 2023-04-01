<script>
// Vue 方法
import { ref } from "vue";

export default {
  setup() {
    const form = ref(null);

    // 取得資料
    const submitFn = (e) => {
      // 判斷是否有填寫必填的欄位
      if (form.value.reportValidity()) {
        alert("感謝您的填寫，我們會儘快回覆您！");
      } else {
        e.preventDefault();
        // console.log("請完成必填欄位");
      }
    };

    return { form, submitFn };
  },
};
</script>

<template>
  <form class="contactInfoBox" action="" ref="form">
    <h3>諮詢服務</h3>
    <p>請提供您的聯絡資訊及訊息，OCEAN LIFE客服團隊很樂意為您服務</p>
    <div class="nameBox">
      <label for="name">姓名：</label>
      <div class="flexBox">
        <input class="name" type="text" id="name" required />

        <span class="sexBox">
          <span class="sexMaleBox">
            <input type="radio" name="sex" id="male" checked />
            <label for="male">先生</label>
          </span>
          <span class="sexFemaleBox">
            <input type="radio" name="sex" id="female" />
            <label for="female">小姐</label>
          </span>
        </span>
      </div>
    </div>
    <div class="emailBox">
      <label for="email">可聯繫您的信箱：</label>
      <br />
      <input class="email" type="email" id="email" required />
    </div>
    <div class="contentBox">
      <label for="content">內容描述：</label>
      <br />
      <textarea name="" id="content" required></textarea>
    </div>
    <div class="fileBox">
      <p>
        *可接受檔案數量上限為3，僅支援圖片(jpg / jpeg /
        png)與PDF檔案，且大小必須小於4.5MB
      </p>
      <input class="file" type="file" multiple name="the_file" value="" />
      <br />
    </div>

    <button
      type="submit"
      class="sendContactBtn"
      name="button"
      @click="submitFn"
    >
      發送訊息
    </button>
    <!-- <button class="sendContactBtn" type="submit" name="button" >發送訊息</button> -->
  </form>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/contact/_contactForm.scss"
  scoped
></style>
