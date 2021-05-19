<template>
  <div class="createSession">
    <transition name="urlChanged">
      <films-modal
        v-if="modal"
        @onModalClick="selectFilm"
        @onModalClose="modal = !modal"
      />
    </transition>
    <div v-for="(film, idx) in films" :key="idx" class="film-item">
      <button @click="showModal(film)" class="text-semi-bold text-white select">
        {{ film.name }}
      </button>
      <div class="row">
        <span class="text-white text-semi-bold">Назначить</span>
        <div class="time text-white text-regular">
          Время:
          <input v-model="newFilm.time" type="text" placeholder="00:00" />
        </div>
        <div class="time text-white text-regular">
          Дату:
          <input :v-model="newFilm.date" type="text" placeholder="01.01.2021" />
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
      <add-btn text="Добавить сеанс" @click.native="createSessionHandler" />
    </div>
    <Btn
      @click="createSessionHandler"
      text="Создать сеанс"
      fluid
      class="createBtn"
    />
  </div>
</template>

<script>
import Btn from "@/components/Btn";
import AddBtn from "@/components/AddBtn";
import FilmsModal from "@/components/modals/FilmsModal";

import AttachmentIcon from "@/assets/images/common/attachment.svg";

export default {
  name: "createSession",
  components: { Btn, FilmsModal, AddBtn },
  data() {
    return {
      modal: false,
      selectedItem: null,
      films: [
        {
          name: "Выбрать фильм",
          time: "",
          date: "",
          advertDoc: "",
        },
      ],
      newFilm: {
        name: "Выбрать фильм",
        time: "",
        date: "",
        advertDoc: "",
      },
      AttachmentIcon,
    };
  },
  methods: {
    showModal(film) {
      this.modal = !this.modal;
      this.selectedItem = film;
    },
    selectFilm(film) {
      this.selectedItem.name = film;

      this.films = this.films.map((el) =>
        el === this.selectedItem ? (el = this.selectedItem) : el
      );

      this.selectedItem = null;
    },
    createSessionHandler() {
      //work on it later....
      const newFilm = {
        name: "Выбрать фильм",
        time: "",
        date: "",
        advertDoc: "",
      };
      this.films.push(newFilm);
    },
  },
};
</script>

<style lang="scss" scoped>
.createSession {
  .film-item {
    margin-bottom: 25px;
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
        max-width: 250px;
        margin-left: auto;
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

    .addBtn {
      margin-top: 25px;
    }

    .createBtn {
      margin-top: 44px;
    }
  }
}

@media screen and (max-width: 630px) {
  .createSession {
    .film-item {
      .row {
        flex-wrap: wrap;
        .file {
          margin: 0 auto 0 0;
        }
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
}

@media screen and (max-width: 422px) {
  .createSession {
    .film-item {
      .row {
        flex-direction: column;
        align-items: flex-start;
        .time {
          margin-top: 10px;
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>