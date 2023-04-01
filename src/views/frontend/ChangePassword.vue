<script>
export default {};
</script>

<template>
  <main class="changePassword">
    <div class="containerMain">
      <h3>會員中心</h3>

      <div class="title">
        <p>Hi, 會員名字</p>
        <a href="">登出</a>
      </div>

      <div class="profileBox">
        <ul class="memberList">
          <li>會員資料</li>
          <li>訂單查詢</li>
          <li>我的收藏</li>
        </ul>

        <div class="profile">
          <a href="" class="editProfile">
            <div class="editIcon"></div>
            <p>修改密碼</p>
          </a>

          <div class="InfoBox">
            <div class="passwordBox">
              <input
                class="inputText oldPassword"
                type="password"
                placeholder="舊密碼"
              />
              <div class="eyeBtn">
                <img src="@/assets/images/openEye.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="InfoBox">
            <div class="passwordBox">
              <input class="inputText" type="password" placeholder="新密碼" />
              <div class="eyeBtn">
                <img src="@/assets/images/openEye.svg" alt="" />
              </div>
            </div>
            <p>最少8個字元，至少包含1個數字、1個字母</p>
          </div>
          <div class="InfoBox">
            <div class="passwordBox">
              <input
                class="inputText"
                type="password"
                placeholder="確認新密碼"
              />
              <div class="eyeBtn">
                <img src="@/assets/images/openEye.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="profileBtn">
          <button class="cancel">取消</button>
          <button>更新</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.changePassword {
  width: 100%;
  border: 1px solid red;
  // padding-bottom: 80px;
}
.containerMain {
  // width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // align-items: center;
  // @include flexCenter;

  @include rwdContainerMain;
  border: 1px solid red;
  margin-top: 70px;
  margin-bottom: 70px;
  padding: 0px 74px;

  @include desktop {
    max-width: 1140px;
  }
  @include laptop {
    max-width: 960px;
  }
  @include iPad {
    max-width: 720px;
  }
  @include mobile {
    max-width: 540px;
  }
  @include mobile-XS {
    max-width: 390px;
  }

  > h3 {
    @include font($primary, 600, $fontSize-h3);
    margin-bottom: 30px;
    text-align: center;
  }
  > .title {
    display: flex;
    justify-content: space-between;
    // padding: 0px 50px;
    margin-bottom: 20px;

    > p {
      @include font($black, 400);
    }

    > a {
      @include font($black, 400, $fontSize-h6);
      text-decoration: underline;
    }
  }

  .profileBox {
    border: 1px solid $black-light;
    padding: 50px 50px;

    .memberList {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;

      > li {
        @include font($black, 500, $fontSize-h5);
        margin: 0px 15px;
      }
    }

    .profile {
      display: flex;
      justify-content: center;

      .profileLeft {
        display: flex;
        flex-direction: column;
        align-items: center;
        .profileImg {
          border: 1px solid $black-light;
          border-radius: 50%;
          width: 130px;
          height: 130px;
          overflow: hidden;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        > button {
          border: none;
          background-color: #707070;
          color: white;
          border-radius: 3px;
          padding: 5px 10px;
          margin-top: 20px;
        }
      }

      .profileRight {
        margin-left: 120px;
        .editProfile {
          display: flex;
          align-items: center;
          .editIcon {
            @include img-svg(editMember);
            width: 20px;
            height: 18px;
            margin-right: 8px;
            background-size: contain;
          }
          > p {
            @include font($black, 500);
          }
        }

        .profileText {
          margin: 20px 0px;

          > li {
            display: flex;
            align-items: center;
            margin: 15px 0px;

            &.addressTitle {
              align-items: flex-start;
            }

            > p,
            label {
              @include font($black, 400);

              &.textTitle {
                width: 72px;
                margin-right: 20px;
              }
            }

            > a {
              @include font($primary, 400);
            }

            .addressBox {
              .address {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
}

.profileBox {
  border: 1px solid $black-light;
  padding: 50px 50px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  .memberList {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    > li {
      @include font($black, 500, $fontSize-h5);
      margin: 0px 15px;
    }
  }
  .editProfile {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    .editIcon {
      @include img-svg(editMember);
      width: 20px;
      height: 18px;
      margin-right: 8px;
      background-size: contain;
    }
    > p {
      @include font($black, 500);
    }
  }

  .InfoBox {
    width: 30%;
    margin: 0 auto;
    margin-bottom: 15px;
    .passwordBox {
      // width: 100%;
      position: relative;
      // margin-bottom: 15px;
      .inputText {
        width: 100%;
        border-radius: 3px;
        border: 2px solid $black-light;
        padding: 8px 12px;
        // margin-bottom: 15px;
      }
      .eyeBtn {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 20px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    p {
      @include font($tertiary, 400, 12px);
      margin: 5px 0px;
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
  }
}

.profileBtn {
  margin-top: 50px;
  text-align: center;

  > button {
    @include font(white, 400, $fontSize-h6);
    background-color: $primary;
    width: 95px;
    height: 35px;
    border-radius: 3px;
    border: none;

    &.cancel {
      border: 2px solid $primary;
      color: $primary;
      background-color: white;
      margin-right: 30px;
    }
  }
}
</style>
