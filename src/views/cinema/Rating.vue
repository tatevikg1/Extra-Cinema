<template>
  <div class="rating-wrap">
    <Header />
    <section class="wrap bg-black">
      <div class="container">
        <arrow-back href="for-holders" />
        <title-decor text="Рейтинг ExtraCinema" :img="RateIcon"/>
        <div class="row">
          <router-link v-for="(item, idx) in items" :key="idx" to="/" class="item">
            <img src="@/assets/images/rating/example.png" :alt="item.title" class="preview" />
            <div class="card">
              <h2 class="text-white text-semi-bold">{{ item.title }}</h2>
              <div class="rating">
                <span class="text-white text-bold h1">{{ item.rate }}</span>
                <div class="stars">
                  <img src="@/assets/images/rating/gray-stars.svg" alt="Рейтинг" class="gray" />
                  <div class="white" :style="{ width: item.rate * 10 + '%' }"></div>
                </div>
              </div>
              <div class="views p-sm text-white text-regular">
                Количество просмотров:
                <span>{{ item.views }}</span>
                <img src="@/assets/images/rating/flag.svg" :alt="item.view + 'просмотров'" />
              </div>
              <div class="info">
                <div class="info-item text-regular">
                  Страна:
                  <span>{{ item.country }}</span>
                </div>
                <div class="info-item text-regular">
                  Год:
                  <span>{{ item.year }}</span>
                </div>
              </div>
              <div class="info">
                <div class="info-item text-regular">
                  Режиссер:
                  <span>{{ item.director }}</span>
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
        <btn-group />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import BtnGroup from "@/components/BtnGroup";
import TitleDecor from '@/components/TitleDecor'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";
import RateIcon from "@/assets/images/for-holders-page/carousel/item1.svg";

export default {
  components: { Header, Footer, ArrowBack, BtnGroup, TitleDecor },
  data: () => ({
    RateIcon,
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
          max-width: 447px;
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
                // background-size: cover;
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
  }
}
@media screen and (max-width: 1000px) {
  .wrap {
    .container {
      .row {
        .item {
          img.preview {
            max-width: 317px;
            max-height: 222;
            width: 100%;
            height: auto !important;
          }
          .card {
            padding: 15px 20px 30px 20px;
            .rating {
              span {
                font-size: 18px;
                height: 27px;
                width: calc(142px - 47px);
                &::before {
                  height: 27px;
                  width: 47px;
                  left: -47px;
                }
                &::after {
                  border-width: 12.5px 15px 16.5px 0;
                }
              }
            }
            .stars {
              transform: scale(0.7) translateX(-55px);
            }
            .views {
              span {
                font-size: 20px;
              }
              img {
                width: 17px;
                height: 17px;
              }
            }
          }
        }
      }
    }
  }
}
</style>