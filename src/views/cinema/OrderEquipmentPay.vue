<template>
  <div class="bg-black">
    <Header />
    <section class="wrap">
      <div class="container">
        <arrow-back href="order-equipment" />
        <h1 class="text-white text-semi-bold">
          Заказать оборудование для кинозала
        </h1>
        <div class="toggle">
          <router-link
            class="text-regular"
            active-class="toggle-active text-medium"
            to="/cinema/for-halls/order-equipment/pay"
            >Купить</router-link
          >
          <router-link
            class="text-regular"
            active-class="toggle-active text-medium"
            to="/cinema/for-halls/order-equipment/pay/credit"
            >Купить в кредит</router-link
          >
        </div>
        <form @submit.prevent>
          <h2 class="text-white text-medium">Выберите способ оплаты</h2>
          <div class="line"></div>
          <div class="radio">
            <div class="radio-btn">
              <input
                @click="payMethod = 'system'"
                type="radio"
                id="1"
                name="radio-group"
                checked
              />
              <label
                for="1"
                class="text-white text-regular"
                :class="{ 'text-semi-bold': payMethod == 'system' }"
                >Платежная система</label
              >
            </div>
            <div class="radio-btn">
              <input
                @click="payMethod = 'saved-card'"
                type="radio"
                id="2"
                name="radio-group"
              />
              <label
                for="2"
                class="text-white text-regular"
                :class="{
                  'text-semi-bold':
                    payMethod == 'saved-card' || payMethod == 'card',
                }"
                >Оплата по карте</label
              >
            </div>
            <div class="radio-btn">
              <input
                @click="payMethod = 'props'"
                type="radio"
                id="3"
                name="radio-group"
              />
              <label
                for="3"
                class="text-white text-regular"
                :class="{ 'text-semi-bold': payMethod == 'props' }"
                >Оплата по реквизитам</label
              >
            </div>
          </div>
          <transition name="dropdown">
            <payment-system v-if="payMethod == 'system'" />
          </transition>
          <transition name="dropdown">
            <saved-card v-if="payMethod == 'saved-card'" />
          </transition>
          <card v-if="payMethod == 'card'" />
          <props v-if="payMethod == 'props'" />

          <!-- <button class="pay-btn text-white text-semi-bold">ОПЛАТИТЬ</button> -->
          <Btn className="pay-btn" text="ОПЛАТИТЬ" fluid />
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";
import PaymentSystem from "@/components/payMethods/PaymentSystem";
import Props from "@/components/payMethods/Props";
import SavedCard from "@/components/payMethods/SavedCard";
import Card from "@/components/payMethods/Card";
import Btn from "@/components/Btn";
export default {
  name: "OrderEquipmentPay",
  components: {
    Header,
    Footer,
    ArrowBack,
    PaymentSystem,
    SavedCard,
    Props,
    Card,
    Btn,
  },
  data() {
    return {
      payMethod: "system", //system, saved-card, card, props(реквизит)
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
    padding: 88px 15px 93px 15px;
    h1 {
      font-size: 32px;
      margin-bottom: 60px;
    }
    .toggle {
      padding-bottom: 15px;
      border-bottom: 1px solid #666666;
      display: flex;
      justify-content: center;
      margin-bottom: 54px;
      a {
        text-decoration: none;
        margin: 0 27px;
        color: #999999;
        font-size: 14px;
      }
      .toggle-active {
        color: #ffffff;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          bottom: -17px;
          left: 0;
          height: 2px;
          background: #ffffff;
        }
      }
    }
    form {
      padding: 30px 57px 53px 57px;
      background: #191919;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
      }
      .line {
        width: 100%;
        height: 1px;
        background: #474747;
        margin: 30px 0 37px 0;
      }
      .radio {
        align-self: flex-start;
        margin-bottom: 37px;
        .radio-btn {
          margin-top: 20px;
          &:first-child {
            margin-top: 0;
          }
          [type="radio"]:checked,
          [type="radio"]:not(:checked) {
            position: absolute;
            left: -9999px;
          }
          [type="radio"]:checked + label,
          [type="radio"]:not(:checked) + label {
            position: relative;
            padding-left: 31px;
            cursor: pointer;
            line-height: 20px;
            display: inline-block;
          }
          [type="radio"]:checked + label:before,
          [type="radio"]:not(:checked) + label:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            min-width: 15px;
            min-height: 15px;
            border: 2.5px solid #ddd;
            border-radius: 100%;
            background: transparent;
          }
          [type="radio"]:checked + label:after,
          [type="radio"]:not(:checked) + label:after {
            content: "";
            min-width: 9px;
            min-height: 9px;
            background: #d8004e;
            position: absolute;
            top: 5.5px;
            left: 5.5px;
            border-radius: 100%;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
          }
          [type="radio"]:checked + label:before {
            background: transparent;
            border: 2.5px solid #d8004e;
          }
          [type="radio"]:not(:checked) + label:after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
          }
          [type="radio"]:checked + label:after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
      }
      .pay-btn {
        margin-top: 52px !important;
      }
    }
  }
}

@media screen and (max-width: 834px) {
  .wrap {
    .container {
      h1 {
        font-size: 24px;
        margin-bottom: 45px;
      }
      form {
        max-width: 100%;

        h2 {
          font-size: 24px;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .wrap {
    .container {
      h1 {
        font-size: 18px;
        margin-bottom: 30px;
        text-align: center;
      }
      form {
        background: transparent;
        padding: 0 15px;

        h2 {
          font-size: 16px;
        }
        .radio {
          .radio-btn {
            font-size: 14px;
            margin-top: 10px;
          }
        }
        .pay-btn {
          width: 130px;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>