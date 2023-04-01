<script>
import { reactive } from "vue";

export default {
  props: {
    msg: {
      type: Boolean,
      default: false,
    },
    clickIsOpen: {
      type: Function,
      default: () => {},
    },
  },

  setup(props) {
    // --------------- 定義資料 ---------------
    // 彈跳視窗
    const popupList = reactive([
      "購票時請主動出示相關證件供售票處工作人員驗證，且於進場前請攜帶相關證件以備查驗，若無法提供有效證件者需以成人票身份重新購票；符合優惠身份者持票入場後，不可要求部分退款或貼補門票差額。",
      "未滿4歲且有家長陪同的幼童可免費入場。",
      "館內部分展區及活動為需額外付費之範圍，欲了解相關內容請見官網說明或洽現場工作人員。",
      "票券使用期限依票券上標示日期及入場時間為準，若已使用或逾期則視同作廢，無法接受更換或退票；如發生遺失、遭竊、破損、打洞、塗改、污損、影印或撕毀等無法辨識之情形視為無效票券，恕不受理退換票事宜。",
      "現場販售之當日券如遇特殊原因超過預定時間之未使用票券欲退票，每張票券需酌收實際銷售價格之15%作為手續費。",
      "各通路退換票方式請依各通路公告之規定辦理。",
      "請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。",
      "如因遲到導致無法準時入場，請依各場館之相關規定辦理，恕無法以任何理由要求退費或補償。",
      "為維護館內參觀品質，每個時段皆有人數限制，因此若該場次已售完，請選擇其他場次，並請配合現場人員的人流管制。",
      "配合動物自然生態習性，館內特定區域非全時段開放，請參閱現場公告或洽現場工作人員，敬請知悉並配合。",
      "現場可接受支付方式：現金、悠遊卡、信用卡(VISA、MASTER、JCB)及電子支付(LINE PAY、街口支付及可感應支付之手機PAY)。",
      "特殊卡別優惠(如：桃園市民卡、愛台灣博物館卡......等)，僅提供現場購票。",
    ]);

    return { popupList, props };
  },
};
</script>

<template>
  <main class="ticket-popup" v-show="props.msg">
    <div class="containerMain">
      <h3>購票須知</h3>
      <ul class="buyTicket-notice">
        <li v-for="item in popupList" :key="item">{{ item }}</li>
      </ul>
      <button class="closeBtn" type="button" @click="props.clickIsOpen">
        關閉
      </button>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/ticket/_ticketPopup.scss"
  scoped
></style>
