<template>
  <div class="createSession">
    <button class="text-semi-bold text-white select">Выбрать фильм</button>
    <div class="row">
      <span class="text-white text-semi-bold">Назначить</span>
      <div class="time text-white text-regular">
        Время: <input type="text" placeholder="00:00" />
      </div>
      <div class="time text-white text-regular">
        Дату: <input type="text" placeholder="01.01.2021" />
      </div>
    </div>
    <div class="row">
      <span class="text-white text-semi-bold adv">Заказать рекламу</span>
      <div class="file">
        <label for="advert" class="text-regular"
          >Прикрепить файл
          <img :src="AttachmentIcon" alt="" />
        </label>
        <input type="file" id="advert" />
      </div>
    </div>
    <div class="add text-white text-semi-bold">
      Добавить сеанс
      <span><img :src="PlusIcon" alt="" /></span>
    </div>
    <Btn text="Создать сеанс" fluid class="createBtn" />
  </div>
</template>

<script>
import PlusIcon from "@/assets/images/common/plus.svg";
import Btn from "@/components/Btn";
import AttachmentIcon from "@/assets/images/common/attachment.svg";

export default {
  name: "createSession",
  components: { Btn },
  data() {
    return {
      PlusIcon,
      AttachmentIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
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
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      &:nth-child(2) {
        margin-left: auto;
        input {
          width: 89px;
        }
      }
      &:nth-child(3) {
        margin-left: 12px;
        input {
          width: 109px !important;
        }
      }
      input {
        background: transparent;
        border: 1px solid #ffffff;
        border-radius: 10px;
        padding: 7px;
        outline: 0;
        margin-left: 12px;
        &::placeholder,
        & {
          text-align: center;
          font-family: "Regular";
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }
        color: #ffffff !important;
      }
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

  .add {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 25px;
    &:hover {
      span {
        background: #d8004e;
      }
    }
    span {
      margin-left: 10px;
      background: #333333;
      padding: 6px 8px;
      border-radius: 10px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.31);
      display: flex;
      align-items: center;
      transition: 0.2s;
    }
  }

  .createBtn {
    margin-top: 44px;
  }
}

@media screen and (max-width: 630px) {
  .createSession {
    .row {
      flex-wrap: wrap;
      span {
        width: 100%;
        margin-bottom: 20px;
      }
      .time:nth-child(2) {
        margin-left: 0 !important;
      }
    }
  }
}

@media screen and (max-width: 422px) {
  .createSession {
    .row {
        flex-direction: column;
        align-items: flex-start;
      .time{
          margin-top: 10px;
        margin-left: 0 !important;
      }
    }
  }
}
</style>