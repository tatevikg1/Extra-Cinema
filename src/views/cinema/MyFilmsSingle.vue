<template>
  <div class="myfilms-single-wrap">
    <Header />
    <div class="container">
      <arrow-back />
      <div class="heading">
        <h1 class="h1 text-white text-semi-bold">{{desc.title}}</h1>
        <div class="status positive">
          <div class="dot" :class="{'dot-gray': retired}"></div>
          <span v-if="!retired" class="p-SM text-regular text-red">В прокате</span>
          <span v-if="retired" class="p-SM text-regular text-gray">Вышел из проката</span>
        </div>
      </div>
      <div class="row">
        <div class="row-heading">
          <div class="item">
            <div class="info p-sm text-white text-regular">
              <img src="@/assets/images/my-films/days.svg" alt />
              Дней в прокате
            </div>
            <div class="output h3 text-red text-semi-bold" :class="{'gray': retired}">{{desc.days}}</div>
          </div>
          <div class="item">
            <div class="info p-sm text-white text-regular">
              <img src="@/assets/images/my-films/money.svg" alt />
              Денежные сборы
            </div>
            <div class="output h3 text-red text-semi-bold" :class="{'gray': retired}">{{desc.money}}</div>
          </div>
          <div class="item">
            <div class="info p-sm text-white text-regular">
              <img src="@/assets/images/my-films/views.svg" alt />
              Просмотров
            </div>
            <div class="output h3 text-red text-semi-bold" :class="{'gray': retired}">{{desc.views}}</div>
          </div>
        </div>

        <div class="desc">
          <img src="@/assets/images/rating/example.png" :alt="desc.title" class="preview" />
          <div class="card text-white">
            <div class="rating">
              <span class="text-white text-bold h1">{{ desc.rate }}</span>
              <div class="stars">
                <img src="@/assets/images/rating/gray-stars.svg" alt="Рейтинг" class="gray" />
                <div class="white" :style="{ width: desc.rate * 10 + '%' }"></div>
              </div>
            </div>
            <div class="info h3 text-semi-bold">
              <div class="info-item">
                Страна:
                <span>{{ desc.country }}</span>
              </div>
              <div class="info-item">
                Год:
                <span>{{ desc.year }}</span>
              </div>
              <div class="info-item">
                <span>{{ desc.time }} мин.</span>
              </div>
            </div>
            <div class="info h3 text-semi-bold">
              <div class="info-item text-gray">
                Режиссер:
                <span class="text-white">{{ desc.director }}</span>
              </div>
            </div>
            <div class="info h3 text-semi-bold">
              <div class="info-item text-gray">
                Жанр:
                <span class="text-white">{{ desc.jangre }}</span>
              </div>
            </div>
          </div>
        </div>
        <btn-group />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import BtnGroup from "@/components/BtnGroup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";

export default {
  components: { BtnGroup, Header, Footer, ArrowBack },
  mounted() {
    if (this.$route.name === "ec-myfilms-single-retired") {
      this.retired = true;
    }
  },
  data: () => ({
    retired: false,
    desc: {
      rate: 9.15,
      title: "Гениальное ограбление",
      money: "987 987",
      days: 21,
      views: "1 987 789",
      country: "Италия",
      time: 118,
      year: "2021",
      jangre: "Боевик, Триллер",
      director: "Жауме Балагеро",
    },
  }),
};
</script>


<style lang="scss" scoped>
.myfilms-single-wrap {
  .container {
    position: relative;
    padding: 90px 15px 120px 15px;
    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .status {
        display: flex;
        align-items: center;
        .dot {
          margin-right: 7px;
          width: 7px;
          height: 7px;
          background: #d8004e;
          filter: blur(2px);
        }
        .dot-gray {
          background: #7c7c7c;
        }
      }
    }
    .row {
      margin-top: 45px;
      &-heading {
        padding: 43px 30px;
        border-radius: 22px 22px 0px 0px;
        display: flex;
        justify-content: space-between;
        background: linear-gradient(
          180deg,
          #151515 0%,
          rgba(21, 21, 21, 0) 100%
        );
        .item {
          display: flex;
          align-items: center;
          .info {
            margin-right: 13px;
            display: flex;
            align-items: center;
            img {
              margin-right: 13px;
            }
          }
          .output {
            padding: 12px 35px;
            border: 1px solid #ffffff;
            background: linear-gradient(
              157.8deg,
              rgba(0, 0, 0, 0) -6.72%,
              #4d4d4d 111%
            );
            border-radius: 5px;
          }
          .gray {
            color: #7c7c7c;
            border: 1px solid #7c7c7c;
          }
        }
      }
      .desc {
        display: flex;
        align-items: flex-start;
        margin-top: 80px;
        img {
          border-radius: 22px;
          max-width: 557px;
          width: 100%;
          height: auto;
        }
        .card {
          padding: 15px 30px 30px 60px;
          .rating {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            span {
              background: #d8004e;
              height: 43px;
              width: calc(224px - 77px);
              position: relative;
              margin-left: -15px;
              margin-right: 2px;
              &::before {
                content: "";
                height: 43px;
                width: 77px;
                background: #d8004e;
                display: block;
                position: absolute;
                top: 0;
                left: -77px;
              }
              &::after {
                content: "";
                transition: 0.35s;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 21.5px 15px 21.5px 0;
                border-color: transparent #151515 transparent transparent;
                position: absolute;
                right: -1px;
                top: 0;
              }
            }
            .stars {
              position: relative;
              .white {
                position: absolute;
                top: 0;
                left: 0;
                background: url("../../assets/images/rating/white-stars.svg")
                  no-repeat left;
                display: block;
                height: 22px;
              }
            }
          }
          .info {
            display: flex;
            align-items: center;
            margin-top: 26px;
            .info-item {
              padding-right: 18px;
              &:nth-child(2),
              &:nth-child(3) {
                padding-left: 18px;
                border-left: 1px solid #9a9a9a;
              }
            }
          }
          .description {
            margin-bottom: 43px;
            position: relative;
            font-size: 16px;
            &::before {
              content: "";
              position: absolute;
              top: -10px;
              left: -30px;
              width: 23px;
              height: 33px;
              background: url("../../assets/images/rating/quote.svg") no-repeat
                center;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1050px) {
  .myfilms-single-wrap {
    .container {
      .row {
        .desc {
          img {
            max-width: 400px;
          }
        }
      }
    }
  }
}
@media (max-width: 902px) {
  .myfilms-single-wrap {
    .container {
      .row {
        &-heading {
          padding: 26px 23px;
          .item {
            flex-direction: column;
            .output {
              width: 100%;
              text-align: center;
              margin-top: 13px;
            }
          }
        }
        .desc {
          background: #151515;
          border-radius: 22px;
          overflow: hidden;
          img {
            max-width: 317px;
            border-radius: 0;
          }
          .card {
            padding: 30px 22px;
            * {
              font-size: 14px !important;
            }
            .rating {
              span {
                font-size: 18px;
                height: 27px;
                width: calc(142px - 47px);
                display: flex;
                align-items: center;
                &::before {
                  height: 27px;
                  width: 47px;
                  left: -47px;
                }
                &::after {
                  border-width: 12.5px 15px 16.5px 0;
                }
              }
              .stars {
                transform: scale(0.7) translateX(-40px);
              }
            }
            .info {
              margin-top: 15px;
            }
          }
        }
      }
      .buttons {
        margin-top: 300px;
      }
    }
  }
}

@media (max-width: 730px) {
  .myfilms-single-wrap {
    .container {
      padding: 48px 15px 25px 15px;
      .row {
        &-heading {
          flex-direction: column;
          .item {
            flex-direction: row;
            justify-content: space-between;
            .output {
              max-width: 120px !important;
              // min-width: 146px;
              margin-top: 15px;
              padding: 10px 15px;
            }
          }
        }
        .desc {
          background: transparent;
          border-radius: 0;
          flex-direction: column;
          margin-top: 50px;
          position: relative;
          overflow: unset;
          img {
            max-width: 100%;
            border-radius: 18px;
          }
          .card {
            padding: 30px 0;
            .rating {
              position: absolute;
              top: -40px;
              left: 0;
              overflow: hidden;
              span {
                font-size: 18px;
                height: 27px;
                width: calc(142px - 47px);
                display: flex;
                align-items: center;
                padding-left: 30px;
                margin-left: 0;
                &::before {
                  display: none;
                }
                &::after {
                  border-color: transparent #000000 transparent transparent;
                }
              }
              .stars {
                width: 250px;
                transform: scale(0.7) translateX(-40px);
              }
            }
            .info {
              margin-top: 15px;
            }
          }
        }
      }
      .buttons {
        margin-top: 60px;
      }
    }
  }
}
</style>