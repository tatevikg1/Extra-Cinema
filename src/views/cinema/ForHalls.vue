<template>
  <div>
    <Header />
    <section class="wrap bg-black">
      <div class="container">
        <router-link
          :to="{ name: 'ec-home' }"
          class="text-white text-regular arrow-back"
          ><img
            src="../../assets/images/cinema-for-halls-page/arrow_back.svg"
            alt="Назад"
          />
          Вернуться назад</router-link
        >
        <div class="row">
          <div class="card">
            <h2 class="text-white text-medium">Муниципальный кинозал</h2>
            <img
              src="../../assets/images/cinema-for-halls-page/card_icon.svg"
              alt="."
            />
            <div class="buttons">
              <router-link
                :to="{ name: 'upload-docs' }"
                class="btn text-white text-semi-bold"
                >Загрузить документы
              </router-link>
            </div>
          </div>
          <div class="card">
            <h2 class="text-white text-medium">Частный кинозал</h2>
            <img
              src="../../assets/images/cinema-for-halls-page/card_icon2.svg"
              alt="."
            />
            <div class="buttons">
              <router-link to="" class="btn text-white text-semi-bold"
                >Стать партнером EXTRACINEMA
              </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <router-link to="" class="link text-white text-semi-bold">
            <div class="btn-decor">
              <img
                src="../../assets/images/cinema-for-halls-page/order_icon.svg"
                alt="Заказать"
              />
            </div>
            <span class="btn-text">Заказать оборудование для кинозала</span>
          </router-link>
          <router-link to="" class="link">
            <div class="btn-decor">
              <img
                src="../../assets/images/cinema-for-halls-page/settings_icon.svg"
                alt="Служба поддержки"
              />
            </div>
            <div class="btn-text text-white text-semi-bold">
              Служба поддержки
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "ForHalls",
  components: { Header, Footer },
  mounted() {
    document.title = "Extra Cinema | Для кинозала";
  },
};
</script>

<style lang="scss" scoped>
.preload {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  img {
    width: 119px;
    height: 88px;
  }
  span {
    margin-top: 35px;
    font-size: 45px;
  }
}
.preload-hide {
  opacity: 0;
  z-index: -100;
}
.wrap {
  padding: 12px 0 152px 0;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .arrow-back {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #999999;
      transition: 0.2s;
      &:hover {
        color: #ffffff;
      }
      img {
        margin-right: 10px;
        transform: translateY(2px);
      }
    }
    .row {
      margin-top: 78px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      flex-wrap: wrap;
      .card {
        padding: 37px 55px;
        background-color: #181818;
        background-image: url("../../assets/images/cinema-for-halls-page/card_bg.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: calc(50% - 10.5px);
        width: 100%;
        &:hover {
          padding: 36px 54px;
          border: 1px solid #fff;
        }
        img {
          width: 75px;
          height: 75px;
        }
        h2 {
          font-size: 24px;
          margin-bottom: 13px;
        }
        .buttons {
          display: flex;
          margin-top: 13px;
          .btn {
            font-size: 14px;
            text-decoration: none;
            display: flex;
            align-items: center;
            border: 1px solid #ffffff;
            width: 360px;
            height: 48px;
            justify-content: center;
            &,
            & * {
              transition: 0.2s;
            }
            &:hover {
              background: #ffffff;
              color: #000000;
              img {
                filter: brightness(20%);
              }
            }
            img {
              width: 18px;
              height: 18px;
              margin-left: 19px;
            }
          }
        }
      }
      .link {
        max-width: calc(50% - 10.5px);
        width: 100%;
        height: 86px;
        display: flex;
        align-items: center;
        background: #27ae60;
        border-radius: 10px;
        text-decoration: none;
        transition: 0.2s;
        &:nth-child(2) {
          background: #242424;
        }
        &:hover {
          background: #279e48;
          .btn-decor {
            background: #ffffff;
            img {
              filter: brightness(0%);
            }
          }
        }
        .btn-decor {
          border-radius: 10px;
          background: #444444;
          box-shadow: 10px 13px 25px rgba(0, 0, 0, 0.26);
          height: 86px;
          width: 86px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s;
          img {
            transition: 0.2s;
          }
        }
        .btn-text {
          width: calc(100% - 86px);
          text-align: center;
          font-size: 18px;
        }
      }
    }
  }
}
@media screen and (max-width: 834px) {
  .wrap {
    padding: 12px 0 92px 0;
    .container {
      .row {
        flex-direction: column;
        &:nth-child(3) {
          margin-top: 146px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .card {
          background-color: transparent;
          max-width: 560px;
          margin-top: 81px;
          &:hover {
            border: 0;
          }
          &:nth-child(1) {
            margin-top: 0;
          }
        }
        .link {
          width: 100%;
          border-radius: 0;
          height: 50px;
          .btn-decor {
            height: 50px;
            width: 50px;
            border-radius: 0;
            img {
              width: 30px;
              height: 30px;
            }
          }
          .btn-text {
            text-align: left;
            padding-left: 15px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .wrap {
    padding: 12px 0 92px 0;
    .container {
      .row {
        &:nth-child(2) {
          margin-top: 0;
        }
        &:nth-child(3) {
          margin-top: 62px;
          flex-direction: column;
        }

        .card {
          margin-top: 50px;
          background: transparent;
          img {
            order: -1;
          }
          h2 {
            order: 0;
            margin-top: 25px;
            text-align: center;
          }
          .btn {
            order: 1;
            width: 100% !important;
            height: 100% !important;
            padding: 10px 15px;
            font-size: 12px !important;
          }
        }
        .link {
          max-width: 269px;
        }
      }
    }
  }
}
</style>
