<script>
import InfoMenuExplore from "@/components/Global/InfoMenuExplore.vue";

export default {
  components: { InfoMenuExplore },
  setup() {
    return {};
  },
};
</script>

<template>
  <section class="bg">
    <div class="exploreBg-01"></div>
    <div class="exploreBg-02"></div>
    <div class="exploreBg-03"></div>
  </section>

  <main class="explore">
    <InfoMenuExplore />

    <div class="containerMain">
      <section class="exploreTitle">
        <h4>
          從
          <span> 數字 </span>
          上發現
        </h4>
        <h4>
          <span> OCEAN LIFE </span>
          的魅力
        </h4>
        <div class="fish"></div>
      </section>

      <div class="scrollInfo">
        <p>SCROLL</p>
        <div class="scrollIcon">
          <img src="@/assets/images/scroll_arrow.svg" alt="" />
        </div>
      </div>

      <section class="companyBox" data-aos="fade-up">
        <div class="companyImg"></div>
        <h5>
          2022年
          <br />
          10月31日
          <br />
          OCEAN LIFE盛大開幕
        </h5>
      </section>

      <section class="biologyBox" data-aos="fade-up">
        <div class="biologyTextBox">
          <h5>
            展示數高達
            <br />
            <span>30000</span>
            隻生物
            <br />
            <span>480</span>
            種類
          </h5>
          <div class="fishIconLeft"></div>
          <div class="dialogIcon">
            <p>
              展示的種類數量在台灣排名第
              <span>1</span>
              名！
            </p>
          </div>
        </div>
        <div class="biologyImgBox">
          <div class="biologyImg">
            <!-- <img src="@/assets/images/explore_01.jpg" alt="" /> -->
          </div>
          <div class="fishIconRight"></div>
        </div>
      </section>

      <section class="waterVolumeBox" data-aos="fade-up">
        <div class="waterVolumeImgBox">
          <div class="waterVolumeImg">
            <img src="@/assets/images/explore_02.jpg" alt="" />
          </div>
          <div class="cupBox">
            <div class="water_cup">
              <ul class="cup">
                <li>
                  <div class="cupImg"></div>
                  <p>200ml</p>
                </li>
                <li>
                  <div class="cupImg"></div>
                  <p>200ml</p>
                </li>
                <li>
                  <div class="cupImg"></div>
                  <p>200ml</p>
                </li>
              </ul>
              <div class="threeDot"></div>
            </div>
            <h5>
              相當於
              <span>150000</span>
              杯水
            </h5>
          </div>
        </div>
        <div class="waterVolumeTextBox">
          <h5>
            最大水量
            <br />
            <span>30000</span>
            m³
            <br />
            台灣國內 第
            <span>1</span>
            位
            <br />
            世界 第
            <span>9</span>
            位
          </h5>
          <div class="waveImg"></div>
          <div class="dialogIcon">
            <p>難以想像...</p>
          </div>
        </div>
      </section>

      <section class="sizeBox" data-aos="fade-up">
        <div class="sizeTextBox">
          <div class="sizeText">
            <h5>
              最大長度
              <span>36</span>
              m
              <br />
              寬度
              <span>15</span>
              m
            </h5>
            <div class="sizeSvg"></div>
          </div>
          <div class="sizeImg01">
            <img src="@/assets/images/explore_04.jpg" alt="" />
          </div>
          <div class="sizeText">
            <h5>
              可以欣賞到水深
              <br />
              <span>200~700m</span>
              的海洋生物
            </h5>
          </div>
        </div>

        <div class="sizeImgBox">
          <div class="sizeImg02">
            <img src="@/assets/images/explore_03.jpg" alt="" />
          </div>
          <div class="tortoiseImg"></div>
        </div>
      </section>
    </div>

    <section class="bg thicknessBg" data-aos="fade-up">
      <div class="thicknessMain">
        <section class="thicknessBox">
          <div class="thicknessTitleBox">
            <h5>
              水槽的壓克力玻璃厚度
              <br />
              <span> 42 </span>
              cm
            </h5>
            <div class="thicknessImg"></div>
          </div>
        </section>
      </div>
    </section>

    <div class="thicknessDialogMain" data-aos="fade-up">
      <div class="dialogIcon">
        <p>透明特殊的玻璃讓你彷彿置身於海洋中</p>
      </div>
    </div>

    <div class="containerMain">
      <section class="tunnelBox" data-aos="fade-up">
        <div class="tunnelImgBox">
          <img src="@/assets/images/explore_06.jpg" alt="" />
        </div>
        <div class="tunnelTitleBox">
          <h5>
            水中的海底隧道全長
            <br />
            <span> 95 </span>
            m
            <br />
            台灣國內 第
            <span> 1 </span>
            位
            <br />
            世界 第
            <span> 5 </span>
            位
          </h5>
          <div class="tunnelIcon"></div>
        </div>
      </section>

      <section class="jellyfishBox" data-aos="fade-up">
        <div class="jellyfishTitleBox">
          <h5>
            透明月亮型水母水槽
            <br />
            總長
            <span> 7 </span>
            m
            <br />
            水母數量高達
            <span> 500 </span>
            隻
          </h5>

          <div class="dialogIcon">
            <p>
              可以近距離與水母接觸
              <br />
              彷彿像童話世界般
            </p>
          </div>

          <div class="jellyfishIcon"></div>
        </div>
        <div class="jellyfishImgBox">
          <img src="@/assets/images/explore_07.jpg" alt="" />
        </div>
      </section>

      <section class="lightBox" data-aos="fade-up">
        <div class="lightImgBox">
          <img src="@/assets/images/explore_08.jpg" alt="" />
        </div>
        <div class="lightTitleBox">
          <div class="lightIcon01"></div>
          <h5>
            光影結合的萬花筒隧道
            <br />
            每年主題變化
            <span> 4 </span>
            次
          </h5>
          <div class="lightIcon02"></div>
          <div class="dialogIcon">
            <p>
              根據季節、節日的不同
              <br />
              呈現多樣獨特的風貌唷！
            </p>
          </div>
        </div>
      </section>

      <section class="introduceBox" data-aos="fade-up">
        <h5>
          OCEAN LIFE邀請您一同與我們共度這溫柔時光
          <br />
          還有更多意想不到的驚奇，等您來發現並創造
          <br />
          體驗前所未有的新感動
          <br />
          讓我們來場怦然心動的邂逅之旅吧！
        </h5>
        <a href="https://www.kkday.com/zh-tw" target="_blank">前往購票</a>
      </section>
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/guide/_guide.scss" scoped></style>
