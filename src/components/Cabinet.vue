<template>
  <div class="cab-wrap text-white">
    <div class="buttons">
      <button
        @click="currentView = 'createSession'"
        :class="{ disabled: currentView != 'createSession' }"
      >
        Создать сеанс
        <img :src="roundPlusIcon" alt="" />
      </button>
      <button
        @click="currentView = 'lastSessions'"
        :class="{ disabled: currentView != 'lastSessions' }"
      >
        Прошлые сеансы
      </button>
      <button
        @click="currentView = 'currentSession'"
        :class="{ disabled: currentView != 'currentSession' }"
      >
        Действующий сеанс
      </button>
    </div>
    <div class="form">
      <transition name="urlChanged">
        <div v-if="currentView == 'createSession'" class="createSession">
          <button class="text-semi-bold text-white select">
            Выбрать фильм
          </button>
          <div class="row">
            <span class="text-white text-semi-bold">Назначить</span>
            <div class="time text-white text-regular">
              Время: <input type="text" />
            </div>
            <div class="time text-white text-regular">
              Дату: <input type="text" />
            </div>
          </div>
          <div class="row">
            <span class="text-white text-semi-bold adv">Заказать рекламу</span>
            <div class="file">
              <label for="advert" class="text-regular"
                >Прикрепить файл
                <img :src="attachmentIcon" alt="" />
              </label>
              <input type="file" id="advert" />
            </div>
          </div>
          <div class="add text-white text-semi-bold row">
            Добавить сеанс
            <span><img :src="plusIcon" alt="" /></span>
          </div>
          <Btn text="Создать сеанс" fluid class="createBtn" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import RoundPlusIcon from "@/assets/images/common/add_circle_white.svg";
import PlusIcon from "@/assets/images/common/plus.svg";
import AttachmentIcon from "@/assets/images/common/attachment.svg";

import Btn from "@/components/Btn";

export default {
  name: "Cabinet",
  components: { Btn },
  data() {
    return {
      currentView: "createSession",
      roundPlusIcon: RoundPlusIcon,
      plusIcon: PlusIcon,
      attachmentIcon: AttachmentIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.cab-wrap {
  max-width: 539px;
  width: 100%;
  margin: 140px auto 45px auto;
  .buttons {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    button {
      color: #ffffff;
      font-family: "Medium";
      width: 33.3%;
      padding: 12px;
      background: #5c5e5d;
      border: 0;
      outline: 0;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: 0.2s;
      &:hover {
        text-decoration: underline;
      }
      &:nth-child(2) {
        border-right: 1px solid #5c5e5d;
        border-left: 1px solid #5c5e5d;
      }
      img {
        margin-left: 7px;
      }
    }
    .disabled {
      font-family: "Regular";
      background: #333333;
      color: rgba(255, 255, 255, 0.4);
      img {
        filter: brightness(40%);
      }
    }
  }
  .form {
    background: #191919;
    padding: 41px 50px 50px 50px;
    border-radius: 20px;
    margin-top: 15px;
    .createSession {
      button.select {
        width: 100%;
        background: transparent;
        font-size: 14px;
        padding: 7px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        outline: 0;
      }
      .row {
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span,
        .add {
          font-size: 16px;
        }
        span {
          margin-right: 20px;
          &.adv {
            min-width: 156px;
          }
        }
        .time {
          display: flex;
        }
        .file {
          width: 100%;
          label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 7px 15px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);
            border: 1px solid #ffffff;
            border-radius: 12px;
          }
          input {
            display: none;
          }
        }
      }

      .createBtn {
        margin-top: 44px;
      }
    }
  }
}
</style>