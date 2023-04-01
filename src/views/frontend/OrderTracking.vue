<script>
import MemberList from "@/components/Member/MemberList.vue";
import Title from "@/components/Member/Title.vue";

export default {
  components: { MemberList, Title },
};
</script>

<template>
  <main class="orderTracking">
    <div class="containerMain">
      <h3>會員中心</h3>

      <Title />

      <div class="profileBox">
        <MemberList />

        <div class="profile">
          <table class="cartTable">
            <thead>
              <tr>
                <th class="name">訂單編號</th>
                <th>訂單日期</th>
                <th>合計</th>
                <th>訂單狀態</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cartTableName">202110040001</td>
                <td>2021-10-4</td>
                <td>NT$3040</td>
                <td>尚未付款</td>
                <td class="seeBox">
                  <button>查閱</button>
                </td>
              </tr>
              <tr>
                <td class="cartTableName">202110040001</td>
                <td>2021-10-4</td>
                <td>NT$3040</td>
                <td>尚未付款</td>
                <td class="seeBox">
                  <button>查閱</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="collectionNullBox">
            <h4>目前沒有任何訂單</h4>
            <p>
              再忙，也要記得買點什麼東西慰勞自己
              <br />
              讓Ｏcean Life陪伴您的生活
            </p>
            <div class="profileBtn">
              <router-link to="/onlineshop/shopIndex"
                >馬上去逛逛吧！</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/member/_orderTracking.scss"
  scoped
></style>
