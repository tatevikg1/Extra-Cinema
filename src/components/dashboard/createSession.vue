<template>
  <div class="createSession">
    <transition name="urlChanged">
      <films-modal
        v-if="modalFilm"
        @onModalClick="selectFilm"
        @onModalClose="modalFilm = !modalFilm"
      />
    </transition>
    <transition name="urlChanged">
      <halls-modal
        v-if="modalHall"
        @onModalClick="selectHall"
        @onModalClose="modalHall = !modalHall"
      />
    </transition>

    <div v-for="(film, idx) in films" :key="idx" class="film-item">
      <button
        @click="showFilmModal(film)"
        class="text-semi-bold text-white select"
      >
        {{ film.name }}
      </button>
      <hr style="margin:10px;visibility:hidden">
      <button
        @click="showHallModal(hall)"
        class="text-semi-bold text-white select"
      >
        {{ hall.title }}
      </button>
      <div class="row">
        <span class="text-white text-semi-bold">Назначить</span>
        <div class="time text-white text-regular">
          Время:
          <input v-model="newSeance.time" type="time" />
        </div>
        <div class="time text-white text-regular">
          Дату:
          <input v-model="newSeance.date" id="date" type="date" />
        </div>
      </div>
      <div class="row">
        <span class="text-white text-semi-bold adv">Рекламный блок </span>
        <div class="time text-white text-regular">
          Mинут:
          <!-- <label for="advert" class="text-regular"
            >Прикрепить файл
            <img :src="AttachmentIcon" alt="" />
          </label> -->
          <input v-model="newSeance.advertTime" type="number" />
        </div>
      </div>
      <div class="row">
        <span class="text-white text-semi-bold adv">Обслуживание зала </span>
        <div class="time text-white text-regular">
          Mинут:
          <input v-model="newSeance.serviceTime" type="number" />
        </div>
      </div>
    </div>
    <!-- <add-btn text="Добавить сеанс" @click.native="createSessionHandler" /> -->
    <Btn
      @click.native="createSessionHandler"
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
import HallsModal from "@/components/modals/HallsModal";
import axios from "axios";
import AttachmentIcon from "@/assets/images/common/attachment.svg";

export default {
  name: "createSession",
  components: { Btn, FilmsModal, HallsModal, AddBtn },
  data() {
    return {
      modalFilm: false,
      selectedFilm: null,
      modalHall: false,
      selectedHall: null,
      films: [
        {
          name: "Выбрать фильм",
          time: "",
          date: "",
          advertTime: "",
        },
      ],
      hall: {
        title: "Выбрать зал",
      },
      newSeance: {
        film_id: "",
        hall_id: "",
        time: "",
        date: "",
        advertTime: "",
        serviceTime: "",
      },
      AttachmentIcon,
    };
  },
  methods: {
    showFilmModal(film) {
      this.modalFilm = !this.modalFilm;
      this.selectedFilm = film;
    },
    selectFilm(film) {
      this.selectedFilm.name = film.title;
      this.newSeance.film_id = film.id;

      this.films = this.films.map((el) =>
        el === this.selectedFilm ? (el = this.selectedFilm) : el
      );

      this.selectedFilm = null;
    },
    showHallModal(hall) {
      this.modalHall = !this.modalHall;
      this.selectedHall = hall;
    },
    selectHall(hall) {
      this.selectedHall.title = hall.title;
      this.selectedHall.id = hall.id;
      this.hall = hall;
    },

    createSessionHandler() {
      var fData = new FormData();

      fData.append("film_id", this.newSeance.film_id);
      fData.append("hall_id", this.selectedHall.id);
      fData.append("token", this.$store.getters.getAuthToken);
      fData.append("day", this.newSeance.date);
      fData.append("start", this.newSeance.time);
      fData.append("duration_advertising", this.newSeance.advertTime);
      fData.append("duration_service", this.newSeance.serviceTime);

      console.log("this.newSeance");
      axios
        .post(process.env.VUE_APP_API_URL + "/api/seances/store", fData)
        .then((res) => {
          this.$router.push("/cinema").catch(() => {});
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log("validaion error");
          }
          console.log(err);
        });
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
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
          }
          color: #ffffff !important;
        }
      }
      .file {
        width: 100%;
        max-width: 261px;
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
        .time {
          input {
            width: 64px !important;
            margin-right: 10px;
          }

          &:nth-child(3) {
            input {
              margin-right: 0;
              max-width: 90px !important;
            }
          }
          #date {
            width: 113px !important;
          }
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
        .time {
          margin-top: 10px;
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>