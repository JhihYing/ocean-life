<script>
// ----------------- Vue使用方法 -----------------
import { reactive, onMounted } from "vue";

// ----------------- 元件 -----------------
import InfoMenuInformation from "@/components/Global/InfoMenuInformation.vue";
import FaqItem from "@/components/Faq/FaqItem.vue";

export default {
  components: { InfoMenuInformation, FaqItem },

  setup() {
    onMounted(() => {
      const coll = document.getElementsByClassName("collapsible");
      let i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    });

    // 取得 (營業相關) 資料
    const openFaqList = reactive([
      {
        question: "平假日營業時間為何？過年會休館嗎？",
        answer:
          "全年無休，營業時間為週日至週五 10:00-20:30；週六(含國定假日) 9:30-22:00。最後入館時間為閉店前一小時，若遇特殊狀況請依官方網站或粉絲專頁公告為主。",
        isShow: false,
      },
      {
        question: "我是外籍旅客，購票或購物後是否可以退稅？",
        answer: "Ocean Life無提供退稅之服務，敬請見諒。",
        isShow: false,
      },
      {
        question: "若有相關的合作提案，可以與誰聯繫呢？",
        answer:
          "請將您的提案寄至service@OceanLife.com.tw，若有需要會主動與您聯繫。",
        isShow: false,
      },
    ]);

    // 取得 (交通相關) 資料
    const trafficFaqList = reactive([
      {
        question: "如何抵達OCEAN LIFE?",
        answer: "請參考交通方式",
        isShow: false,
      },
      {
        question: "有附設停車場嗎？停車費如何計算？購票可折抵停車費嗎？",
        answer:
          "本館有設置停車場，竭誠歡迎您蒞臨。停車費平日一小時40元、假日一小時50元。一張成人票券可折抵一小時，一台汽車限抵一張(不累計)，於停車場操作繳費機並掃描票券Qrcode即可折抵。",
        isShow: false,
      },
      {
        question: "是否有接駁車？",
        answer: "Ocean Life無提供接駁車之服務。",
        isShow: false,
      },
    ]);

    // 取得 (票務問題) 資料
    const ticketFaqList = reactive([
      {
        question: "如何購票？票價怎麼計算？",
        answer: "請參考票價&購票。",
        isShow: false,
      },
      {
        question: "可以退票嗎？",
        answer:
          "現場購票接受現金、信用卡(VISA、MASTER、JCB及手機PAY等服務)，線上購票請見購票網站說明。",
        isShow: false,
      },
      {
        question: "可使用國旅卡嗎？",
        answer: "可使用國旅卡於售票口處購票。",
        isShow: false,
      },
    ]);

    // 取得 (參觀及服務) 資料
    const serveFaqList = reactive([
      {
        question: "有置物櫃或行李托放服務服務嗎?",
        answer: "館內並未設有置物櫃或行李托放之服務。",
        isShow: false,
      },
      {
        question: "有提供嬰兒車或輪椅嗎?",
        answer: "館內提供嬰兒車租借(借用方式請洽服務台)，未提供輪椅租借。。",
        isShow: false,
      },
      {
        question: "可攜帶寵物入館嗎？有提供寵物寄放嗎？",
        answer: "館內禁止攜帶寵物(導盲犬除外)進入參觀，亦無提供寄放服務。",
        isShow: false,
      },
      {
        question: "館內有提供素食餐點嗎？",
        answer:
          "館內有設置「Ocean Blue」餐廳。為維護觀覽品質館內禁帶外食，必要性食物(例如：嬰兒副食品、水、無碘飲食……等)除外。",
        isShow: false,
      },
      {
        question: "紀念品店需要門票才能進入嗎?",
        answer:
          "「Ocean Fun」紀念品商店目前不對外開放，需要購買門票才能進入參觀選購。",
        isShow: false,
      },
    ]);

    return {
      openFaqList,
      trafficFaqList,
      ticketFaqList,
      serveFaqList,
    };
  },
};
</script>

<template>
  <main class="faq">
    <InfoMenuInformation />

    <div class="containerMain">
      <div class="faqBox">
        <h4>營業相關</h4>
        <ul class="faqBoxUl openFaq">
          <FaqItem :type="openFaqList" />
        </ul>
      </div>

      <div class="faqBox">
        <h4>交通相關</h4>
        <ul class="faqBoxUl trafficFaq">
          <FaqItem :type="trafficFaqList" />
        </ul>
      </div>

      <div class="ticketFaq faqBox">
        <h4>票務問題</h4>
        <ul class="faqBoxUl">
          <FaqItem :type="ticketFaqList" />
        </ul>
      </div>

      <div class="serveFaq faqBox">
        <h4>參觀及服務</h4>
        <ul class="faqBoxUl">
          <FaqItem :type="serveFaqList" />
        </ul>
      </div>

      <div class="othersFaq">
        <p>如果您有任何其他問題及疑問，歡迎隨時與我們聯繫詢問。</p>

        <router-link class="contactBtn" to="/information/contact"
          >聯絡我們</router-link
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/faq/_faq.scss" scoped></style>
