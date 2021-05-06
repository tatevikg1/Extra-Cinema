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
      <create-session v-if="currentView == 'createSession'" />
      <current-session v-if="currentView == 'currentSession'" />
      <last-sessions v-if="currentView == 'lastSessions'" />
    </div>
  </div>
</template>

<script>
import RoundPlusIcon from "@/assets/images/common/add_circle_white.svg";

import CreateSession from "@/components/cabinet/createSession";
import CurrentSession from "@/components/cabinet/currentSession";
import LastSessions from "@/components/cabinet/lastSessions";

export default {
  name: "Cabinet",
  components: { CreateSession, CurrentSession, LastSessions },
  data() {
    return {
      currentView: "currentSession",
      roundPlusIcon: RoundPlusIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.cab-wrap {
  max-width: 539px;
  width: auto;
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
  }
}

@media screen and (max-width: 1024px) {
  .cab-wrap {
    margin: 87px auto 45px auto;
  }
}

@media screen and (max-width: 630px) {
  .cab-wrap .form {
    background: transparent;
    padding: 41px 0 0 0;
  }
}
</style>