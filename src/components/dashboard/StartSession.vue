<template>
  <div class="form">
    <div class="row">
      <div class="col">
        <h2 class="text-white text-medium">Довод</h2>
        <router-link to="somePath" class="button text-white text-semi-bold"
          ><img :src="AirPlayIcon" alt="" /> Тестовый режим</router-link
        >
        <router-link to="somePath" class="button text-white text-semi-bold"
          ><img :src="DesktopMacIcon" alt="" /> Основной показ</router-link
        >
      </div>
      <img :src="PlayerExample" class="player" alt="" />
    </div>
    <div class="row">
      <div class="col">
        <h2 class="text-white text-medium">Довод</h2>
        <router-link to="somePath" class="button text-white text-semi-bold"
          ><img :src="AirPlayIcon" alt="" /> Тестовый режим</router-link
        >
        <router-link to="somePath" class="button text-white text-semi-bold"
          ><img :src="DesktopMacIcon" alt="" /> Основной показ</router-link
        >
      </div>
      <img :src="PlayerExample" class="player" alt="" />
    </div>
    <div class="row buttons">
      <button class="text-semi-bold">
        <img :src="VideocamIcon" alt="" /> НАСТРОЙКИ ИЗОБРАЖЕНИЯ
      </button>
      <button class="text-semi-bold">
        <img :src="VolumeIcon" alt="" /> НАСТРОЙКИ ЗВУКА
      </button>
    </div>
  </div>
</template>

<script>
import PlayerExample from "@/assets/images/player_example.png";
import AirPlayIcon from "@/assets/images/dashboard/airplay.svg";
import DesktopMacIcon from "@/assets/images/dashboard/desktop_mac.svg";
import VideocamIcon from "@/assets/images/dashboard/videocam.svg";
import VolumeIcon from "@/assets/images/dashboard/volume.svg";
export default {
  data() {
    return {
      PlayerExample,
      AirPlayIcon,
      DesktopMacIcon,
      VideocamIcon,
      VolumeIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 820px;
  width: 100%;
  margin: 77px auto 185px auto;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 0;
    border-bottom: 1px solid #777777;
    &:first-child {
      padding: 0 0 30px 0;
    }
    .col {
      max-width: 260px;
      width: 100%;
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 35px;
      }
      a {
        margin-bottom: 28px;
        font-size: 18px;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
        &:hover {
          color: #d8004e;
          text-decoration: none;
        }
        &:nth-child(3) {
          margin-bottom: 0;
        }
      }
    }
    .player {
      max-width: 352px;
      width: 100%;
      height: 100%;
    }
  }
  .buttons {
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0;
    padding: 30px 0 0 0;
    button {
      background: transparent;
      border: 1px solid #ffffff;
      outline: 0;
      color: #ffffff;
      padding: 15px 51px 15px 15px;
      display: flex;
      align-items: center;
      transition: 0.3s;
      &:hover {
        background: #ffffff;
        color: #000000;
        img {
          filter: brightness(0);
        }
      }
      &:first-child {
        margin-right: 20px;
      }
      img {
        margin-right: 15px;
        font-size: 16px;
      }
    }
  }
}
</style>