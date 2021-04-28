<template>
  <div class="dropdown">
    <span class="title text-regular">Оплата картой VISA</span>
    <div class="select" @click="btnClicked = !btnClicked">
      <div class="wrap">
        <img src="../../assets/images/common/visa.svg" alt="Карта виза" />
        <span class="text-white text-semi-bold">{{ activeOption.name }}</span>
      </div>
      <div class="toggle-btn">
        <img
          :class="{ btn_active: btnClicked }"
          src="../../assets/images/arrow_drop.svg"
          alt=""
        />
      </div>
    </div>
    <transition name="urlChanged">
      <ul v-if="btnClicked">
        <li v-for="(option, idx) in options" :key="idx" @click="select(option)">
          <span class="text-white text-semi-bold">{{ option.name }}</span>
        </li>
      </ul>
    </transition>
    <div @click="addCard = !addCard" class="add-card text-semi-bold text-white">
      <img src="../../assets/images/common/add_circle.svg" alt="" />
      Добавить карту
    </div>
    <transition name="add">
      <form v-if="addCard">
        <div class="input-group">
          <label for="name" class="text-regular">Введите имя и фамилию</label>
          <input type="text" id="name" />
        </div>
        <div class="row">
          <div class="input-group">
            <label for="number" class="text-regular">Номер карты</label>
            <input
              type="password"
              id="number"
              class="input-secret"
              placeholder="●●●● ●●●● ●●●● ●●●●"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-group date">
            <label for="date" class="text-regular">Срок действия карты</label>
            <input type="text" id="date" placeholder="ММ/ГГ" />
          </div>
          <div class="input-group cvc">
            <label for="cvv" class="text-regular">CVV2/CVC2</label>
            <input
              type="password"
              id="cvv"
              class="input-secret"
              placeholder="●●●"
            />
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SavedCard",
  mounted() {},
  data() {
    return {
      btnClicked: false,
      addCard: false,
      activeOption: {
        name: "4817 76** **** 6449",
      },
      options: [
        {
          name: "4817 76** **** 1235",
        },
        {
          name: "4817 76** **** 3676",
        },
        {
          name: "4817 76** **** 1234",
        },
        {
          name: "4817 76** **** 0912",
        },
      ],
    };
  },
  methods: {
    select(option) {
      this.activeOption = option;
      this.btnClicked = !this.btnClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  // max-width: 365px;
  width: 365px;
  position: relative;
  .title {
    color: #777777;
    font-size: 14px;
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    overflow: hidden;
    cursor: pointer;
    margin-top: 10px;
    .wrap {
      display: flex;
      align-items: center;
      background: #262626;
      padding: 13px 18px;
      width: calc(100% - 46px);
      img {
        margin-right: 17px;
      }
      span {
        font-size: 14px;
      }
    }
    .toggle-btn {
      background: #777777;
      width: 46px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transform: rotate(180deg);
        transition: 0.2s;
      }
      .btn_active {
        transform: rotate(0);
      }
    }
  }
  ul {
    position: absolute;
    left: 0;
    top: 71px;
    width: calc(100% - 46px);
    list-style-type: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    z-index: 10;
    li {
      padding: 12px 18px;
      background: #292929;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      span {
        font-size: 14px;
      }
    }
  }
  .add-card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: underline;
    font-size: 16px;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      color: #27ae60;
    }
    img {
      margin-right: 10px;
    }
  }
  form {
    margin-top: 30px;
    // max-width: 336px;
    width: 100%;
    .row {
      display: flex;
      margin-top: 17px;
    }
    .date {
      max-width: 192px;
      width: 100%;
    }
    .cvc {
      max-width: 154px;
      width: 100%;
      margin-left: 20px;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: relative;
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

.add-enter-active,
.add-leave-active {
  transition: 0.2s;
  opacity: 1;
  height: 240px;
}
.add-enter,
.add-leave-to {
  height: 0;
  opacity: 0;
}
</style>