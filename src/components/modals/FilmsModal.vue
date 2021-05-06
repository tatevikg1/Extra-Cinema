<template>
  <div class="modal-wrap">
    <div class="wrapper">
      <button @click="$emit('onModalClose')" class="close-btn">
        <img :src="CloseIcon" alt="" />
      </button>
      <div class="items">
        <div v-for="(film, idx) in films" :key="idx" class="item">
          <div class="row">
            <span class="text-white text-medium">Фильм</span>
            <div class="text-regular info">{{ film.name }}</div>
          </div>
          <div class="row">
            <span class="text-white text-medium">Год</span>
            <div class="text-regular info">{{ film.year }}</div>
          </div>
          <div class="row">
            <span class="text-white text-medium">Длительность</span>
            <div class="text-regular info">{{ film.duration }} минут</div>
          </div>
          <div class="row" @click="clickHandler(film)">
            <Btn text="Выбрать" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/images/common/close.svg";
import Btn from "@/components/Btn";

export default {
  name: "FilmsModal",
  components: { Btn },
  data() {
    return {
      CloseIcon,
      films: [
        { name: "Обитель зла", year: 2012, duration: "210" },
        { name: "Обитель зла 1", year: 2013, duration: "220" },
        { name: "Обитель зла 2", year: 2014, duration: "230" },
        { name: "Обитель зла 3", year: 2015, duration: "190" },
        { name: "Обитель зла 4", year: 2016, duration: "230" },
        { name: "Обитель зла 5", year: 2017, duration: "212" },
        { name: "Обитель зла 6", year: 2018, duration: "211" },
        { name: "Обитель зла 7", year: 2019, duration: "219" },
      ],
    };
  },
  methods: {
    clickHandler(e) {
      this.$emit("onModalClick", e.name);
      this.$emit("onModalClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
  padding: 15px;
  .wrapper {
    max-width: 539px;
    width: 100%;
    border-radius: 20px;
    background: #191919;
    padding: 61px 50px 50px 50px;
    position: relative;
    .close-btn {
      position: absolute;
      background: transparent;
      outline: 0;
      border: 0;
      top: 15px;
      right: 15px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .items {
      height: 439px;
      overflow-y: scroll;
      padding-right: 25px;
      .item {
        padding: 40px 0;
        border-bottom: 1px solid #777777;
        &:first-child {
          padding: 0 0 40px 0;
        }
        &:last-child {
          padding: 40px 0 0 0;
          border-bottom: 0;
        }
        .row {
          display: flex;
          align-items: center;
          margin-top: 20px;
          &:first-child {
            margin-top: 0;
          }
          span {
            margin-right: 15px;
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
            padding: 7px 15px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .modal-wrap {
    .wrapper {
      padding: 41px 30px 30px 30px;
      .item {
          padding-right: 15px;
          .row {
              .info {
                  font-size: 12px !important;
              }
          }
      }
    }
  }
}
</style>