<template>
  <div class="wrap">
    <h3 class="text-white text-semi-bold">Заполнение реквезитов</h3>
    <form @submit.prevent>
      <div class="row">
        <div class="input-group">
          <label for="name" class="text-regular"
            >Название организации получателя</label
          >
          <input type="text" id="name" class="text-medium" />
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="account" class="text-regular">Счет получателя</label>
          <input type="text" id="account" class="text-medium" />
        </div>
      </div>
      <div class="row">
        <div class="input-group inn">
          <label for="inn" class="text-regular">ИНН</label>
          <input type="text" id="inn" class="text-medium" />
        </div>
        <div class="input-group kpp">
          <label for="kpp" class="text-regular">КПП</label>
          <input type="text" id="kpp" class="text-medium" />
        </div>
        <div class="input-group bic">
          <label for="bic" class="text-regular">БИК</label>
          <input type="text" id="bic" class="text-medium" />
        </div>
      </div>

      <div class="row">
        <div class="input-group total">
          <label for="total" class="text-regular" v-bind="0"
            >Сумма платежа</label
          >
          <input type="text" id="total" placeholder="0,00" disabled />
        </div>
        <span class="text-regular"
          >Комиссия будет расчитана согласно тарифу</span
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Props",
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #191919;
  .container {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 16px;
      margin-bottom: 28px;
    }
    .row {
      display: flex;
      margin-top: 15px;
      max-width: 560px;
      justify-content: space-between;
      width: 100%;

      &:nth-child(4) .input-group {
        max-width: 156px;
        width: 100%;
        &::after {
          content: "руб.";
          color: #ffffff;
          font-size: 14px;
          font-family: "Regular";
          position: absolute;
          top: 38px;
          right: -35px;
        }
      }
      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: relative;
        &::focus {
          label {
            color: #ffffff;
          }
        }
        label {
          color: #777777;
          font-size: 14px;
        }
        input {
          height: 42px;
          background: transparent;
          border: 0.5px solid #777777;
          max-width: 560px;
          width: 100%;
          outline: 0;
          margin-top: 10px;
          cursor: pointer;
          transition: 0.1s;
          padding: 17px 23px;
          color: #ffffff;
          border-radius: 10px;
          &:hover {
            border: 0.5px solid #ffffff;
          }
          &:focus {
            border: 0.5px solid #ffffff;
          }

          &::placeholder {
            color: #ffffff;
            font-family: "Regular";
          }
        }
      }
      .kpp {
        margin: 0 20px;
      }
      .inn {
        width: 157%;
      }
      .total {
        max-width: 228px !important;
        width: 100%;
      }
      span {
        color: #777777;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        transform: translateY(10px);
        margin-left: 50px;
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .wrap {
    background: transparent;
    .container {
      .row {
        flex-wrap: wrap;
        .inn {
          display: block;
        }
        .kpp {
          max-width: 148px;
          margin-left: 0;
          margin-top: 15px;
          width: 50%;
        }
        .bic {
          max-width: 148px;
          margin-top: 15px;
          width: 40% !important;

        }
        span {
          margin-left: 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>