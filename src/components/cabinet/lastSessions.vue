<template>
  <div class="currentSession">
    <div v-for="(film, idx) in films" :key="idx" class="item">
      <div class="row">
        <span class="text-white text-medium">Фильм</span>
        <div class="text-regular info">{{ film.name }}</div>
      </div>
      <div class="row">
        <span class="text-white text-medium">Время</span>
        <div class="text-regular info">{{ film.time }}</div>
        <div class="inside-row">
          <span class="text-white text-medium">Дата</span>
          <div class="text-regular info">
            {{ film.date }}
          </div>
        </div>
      </div>
      <div class="row">
        <span class="text-white text-medium">Количество проданных мест</span>
        <div class="text-regular info">
          {{ film.watchers }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/assets/images/common/local_activity.svg";

export default {
  name: "currentSession",
  data() {
    return {
      Icon,
      films: [
        {
          name: "Крылья урагана",
          watchers: "10 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья",
          watchers: "9 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "2 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "1 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "10 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "9 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "2 000",
          time: "14:50",
          date: "01.02.2021",
        },
        {
          name: "Крылья урагана",
          watchers: "1 000",
          time: "14:50",
          date: "01.02.2021",
        },
      ],
    };
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
        img {
          margin-right: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .currentSession {
    .item {
      .row {
        flex-wrap: wrap;

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