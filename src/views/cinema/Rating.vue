<template>
  <div class="rating-wrap">
    <Header />
    <section class="wrap bg-black">
      <div class="container">
        <arrow-back href="for-holders" />
        <h1 class="text-white text-semi-bold">
          <img :src="RateIcon" alt="Рейтинг ExtraCinema" />
          <span>Рейтинг ExtraCinema</span>
        </h1>
        <div class="row">
          <router-link
            v-for="(item, idx) in items"
            :key="idx"
            to="/"
            class="item"
          >
            <img
              src="@/assets/images/rating/example.png"
              :alt="item.title"
              class="preview"
            />
            <div class="card">
              <h2 class="text-white text-semi-bold">{{ item.title }}</h2>
              <div class="rating">
                <span class="text-white text-bold h1">{{ item.rate }}</span>
                <div class="stars">
                  <img
                    src="@/assets/images/rating/gray-stars.svg"
                    alt="Рейтинг"
                    class="gray"
                  />
                  <div
                    class="white"
                    :style="{ width: item.rate * 10 + '%' }"
                  ></div>
                </div>
              </div>
              <div class="views p-sm text-white text-regular">
                Количество просмотров: <span>{{ item.views }}</span>
                <img
                  src="@/assets/images/rating/flag.svg"
                  :alt="item.view + просмотров"
                />
              </div>
              <div class="info">
                <div class="info-item text-regular">
                  Страна: <span>{{ item.country }}</span>
                </div>
                <div class="info-item text-regular">
                  Год: <span>{{ item.year }}</span>
                </div>
              </div>
              <div class="info">
                <div class="info-item text-regular">
                  Режиссер: <span>{{ item.director }}</span>
                </div>
              </div>
              <p class="description text-regular text-gray p-sm">
                {{
                  item.description
                    ? item.description.substring(0, 40) + " ..."
                    : ""
                }}
              </p>
            </div>
          </router-link>
        </div>
        <div class="buttons">
          <router-link :to="{name: 'ec-upload'}" class="link text-white text-semi-bold">
            <div class="btn-decor">
              <img :src="UploadContentIcon" alt="Заказать" />
            </div>
            <span class="btn-text">Загрузить новый контент</span>
          </router-link>
          <router-link to="" class="link">
            <div class="btn-decor">
              <img :src="SettingsIcon" alt="Служба поддержки" />
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
import ArrowBack from "@/components/ArrowBack";
import RateIcon from "@/assets/images/for-holders-page/carousel/item1.svg";
import UploadContentIcon from "@/assets/images/for-holders-page/upload-content.svg";
import SettingsIcon from "@/assets/images/cinema-for-halls-page/settings_icon.svg";

export default {
  components: { Header, Footer, ArrowBack },
  data: () => ({
    RateIcon,
    UploadContentIcon,
    SettingsIcon,
    items: [
      {
        title: "Гениальное ограбление",
        rate: 9.15,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 6.15,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 8.65,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 9.15,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 9.11,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 9.12,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
      {
        title: "Гениальное ограбление",
        rate: 8.11,
        views: 150,
        country: "Италия",
        year: "2021",
        director: "Жауме Балагеро",
        description: "В ограблении главное правильно подобрать раз два три",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.wrap {
  .container {
    position: relative;
    padding: 87px 15px 121px 15px;
    h1 {
      display: flex;
      align-items: center;
      img {
        width: 68px;
        height: 68px;
        margin-right: 27px;
      }
      span {
        padding-bottom: 18px;
        border-bottom: 7px solid #d8004e;
      }
    }
    .row {
      margin-top: 88px;
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        border-radius: 22px;
        overflow: hidden;
        background: #151515;
        margin-bottom: 20px;
        transition: 0.35s;
        text-decoration: none;
        &:hover {
          background: #000000;
          box-shadow: 0 0 80px rgba(216, 0, 78, 0.57);
          .card .rating span::after {
            border-color: transparent #000000 transparent transparent;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
        img.preview {
          max-width: 521px;
          max-height: 311px;
          width: 100%;
          height: auto;
        }
        .card {
          padding: 30px 50px;
          h2 {
            margin-bottom: 20px;
          }
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
                background-size: cover;
                display: block;
                height: 22px;
              }
            }
          }
          .views {
            display: flex;
            align-items: center;
            span {
              font-size: 30px;
              margin-left: 15px;
            }
            img {
              width: 24px;
              height: 24px;
            }
          }
          .info {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .info-item {
              font-size: 12px;
              color: #9a9a9a;
              padding-right: 18px;

              &:nth-child(2) {
                padding-left: 18px;
                border-left: 1px solid #9a9a9a;
              }
              span {
                color: #ffffff;
              }
            }
          }
          .description {
            margin-top: 22px;
            position: relative;
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
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 82px;
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
    .container {
      .row {
        .item {
          img.preview {
            max-width: 317px;
            max-height: 222px;
          }
          .card {
            padding: 15px 20px 30px 20px;
          }
        }
      }
      .buttons {
        justify-content: center;
        flex-wrap: wrap;
        .link {
          max-width: 269px;
          width: 100%;
          border-radius: 0;
          height: 50px;
          margin: 0 5px;
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

@media screen and (max-width: 572px) {
  .wrap {
    .container {
      .buttons {
        margin-top: 50px;
        .link:nth-child(2) {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>