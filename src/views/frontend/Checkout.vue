<script>
import CartStep from "@/components/Global/CartStep.vue";

export default {
  components: { CartStep },
};
</script>

<template>
  <main class="cartStep02">
    <div class="containerMain">
      <h3>購物車</h3>
      <CartStep />
      <!-- <section class="cartStep">
        <ul class="cartUl">
          <li>
            <div class="circle">
              <p class="stepNum">1</p>
            </div>
            <p>購物車</p>
          </li>
          <li>
            <div class="circle">
              <p class="stepNum">2</p>
            </div>
            <p>填寫資料</p>
          </li>
          <li>
            <div class="circle">
              <p class="stepNum">3</p>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
      </section> -->

      <section class="cartBox">
        <div class="totalBox">
          <h5>合計：NT$200</h5>

          <div class="cart">
            <p>購物車(3件)</p>
            <div class="arrowBox">
              <img src="@/assets/images/arrow-down.svg" alt="" />
            </div>
          </div>
        </div>

        <table class="cartTable">
          <thead>
            <tr>
              <th class="name">商品名稱</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
              <!-- <th></th> -->
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="cartTableName">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productName">
                  <h5>夢幻海洋護手膏</h5>
                  <p>款式-A款（海洋風味）</p>
                </div>
              </td>
              <td>NT$200</td>
              <td>
                <p>2</p>
              </td>
              <td>NT$200</td>
            </tr>
            <tr>
              <td class="cartTableName">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productName">
                  <h5>夢幻海洋護手膏</h5>
                  <p>款式-A款（海洋風味）</p>
                </div>
              </td>
              <td>NT$200</td>
              <td>
                <p>2</p>
              </td>
              <td>NT$200</td>
            </tr>
          </tbody>
        </table>
        <div class="freeBg">
          <p>符合</p>
          <h6>全店，滿3000元 宅配到府「免運」優惠</h6>
        </div>
        <div class="couponPriceBox">
          <!-- <div class="couponBox">
            <h5>優惠代碼</h5>
            <div class="conponText">
              <input type="text" placeholder="請輸入折扣碼" />
              <button>套用</button>
            </div>
            <p>※ 單筆訂單限抵一張折價券。</p>
          </div> -->
          <div class="priceBox">
            <h5>訂單總額</h5>
            <div class="priceCountBox">
              <div class="price priceCount">
                <span class="priceTitle">小計</span>
                <span>NT$200</span>
              </div>
              <div class="fare priceCount">
                <span class="priceTitle">運費</span>
                <span>NT$60</span>
              </div>
              <div class="discount priceCount">
                <span class="priceTitle">折扣</span>
                <span>-NT$200</span>
              </div>
            </div>
            <div class="totalPriceBox">
              <h5>合計</h5>
              <h5>NT$200</h5>
            </div>
          </div>
        </div>
      </section>

      <section class="infoBox">
        <section class="customer-form">
          <div class="title">
            <h5>收件人資料</h5>
          </div>
          <div class="nameSameBox">
            <h5>收件人資料</h5>
            <div class="nameSame">
              <input type="checkbox" id="nameSame" />
              <label for="nameSame">收件人資料與會員資料相同</label>
            </div>
          </div>
          <div class="nameBox">
            <input type="text" placeholder="收件人姓名" />
            <p>務必正確輸入購買人姓名確保正確送達。</p>
          </div>
          <input type="text" placeholder="收件人的聯絡電話" />
          <div class="emailBox">
            <input type="text" placeholder="電子郵件" />
            <p>我們會將您的訂單通知信寄送至此。</p>
          </div>
          <textarea name="" id="" placeholder="訂單備註 (選填)"></textarea>
        </section>

        <div class="right-form">
          <section class="delivery-form">
            <div class="title">
              <h5>送貨 & 付款資料</h5>
            </div>
            <select name="delivery" class="delivery">
              <option value="1" selected>請選擇取貨方式</option>
              <option value="2">黑貓-低溫冷凍宅配</option>
              <option value="3">店內取貨</option>
            </select>

            <div class="addressBox">
              <select name="county" class="county">
                <option value="">請選擇縣市</option>
                <option value="1" selected>新北市</option>
                <option value="2">台北市</option>
                <option value="3">宜蘭縣</option>
              </select>
              <select name="township">
                <option value="">請選擇鄉鎮</option>
                <option value="1" selected>中和區</option>
                <option value="2">永和區</option>
              </select>
            </div>
            <input type="text" placeholder="地址" />

            <select name="delivery">
              <option value="1" selected>請選擇付款方式</option>
              <option value="2">貨到付款</option>
              <option value="3">信用卡付款</option>
            </select>
          </section>

          <section class="invoice-form">
            <div class="title">
              <h5>發票資料</h5>
            </div>
            <select class="invoiceType" name="">
              <option value="1" selected>發票類型</option>
              <option value="2">個人電子發票(兩聯式)</option>
              <option value="3">雲端發票</option>
            </select>
            <select name="">
              <option value="1" selected>載具類型</option>
              <option value="2">手機條碼</option>
            </select>
          </section>
        </div>
      </section>

      <div class="agreeBox">
        <input type="checkbox" id="agree" />
        <label for="agree">
          我同意網站
          <a href="">服務條款</a>及
          <a href="">隱私政策</a>
        </label>
      </div>

      <div class="cartStepBtn">
        <a href="Cart">返回購物車</a>
        <a class="nextBtn" href="Finish">提交訂單</a>
        <!-- <button>返回購物車</button>
        <button class="nextBtn">提交訂單</button> -->
      </div>
    </div>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/checkout/_checkout.scss"
  scoped
></style>
