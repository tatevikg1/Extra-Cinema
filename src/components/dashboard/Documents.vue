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
    <div class="content">
      <div v-if="currentView === 'fillForMe'" class="fillForMe">
        <p class="text-regular">
          Уважаемый клиент! Для удобства и экономии вашего времени мы готовы
          предоставить услугу заполнения документов.
        </p>
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
  .content {
    padding: 67px 42px 103px 42px;
    background: #212121;
    border-radius: 0 10px 10px 10px;
    .fillForMe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        color: #bcbcbc;
        font-size: 16px;
        margin-bottom: 90px;
        max-width: 618px;
        width: 100%;
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
      .useBtn {
      }
    }
  }
}
</style>