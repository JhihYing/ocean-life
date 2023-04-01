<script>
import { reactive } from "vue";

export default {
  setup() {
    // --------------- 定義資料 ---------------
    // 表格-票價
    const ticketList = reactive([
      {
        type: "成人票",
        price: "NT$550",
        applyPeople: "限18歲(含)以上成人使用",
      },
      {
        type: "學生票",
        price: "NT$400",
        applyPeople: "限12歲(含)以上持學生證之學生適用",
      },
      {
        type: "博愛票",
        price: "NT$250",
        applyPeople:
          "限持有身心障礙證明者與1位陪同者、孕婦、滿65歲以上長者適用",
      },
      {
        type: "團體票",
        price: "NT$450",
        applyPeople:
          "20人以上同一機關團體。請3天前辦妥預約手續為宜，以利協助安排團體導覽、購票與快速驗票入館事宜（02-2690-9031)",
      },
    ]);

    return { ticketList };
  },
};
</script>

<template>
  <table class="ticketTable">
    <thead>
      <tr>
        <th>票種</th>
        <th>價錢</th>
        <th class="people">適用對象</th>
      </tr>
    </thead>
    <tbody>
      <tr
        :class="{ trBg: index % 2 == 1 }"
        v-for="(item, index) in ticketList"
        :key="item.type"
      >
        <td>{{ item.type }}</td>
        <td>{{ item.price }}</td>
        <td class="ticketWho">{{ item.applyPeople }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/ticket/_ticketTable.scss"
  scoped
></style>
