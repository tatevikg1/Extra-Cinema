<template>
  <form @submit.prevent="submit" class="email">
    <div class="wrap">
      <div class="phone">
        <input
          v-model="$v.email.$model"
          type="tel"
          :disabled="showSms"
          placeholder="email"
          class="phone text-white text-semi-bold h3"
        />
      </div>
    </div>

    <div class="sms-wrap" v-if="showSms">
      <input
        v-model="$v.sms.$model"
        placeholder="sms-код"
        type="tel"
        class="sms text-white text-semi-bold h3"
      />
      <div @click="sendSmsAgain" class="timer text-gray text-regular">
        {{
          Number(seconds)
            ? `${Math.floor((seconds / 60) % 60)}:${(
                "0" +
                (seconds % 60)
              ).slice(-2)}`
            : seconds
        }}
      </div>
    </div>
    <button :disabled="$v.email.$error" class="next text-white text-semi-bold">
      Далее
    </button>

    <div v-if="showSms" class="why text-gray text-regular">
      <span @click="showModal = !showModal">Не приходит код?</span>
      <transition name="urlChanged">
        <div v-if="showModal" class="why-modal">
          <button @click="showModal = false">
            <img src="@/assets/images/auth/close.svg" alt="" />
          </button>
          <h3 class="text-white text-semi-bold">Возможные причины:</h3>
          <ul>
            <li>1. Адрес электронной почты введён неверно</li>
            <li>
              2. Вы не изменили в личном кабинете адрес почты на новый, и мы
              отправили код на старый. Обратитесь в службу поддержки через
              электронную почту
              <a href="mailto:support@extrafintech.com"
                >support@extrafintech.com</a
              >
              или позвоните по номеру
              <a href="tel:+79951317777">+7 995 131 77 77</a>
            </li>
            <li>
              3. Проблемы могут быть со стороны вашего почтового сервиса.
              Проверьте папку “спам” или обратитесь в их службу поддержки
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  numeric
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: null,
    sms: null,
    showSms: false,
    seconds: 180,
    showModal: false,
  }),
  validations: {
    email: {
      required,
      email,
    },
    sms: {
      required,
      numeric,
      minLength: minLength(3),
      maxLength: maxLength(7),
    },
  },
  methods: {
    countDownTimer() {
      if (this.seconds > 0 && this.showSms) {
        setTimeout(() => {
          this.seconds = this.seconds - 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.seconds = "Отправить снова";
      }
    },
    sendSmsAgain() {
      //some api call
      this.seconds = 180;
      this.countDownTimer();
    },
    submit() {
      this.$v.$touch();
      if (this.$v.email.$invalid) {
        console.log("error");
      } else {
        this.$emit("changeTitle", "Подтвердите E-Mail");
        this.showSms = true;
        this.countDownTimer();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrap {
    display: flex;
    position: relative;
    align-items: center;
    .phone {
      max-width: 255px;
    }
  }
  input {
    padding: 3px 10px 10px 10px;
    border: 0;
    border-bottom: 1px solid #ffffff;
    background: transparent;
    max-width: 278px;
    outline: 0;
    position: relative;
  }
  .sms-wrap {
    margin-top: 22px;
    position: relative;
    .timer {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 12px;
      cursor: pointer;
    }
  }

  .next {
    padding: 18px 25px;
    border: 1px solid #fff;
    outline: 0;
    font-size: 14px;
    background: transparent;
    transition: 0.2s;
    cursor: pointer;
    margin-top: 63px;
    &:disabled {
      border: 1px solid #999999;
      color: #999999;
      &:hover {
        border: 1px solid #999999;
        color: #999999;
        background: transparent;
      }
    }
    &:hover {
      background: #fff;
      color: #000;
    }
  }
  .why {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      background: transparent;
      outline: 0;
      border: 0;
    }
    span {
      text-decoration: underline;
      cursor: pointer;
      font-size: 12px;
    }
    &-modal {
      position: absolute;
      bottom: -30px;
      left: 50%;
      max-width: 281px;
      width: 100%;
      padding: 25px 33px;
      background: #0b0b0b;
      border: 0.5px solid #777777;
      h3 {
        font-size: 14px;
      }
      ul {
        list-style: none;

        h3 {
          font-size: 14px;
        }
        li {
          color: #ffffff;
          margin-top: 15px;
          font-size: 10px;
          font-family: "Regular";
          line-height: 18, 13px;
          a {
            color: #ffffff;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .email {
    .why {
      &-modal {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

@media (max-width: 480px) {
  .email {
    .wrap {
      max-width: 100% !important;
      width: 100% !important;

      .phone {
        max-width: 100% !important;
        width: 100% !important;
      }
    }
    .next {
      padding: 4px 25px;
    }
  }
}
</style>
