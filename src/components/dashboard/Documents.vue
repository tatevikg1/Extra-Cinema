<template>
  <div class="form">
    <div class="buttons">
      <button
        @click="clickHandler('fillForMe')"
        class="text-regular"
        :class="{ btnActive: currentView === 'fillForMe' }"
      >
        Заполнить за меня
      </button>
      <button
        @click="clickHandler('fillByMySelf')"
        class="text-regular"
        :class="{ btnActive: currentView === 'fillByMySelf' }"
      >
        Заполнить самому
      </button>
    </div>
    <div class="content-wrap">
      <div v-if="currentView === 'fillForMe'" class="fillForMe">
        <div class="content">
          <div class="p-wrap">
            <p class="text-regular">
              Уважаемый клиент! Для удобства и экономии вашего времени мы готовы
              предоставить услугу заполнения документов.
            </p>
            <Btn class="useBtn" text="Воспользоваться услугой" fluid />
          </div>

          <div class="row">
            <div class="col">
              <h3 class="text-semi-bold">УДОБНО</h3>
              <p class="text-regular">
                Берем функцию заполнения документов на себя
              </p>
            </div>
            <div class="col">
              <h3 class="text-semi-bold">КОРРЕКТНО</h3>
              <p class="text-regular">
                Корректно заполним все необходимые данные
              </p>
            </div>
            <div class="col">
              <h3 class="text-semi-bold">СВОЕВРЕМЕННО</h3>
              <p class="text-regular">
                Никогда не опоздаем со сроком отправки отчета
              </p>
            </div>
          </div>
        </div>
        <Btn class="useBtn" text="Воспользоваться услугой" center />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Btn";

export default {
  components: { Btn },
  data() {
    return {
      currentView: "fillForMe",
    };
  },
  methods: {
    clickHandler(view) {
      this.currentView = view;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 871px;
  width: 100%;
  margin: 73px auto 35px auto;
  .buttons {
    display: inline-flex;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    button {
      width: 290px;
      height: 49px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #181818;
      border: 0;
      outline: 0;
      color: #4e4e4e;
    }
    .btnActive {
      background: #212121;
      color: #ffffff;
      font-family: "SemiBold";
    }
  }
  .content-wrap {
    padding: 67px 42px 103px 42px;
    background: #212121;
    border-radius: 0 10px 10px 10px;
    .fillForMe {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .content {
        display: flex;
        flex-direction: column;
        .p-wrap {
          p {
            color: #bcbcbc;
            font-size: 16px;
            margin-bottom: 90px;
            max-width: 618px;
            width: 100%;
          }
          button {
            display: none;
          }
        }
        .row {
          display: flex;
          justify-content: space-between;
          .col {
            max-width: 170px;
            width: 100%;
            &:nth-child(1) {
              margin-left: 50px;
            }
            h3 {
              color: #ffffff;
              position: relative;
              &::before {
                content: "";
                display: block;
                width: 35px;
                height: 35px;
                background: url("../../assets/images/dashboard/checked.svg")
                  no-repeat center;
                background-size: contain;
                position: absolute;
                top: 0;
                left: -50px;
              }
            }
            p {
              color: #7c7c7c;
              font-size: 14px;
            }
          }
        }
      }
      button {
        margin-top: 75px;
      }
    }
  }
}

@media screen and (max-width: 834px) {
  .form {
    margin: 87px auto 369px auto;
    .content-wrap {
      padding: 88px 45px 67px 45px;
      .fillForMe {
        .content {
          flex-direction: row;
          justify-content: space-between;
          .p-wrap {
            max-width: 244px;
            p {
              line-height: 22px;
            }
            button {
              display: block;
              padding: 12px;
              font-size: 16px;
            }
          }
          .row {
            flex-direction: column;
            .col {
              max-width: 302px;
              p {
                margin-bottom: 20px;
                margin-top: 10px;
              }
              &:nth-child(1) {
                margin-left: 0;
              }
            }
          }
        }

        button {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .form {
    margin: 87px auto 369px auto;
    .content-wrap {
      padding: 88px 45px 67px 45px;
      .fillForMe {
        .content {
          flex-direction: row;
          justify-content: space-between;
          .p-wrap {
            max-width: 244px;
            p {
              line-height: 22px;
            }
            button {
              display: block;
              padding: 12px;
              font-size: 16px;
            }
          }
          .row {
            flex-direction: column;
            .col {
              max-width: 150px;
              p {
                margin-bottom: 20px;
                margin-top: 10px;
              }
              &:nth-child(1) {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .form {
    margin: 87px auto 369px auto;
    .buttons {
      button {
        width: 180px;
        font-size: 14px;
      }
    }
    .content-wrap {
      .fillForMe {
        .content {
          flex-wrap: wrap;
          .p-wrap {
            max-width: 100%;
            p {
              margin-bottom: 20px;
            }
            button {
              display: none;
            }
          }
          .row {
            flex-direction: column;
            padding-left: 50px;
            .col {
              max-width: 302px;
              p {
                margin-bottom: 20px;
                margin-top: 10px;
              }
              &:nth-child(1) {
                margin-left: 0;
              }
            }
          }
        }

        button {
          display: block;
          margin-top: 40px;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .form {
    margin: 71px auto 40px auto;
    .buttons {
      button {
        padding: 10px;
        border-radius: 10px;
        width: 137px;
        &:nth-child(1) {
          margin-right: 10px;
        }
      }
      .btnActive {
        border: 0.5px solid #777777;
      }
    }
    .content-wrap {
      background: transparent !important;
      padding: 40px 0 0 0;
    }
  }
}

@media screen and (max-width: 370px) {
  .form .buttons button {
    max-width: 110px !important;
    font-size: 11px;
  }
}
</style>