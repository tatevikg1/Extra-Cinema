<template>
  <div>
    <!-- MODAL: will be show after "details" link -->
    <transition name="urlChanged">
      <product-details v-if="modal" @closeModal="modal = false" />
    </transition>

    <Header />
    <section class="wrap bg-black">
      <div class="container">
        <arrow-back href="for-halls" />
        <h1 class="text-white text-semi-bold">
          Заказать оборудование для кинозала
        </h1>
        <div class="buttons">
          <button class="btn btn-order">
            <img
              src="../../assets/images/cinema-order-equipment-page/wallet.svg"
              alt="Купить"
            />
            <span class="text-white text-semi-bold">Купить оборудование</span>
          </button>
          <button class="btn btn-credit">
            <img
              src="../../assets/images/cinema-order-equipment-page/card.svg"
              alt="Купить в кредит"
            />
            <span class="text-white text-semi-bold"
              >Купить оборудование в кредит</span
            >
          </button>
        </div>
        <div class="equip-list-wrap">
          <h2 class="text-white text-medium">Перечень оборудования</h2>
          <div class="scroll">
            <ul>
              <li v-for="(item, idx) in equipment" :key="idx">
                <div class="form-group">
                  <div class="checkbox-wrap">
                    <input
                      type="checkbox"
                      @click="calc(item)"
                      class="my-checkbox"
                      :id="idx"
                    />
                    <label :for="idx" class="text-white text-regular">{{
                      item.name
                    }}</label>
                  </div>
                  <span class="text-semi-bold">{{ item.price }} ₽</span>
                </div>
                <div class="price">
                  <span class="text-semi-bold">{{ item.price }} ₽</span>
                  <button
                    @click.prevent="showModal"
                    class="text-regular-italic"
                  >
                    Подробно о товаре
                    <div class="arrow"></div>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <span class="total text-white text-semi-bold"
            >Итого: {{ total }} ₽</span
          >
          <router-link
            :to="{ name: 'order-equipment-pay' }"
            tag="button"
            :disabled="btnDisabled"
            class="order-link text-white text-semi-bold"
            >Оплатить</router-link
          >
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
import ProductDetails from "@/components/modals/ProductDetails";

export default {
  name: "OrderEquipment",
  components: { Header, Footer, ArrowBack, ProductDetails },
  methods: {
    calc(item) {
      item.checked = !item.checked;
      if (item.checked) {
        this.total += item.price;
      } else {
        this.total -= item.price;
      }
      this.toggleBtn();
    },
    toggleBtn() {
      if (this.total > 0) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    showModal() {
      this.modal = true;
    },
  },
  mounted() {
    document.title = "Extra Cinema | Заказать оборудование";
  },
  data() {
    return {
      total: 0,
      btnDisabled: true,
      modal: true,
      equipment: [
        { name: "Кинопроектор EIKI EK-Cinema", price: 50000, checked: false },
        { name: "Полотно для киноэкрана", price: 5000, checked: false },
        {
          name: "Апаратно-программный комплекс кассира",
          price: 30000,
          checked: false,
        },
        {
          name: "Коммутационная и вспомогательная техника",
          price: 20000,
          checked: false,
        },
        {
          name: "Оборудование видеомониторинга зала",
          price: 90000,
          checked: false,
        },
        {
          name: "Настройка и пусконаладочные работы",
          price: 10000,
          checked: false,
        },
        { name: "Кинопроектор EIKI EK-Cinema", price: 50000, checked: false },
        { name: "Полотно для киноэкрана", price: 5000, checked: false },
        {
          name: "Апаратно-программный комплекс кассира",
          price: 30000,
          checked: false,
        },
        {
          name: "Коммутационная и вспомогательная техника",
          price: 20000,
          checked: false,
        },
        {
          name: "Оборудование видеомониторинга зала",
          price: 90000,
          checked: false,
        },
        {
          name: "Настройка и пусконаладочные работы",
          price: 10000,
          checked: false,
        },
        { name: "Кинопроектор EIKI EK-Cinema", price: 50000, checked: false },
        { name: "Полотно для киноэкрана", price: 5000, checked: false },
        {
          name: "Апаратно-программный комплекс кассира",
          price: 30000,
          checked: false,
        },
        {
          name: "Коммутационная и вспомогательная техника",
          price: 20000,
          checked: false,
        },
        {
          name: "Оборудование видеомониторинга зала",
          price: 90000,
          checked: false,
        },
        {
          name: "Настройка и пусконаладочные работы",
          price: 10000,
          checked: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    padding: 88px 15px 73px 15px;
    h1 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 60px;
    }

    .new {
      padding: 50px;
    }

    .buttons {
      display: flex;
      align-items: center;
      margin-bottom: 67px;
      .btn {
        padding: 16px 32px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        font-size: 18px;
        border-radius: 30px;
        background: #1f1f1f;
        width: 367px;
        height: 100px;
        margin: 0 11px;
        border: 0;
        outline: 0;
        span {
          max-width: 100px;
          text-align: left;
        }
        img {
          margin-right: 22px;
        }
        &-order {
          border: 1px solid #ffffff;
          &:hover {
            filter: brightness(50%);
            padding: 17px 33px;
            border: 0;
          }
        }
        &-credit {
          padding: 17px 33px;
          * {
            filter: brightness(50%);
          }
          &:hover {
            * {
              filter: brightness(100%);
            }
            padding: 16px 32px;
            border: 1px solid #ffffff;
          }
        }
      }
    }
    .equip-list-wrap {
      border-radius: 20px;
      background: #191919;
      padding: 46px 97px 59px 97px;
      width: 100%;
      h2 {
        font-size: 24px;
        margin-bottom: 33px;
      }

      .scroll {
        margin-bottom: 33px;
        height: 427px;
        overflow-y: scroll;
        border-radius: 20px;

        ul {
          list-style-type: none;
          background: #101010;
          li {
            padding: 22px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 16px;
            .form-group {
              span {
                display: none;
              }
              .checkbox-wrap {
                display: flex;
                align-items: center;

                label {
                  cursor: pointer;
                }
                input[type="checkbox"] {
                  &.my-checkbox {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 20px;
                    min-height: 15px;
                    width: 20px;
                    height: 15px;
                    padding: 0;
                    margin: 0;
                    color: #ffffff;
                    position: relative;
                    cursor: pointer;
                    appearance: none;
                    margin-right: 10px;
                    &:before {
                      content: "";
                      width: 100%;
                      height: 100%;
                      line-height: 1;
                      color: inherit;
                      border-width: 2px;
                      border-style: solid;
                      border-color: #ffffff;
                      border-radius: 4px;
                      transition: all 0.2s ease;
                    }
                    &:after {
                      content: "";
                      width: calc(100% - 12px);
                      height: calc(100% - 10px);
                      border-width: 0px 0px 2px 2px;
                      border-style: solid;
                      border-color: transparent;
                      transform: rotate(-45deg);
                      position: absolute;
                      top: 3px;
                      left: 5px;
                      transition: all 0.2s ease;
                    }
                    &:checked {
                      &:before {
                        background: #d8004e;
                        border-color: #d8004e;
                      }
                      &::after {
                        border-color: #ffffff;
                      }
                    }
                    &.focus,
                    &:focus {
                      outline: none;
                      box-shadow: none;
                    }
                  }
                }
              }
            }

            &:last-child:after {
              display: none;
            }
            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              right: 25px;
              display: block;
              height: 1px;
              width: calc(100% - 50px);
              background: #434343;
              margin: auto;
            }
            .price {
              display: flex;
              align-items: center;
              margin-left: auto; //for IE

              span {
                color: #8d8d8d;
                font-size: 16px;
                min-width: 80px;
                text-align: center;
              }
              button {
                margin-left: 50px;
                font-size: 16px;
                color: #ffffff;
                display: flex;
                align-items: center;
                width: 182px;
                padding: 0;
                border: 0;
                background: transparent;
                outline: 0;
                .arrow {
                  display: block;
                  width: 7.4px;
                  height: 12px;
                  background: url("../../assets/images/cinema-order-equipment-page/arrow_white.svg")
                    no-repeat center;
                  background-size: contain;
                  margin-left: 9px;
                }
                &:hover {
                  color: #27ae60;
                  .arrow {
                    background: url("../../assets/images/cinema-order-equipment-page/arrow_green.svg")
                      no-repeat center;
                  }
                }
              }
            }
          }
        }
      }
    }
    .total {
      display: block;
      margin-bottom: 52px;
    }
    .order-link {
      display: inline-block;
      font-size: 16px;
      text-decoration: none;
      padding: 13px 92px;
      background: #27ae60;
      border-radius: 10px;
      transition: 0.1s;
      border: 0;
      outline: 0;
      &:hover {
        background: #279e48;
      }
      &:disabled,
      &[disabled] {
        background: #7fa48e;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    .container {
      .equip-list-wrap {
        padding: 46px 15px 59px 15px;
      }
    }
  }
}
@media screen and (max-width: 834px) {
  .wrap {
    .container {
      padding: 91px 15px 79px 15px;
      h1 {
        font-size: 24px;
      }
      .buttons {
        .btn {
          padding: 10px 21px;
          border-radius: 50px;
          height: 63px;
          max-width: 317px;
          width: 100%;

          span {
            max-width: 100%;
            font-size: 16px;
          }
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
      .equip-list-wrap {
        padding: 0;
        background: transparent;
        h2 {
          font-size: 18px;
          margin-bottom: 24px;
        }

        .scroll {
          margin-bottom: 62px;
          height: 654px;
          border-radius: 15px;
          ul {
            li {
              align-items: flex-start;
              .form-group {
                span {
                  display: inline;
                  color: #8d8d8d;
                  margin-left: 33px;
                }
                .checkbox-wrap {
                  margin-bottom: 10px;
                }
              }
              .price {
                span {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .wrap {
    .container {
      padding: 66px 15px 52px 15px;
      h1 {
        font-size: 18px;
      }
      .buttons {
        flex-direction: column;
        .btn {
          background: transparent;
          border: 0;
          padding: 0;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
          span {
            max-width: 100%;
          }
          &-order {
            border: 0;
            &:hover {
              filter: brightness(50%);
              padding: 0;
              border: 0;
            }
          }
          &-credit {
            padding: 0;
            * {
              filter: brightness(50%);
            }
            &:hover {
              * {
                filter: brightness(100%);
              }
              padding: 0;
              border: 0;
            }
          }
        }
      }
      .equip-list-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          align-self: flex-start;
        }
        .scroll {
          ul {
            li {
              display: flex;
              flex-direction: column;
              align-items: flex-stat;
              .price {
                margin-left: 0;
                margin-top: 10px;
                button {
                  margin-left: 34px;
                }
              }
            }
          }
        }
        .total {
          align-self: flex-start;
        }
      }
      .order-link {
        padding: 10px 30px;
        font-size: 14px;
      }
    }
  }
}
</style>