<script>
import CartStep from "@/components/Global/CartStep.vue";

export default {
  components: { CartStep },
};
</script>

<template>
  <main class="cartStep01">
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
        <div class="editBox">
          <div class="edit">
            <p>編輯</p>
          </div>
          <p>清空購物車</p>
        </div>

        <div class="cartTable">
          <div class="table-header">
            <div class="title titleCheck"></div>
            <div class="title titleName">商品</div>
            <div class="title">單價</div>
            <div class="title">數量</div>
            <div class="title">小計</div>
            <div class="title titleNull"></div>
          </div>

          <div class="table-product-box">
            <div class="table-product">
              <div class="checkBox">
                <input type="checkBox" />
              </div>

              <div class="productBox">
                <div class="imgBox">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productTitle">
                  <h5>夢幻海洋護手霜</h5>
                  <select name="" id="">
                    <option value="">款式-A款(海洋風味)</option>
                    <option value="">款式-B款(夕陽風味)</option>
                  </select>
                </div>
              </div>

              <div class="price">
                <h6>NT$300</h6>
              </div>

              <div class="numOuterBox">
                <div class="numBox">
                  <button>–</button>
                  <input type="text" value="2" />
                  <button>+</button>
                </div>
              </div>

              <div class="totalPrice">
                <h6>NT$300</h6>
              </div>

              <div class="deleteBox">
                <p>刪除</p>
                <p>加入收藏</p>
              </div>
            </div>

            <div class="table-product">
              <div class="checkBox">
                <input type="checkBox" />
              </div>

              <div class="productBox">
                <div class="imgBox">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productTitle">
                  <h5>夢幻海洋護手霜</h5>
                  <select name="" id="">
                    <option value="">款式-A款(海洋風味)</option>
                    <option value="">款式-B款(夕陽風味)</option>
                  </select>
                </div>
              </div>

              <div class="price">
                <h6>NT$300</h6>
              </div>

              <div class="numOuterBox">
                <div class="numBox">
                  <button>–</button>
                  <input type="text" value="2" />
                  <button>+</button>
                </div>
              </div>

              <div class="totalPrice">
                <h6>NT$300</h6>
              </div>

              <div class="deleteBox">
                <p>刪除</p>
                <p>加入收藏</p>
              </div>
            </div>
          </div>

          <!-- RWD -->
          <div class="RWD-table-product-box">
            <div class="RWD-table-product">
              <div class="checkBox">
                <input type="checkBox" />
              </div>

              <div class="mainProductBox">
                <div class="imgBox">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productTextBox">
                  <div class="productTitle">
                    <h5>夢幻海洋護手霜</h5>
                    <select name="" id="">
                      <option value="">款式-A款(海洋風味)</option>
                      <option value="">款式-B款(夕陽風味)</option>
                    </select>
                  </div>
                  <h6>NT$300</h6>

                  <div class="infoBox">
                    <div class="numBox">
                      <button>–</button>
                      <input type="text" value="2" />
                      <button>+</button>
                    </div>

                    <div class="deleteBox">
                      <p class="delete">刪除</p>
                      <p>加入收藏</p>
                      <span class="deleteIcon"></span>
                      <span class="loveIcon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="RWD-table-product">
              <div class="checkBox">
                <input type="checkBox" />
              </div>

              <div class="mainProductBox">
                <div class="imgBox">
                  <img src="@/assets/images/product01.jpg" alt="" />
                </div>
                <div class="productTextBox">
                  <div class="productTitle">
                    <h5>夢幻海洋護手霜</h5>
                    <select name="" id="">
                      <option value="">款式-A款(海洋風味)</option>
                      <option value="">款式-B款(夕陽風味)</option>
                    </select>
                  </div>
                  <h6>NT$300</h6>

                  <div class="infoBox">
                    <div class="numBox">
                      <button>–</button>
                      <input type="text" value="2" />
                      <button>+</button>
                    </div>

                    <div class="deleteBox">
                      <p class="delete">刪除</p>
                      <p>加入收藏</p>
                      <span class="deleteIcon"></span>
                      <span class="loveIcon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <table class="cartTable">
          <thead>
            <tr>
              <th class="name">商品名稱</th>
              <th>單價</th>
              <th class="num">數量</th>
              <th>小計</th>
              <th></th>
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
                <button>-</button>
                <input type="text" value="2" />
                <button>+</button>
              </td>
              <td>NT$200</td>
              <td class="deleteBox">
                <p>刪除</p>
                <p>加入收藏</p>
              </td>
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
                <button>-</button>
                <input type="text" value="2" />
                <button>+</button>
              </td>
              <td>NT$200</td>
              <td class="deleteBox">
                <p>刪除</p>
                <p>加入收藏</p>
              </td>
            </tr>
          </tbody>
        </table> -->
        <div class="freeBg">
          <p>符合</p>
          <h6>全店，滿3000元 宅配到府「免運」優惠</h6>
        </div>
        <div class="couponPriceBox">
          <div class="couponBox">
            <h5>優惠代碼</h5>
            <div class="conponText">
              <input type="text" placeholder="請輸入折扣碼" />
              <button>套用</button>
            </div>
            <p>※ 單筆訂單限抵一張折價券。</p>
          </div>
          <!-- <div class="priceBox"> -->
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

      <div class="cartStepBtn">
        <a href="Onlineshop">繼續購物</a>
        <a class="nextBtn" href="Checkout">前往結帳</a>
        <!-- <button>繼續購物</button>
        <button class="nextBtn">前往結帳</button> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/cart/_cart.scss" scoped></style>
