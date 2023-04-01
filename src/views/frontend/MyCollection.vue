<script>
import MemberList from "@/components/Member/MemberList.vue";
import Title from "@/components/Member/Title.vue";

export default {
  components: { MemberList, Title },
};
</script>

<template>
  <main class="myCollection">
    <div class="containerMain">
      <h3>會員中心</h3>

      <Title />

      <div class="profileBox">
        <MemberList />

        <div class="profile">
          <ul class="productList">
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
            <li class="productCard">
              <a href="">
                <div class="productImg">
                  <img src="@/assets/images/product01.jpg" alt="" />
                  <div class="loveIcon"></div>
                </div>
                <div class="productInfo">
                  <h5>夢幻海洋護手霜</h5>
                  <div class="priceBox">
                    <p>NT$900</p>
                  </div>
                </div>
              </a>
              <button>加入購物車</button>
            </li>
          </ul>

          <div class="collectionNullBox">
            <h4>追蹤清單沒有商品</h4>
            <p>
              還沒找到心動讓您關注的商品嗎？
              <br />
              沒關係，Ｏcean Life陪同您一起尋找
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
  src="@/assets/scss/layout/member/_myCollection.scss"
  scoped
></style>
