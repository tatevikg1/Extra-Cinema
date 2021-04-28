<template>
  <div class="wrap">
    <form>
      <div class="input-groups">
        <div class="input-group">
          <label for="name" class="text-regular">Введите имя и фамилию</label>
          <input type="text" id="name" />
        </div>
        <div class="input-group">
          <label for="name" class="text-regular">Номер карты</label>
          <input
            type="password"
            id="name"
            class="input-secret"
            placeholder="●●●● ●●●● ●●●● ●●●●"
          />
        </div>

        <div class="row">
          <div class="input-group">
            <label for="name" class="text-regular">Срок действия карты</label>
            <input type="text" id="name" placeholder="ММ/ГГ" />
          </div>
          <div class="input-group">
            <label for="name" class="text-regular">CVV2/CVC2</label>
            <input
              type="password"
              id="name"
              class="input-secret"
              placeholder="●●●"
            />
          </div>
        </div>
      </div>
      <div class="input-screen">
        <button
          v-for="(btn, idx) in buttons"
          :key="idx"
          :value="btn"
          @click.prevent
          class="text-white text-semi-bold"
        >
          {{ btn }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      buttons: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "clear",
        "0",
        "enter",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  // max-width: 634px;
  width: 100%;
  form {
    display: flex;
    align-items: flex-end;
    .input-screen {
      display: flex;
      flex-wrap: wrap;
      padding: 21px 26px;
      width: 256px;
      height: 218px;
      background: #262626;
      border-radius: 20px;
      box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.2);
      margin-left: 38px;
      button {
        background: transparent;
        width: 45px;
        height: 38px;
        border: 0;
        outline: 0;
        font-size: 20px;
        margin: 0 11.5px;
        transition: 0.2s;
        border-radius: 5px;
        position: relative;

        &:hover {
          background: #27ae60;
        }
        &:nth-child(10),
        &:nth-child(12) {
          font-size: 0;
        }
        &:nth-child(10)::before {
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          background: url('../../assets/images/common/backspace.svg') no-repeat center;
          background-size: contain;
          position: absolute;
          top: 7px;
          left: 9px;
        }
         &:nth-child(12)::before {
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          background: url('../../assets/images/common/check.svg') no-repeat center;
          background-size: contain;
          position: absolute;
          top: 7px;
          left: 9px;
        }
      }
    }
    .input-groups {
      max-width: 365px;

      .row {
        display: flex;
        justify-content: space-between;
        .input-group {
          max-width: 192px;
          &:nth-child(1) {
            margin-right: 20px;
          }
          &:nth-child(2) {
            max-width: 154px;
          }
        }
      }
      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: relative;
        margin-top: 17px;
        input[type="password"] {
          color: #27ae60;
          font-size: 30px;
          letter-spacing: 3px;
        }
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
          &:hover {
            border: 0.5px solid #ffffff;
          }
          &:focus {
            border: 0.5px solid #ffffff;
          }

          &::placeholder {
            color: #777777;
            font-family: "Regular";
          }
        }
        .input-secret {
          &::placeholder {
            font-size: 17px !important;
            text-transform: uppercase;
            letter-spacing: 3px;
            transform: translateY(-7px);
          }
        }
      }
    }
  }
}
</style>