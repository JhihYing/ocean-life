<script>
// ----------------- Vue使用方法 -----------------
import { ref, reactive } from "vue";
import InfoMenuInformation from "@/components/Global/InfoMenuInformation.vue";

// ----------------- 元件 -----------------
import TicketTable from "@/components/Ticket/TicketTable.vue";
import TicketPopup from "@/components/Ticket/TicketPopup.vue";

export default {
  components: { TicketTable, TicketPopup, InfoMenuInformation },

  setup() {
    // 表格-注意事項
    const noticeList = reactive([
      "未滿4歲且有家長陪同的幼童可免費入場",
      "購買時請出示相關證件，未攜帶者一律依全票計",
      "票價若有更動，以現場公告為準",
    ]);

    // 按鈕-購票須知
    const isOpen = ref(false);

    // -------------- function ---------------
    // 點擊購票須知按鈕
    const clickIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { noticeList, clickIsOpen, isOpen };
  },
};
</script>

<template>
  <main class="ticket">
    <div class="bg">
      <InfoMenuInformation />
    </div>

    <div class="containerMain">
      <div class="ticketInfoBox">
        <h3>票價</h3>
        <TicketTable />

        <ul class="noticeText">
          <li v-for="item in noticeList" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="buyTicket">
        <h3>網路購票</h3>
        <h6>* 網路購票前請詳閱下方購票須知</h6>
        <hr />
        <p>
          OCEAN
          LIFE門票統一委託<span>KKday系統</span>販售預購，欲想網路購票的民眾請至下方連結KKday網站購買
        </p>
        <div class="buyTicketBTN">
          <button type="button" class="SecondaryBtn" @click="clickIsOpen">
            購票須知
          </button>
          <a
            class="primaryAbtn"
            href="https://www.kkday.com/zh-tw"
            target="_blank"
            >前往購票</a
          >
        </div>
      </div>
    </div>
  </main>

  <transition name="fade">
    <TicketPopup :msg="isOpen" :clickIsOpen="clickIsOpen" />
  </transition>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/ticket/_ticket.scss"
  scoped
></style>
