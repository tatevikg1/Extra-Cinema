<template>
  <div class="currentSession">
    <div v-for="(seance, idx) in seances" :key="idx" class="item">
      <div class="row">
        <span class="text-white text-medium">Фильм</span>
        <div class="text-regular info">{{ seance.film.title }}</div>
      </div>
      <div class="row">
        <span class="text-white text-medium">Время</span>
        <div class="text-regular info time">{{ seance.start }}</div>
        <div class="inside-row">
          <span class="text-white text-medium">Дата</span>
          <div class="text-regular info">
            {{ seance.day }}
          </div>
        </div>
      </div>
      <div class="row">
        <span class="text-white text-medium">Количество проданных мест</span>
        <div class="text-regular info amount">
          {{ seance.watchers }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/assets/images/common/local_activity.svg";
import axios from "axios";

export default {
  name: "currentSession",
  data() {
    return {
      Icon,
      seances: [
        {
          film: {title: "Крыло"},
          watchers: "10 000",
          start: "11:10",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусственный интелект 2"},
          watchers: "9 000",
          start: "14:50",
          day: "01.02.2021",
        },
        {
          film:{title: "Интелект 3"},
          watchers: "2 000",
          start: "14:50",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусство 4"},
          watchers: "1 000",
          start: "14:20",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусственный интелект 5"},
          watchers: "10 000",
          start: "14:50",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусственный интелект 6"},
          watchers: "9 000",
          start: "14:50",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусственный интелект 2"},
          watchers: "2 000",
          start: "14:50",
          day: "01.02.2021",
        },
        {
          film:{title: "Искусственный интелект 2"},
          watchers: "1 000",
          start: "14:50",
          day: "01.02.2021",
        },
      ],
    };
  },
  mounted() {
    // this.getSeances();
  },
  methods: {
    getSeances() {
      axios
        .post(process.env.VUE_APP_API_URL + "/api/seances/past", {
          token: this.$store.getters.getAuthToken,
        })
        .then((res) => {
          this.seances = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.currentSession {
  height: 426px;
  overflow-y: scroll;
  padding-right: 25px;
  .item {
    border-bottom: 1px solid #777777;
    padding: 40px 0;
    &:first-child {
      padding: 0 0 40px 0;
    }
    &:last-child {
      padding: 40px 0 20px 0;
      border-bottom: 0;
    }
    .row {
      display: flex;
      align-items: center;
      margin-top: 25px;
      max-width: 370px;
      .inside-row {
        display: flex;
        align-items: center;
        margin-left: 10px;
      }
      &:first-child {
        margin-top: 0;
      }
      span {
        font-size: 16px;
        margin-right: 12px;
        display: block;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        background: transparent;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 7px 16px;
        width: 100%;
        img {
          margin-right: 10px;
        }
      }
      .amount {
        width: 95px;
        margin-left: auto;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .currentSession {
    padding-right: 15px !important;
    .item {
      .row {
        // flex-wrap: wrap;
        .time {
          max-width: 60px;
        }
        &:last-child {
          flex-wrap: nowrap;
          .info {
            min-width: 108px;
          }
        }
        .inside-row {
          margin-left: 0;
          // margin-top: 25px;
        }
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .currentSession {
    .item {
      .row {
        // flex-wrap: wrap;
        &:nth-child(2) {
          flex-wrap: wrap;
        }
        &:last-child {
          flex-wrap: nowrap;
          .info {
            min-width: 108px;
          }
        }
        .inside-row {
          margin-left: 0;
          margin-top: 25px;
        }
      }
    }
  }
}
</style>

