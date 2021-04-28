<template>
  <div class="carousel">
    <div class="row">
      <!-- main carousel -->
      <VueSlickCarousel
        v-bind="settings"
        ref="c1"
        :asNavFor="$refs.c2"
        :focusOnSelect="true"
        class="preview"
      >
        <div v-for="(item, idx) in items" :key="idx">
          <img :src="item" alt="" />
        </div>
      </VueSlickCarousel>
      <div class="info">
        <h3 class="text-white text-semi-bold">Кинопроектор EIKI EK-Cinema</h3>
        <!-- carousel -->
        <VueSlickCarousel
          ref="c2"
          v-bind="settings2"
          :asNavFor="$refs.c1"
          :focusOnSelect="true"
          class="main"
        >
          <div v-for="(item, idx) in items" :key="idx">
            <img :src="item" alt="" />
          </div>
        </VueSlickCarousel>
        <div class="buttons">
          <button @click="showPrev">
            <img
              src="../assets/images/cinema-order-equipment-page/arrow_white.svg"
              alt="Назад"
            />
          </button>
          <button @click="showNext">
            <img
              src="../assets/images/cinema-order-equipment-page/arrow_white.svg"
              alt="Вперед"
            />
          </button>
        </div>
        <div class="add">
          <div class="input-group">
            <label class="text-regular">Количество</label>
            <div class="calc">
              <button @click="increment">
                <img src="../assets/images/common/plus.svg" alt="Добавить" />
              </button>
              <div class="screen text-white text-semi-bold">{{ amount }}</div>
              <button @click="decrement">
                <img src="../assets/images/common/minus.svg" alt="Убавить" />
              </button>
            </div>
          </div>
          <button class="add-btn text-white text-semi-bold">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Slide from "@/assets/images/slide_example.png";

export default {
  name: "Carousel",
  components: { VueSlickCarousel },
  data() {
    return {
      // urls to images, you can get them from backend in the future
      amount: 1,
      items: [Slide, Slide, Slide, Slide, Slide, Slide, Slide, Slide],
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        fade: true,
      },
      settings2: {
        arrows: false,
        dots: false,
        slidesToShow: 4,
        responsive: [{ breakPoint: 600, slidesToShow: 1 }],
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.c1.next();
    },
    showPrev() {
      this.$refs.c1.prev();
    },
    increment() {
      this.amount++;
    },
    decrement() {
      if (this.amount == 0) {
        return;
      }
      this.amount--;
    },
  },
  mounted() {
    this.$nextTick(this.$forceUpdate);
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  padding-bottom: 46px;
  margin-bottom: 36px;
  border-bottom: 1px solid #777777;
  .row {
    display: flex;
    h3 {
      font-size: 18px;
    }
    .preview {
      width: 224px;
      height: 224px;
      * {
        outline: 0;
        border: 0;
      }
      img {
        width: 224px;
        height: 224px;
        border-radius: 10px;
      }
    }
    .info {
      margin-left: 20px;
      position: relative;
      max-width: 100%;
      width: 100%;
      .buttons {
        position: absolute;
        top: 70px;
        left: 0;
        z-index: 20;
        max-width: 353px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        button {
          background: transparent;
          padding: 6px 9px;
          border: 0;
          outline: 0;
          background: rgba(0, 0, 0, 0.8);
          &:nth-child(1) {
            border-radius: 0 5px 5px 0;
            img {
              transform: rotate(-180deg);
            }
          }
          &:nth-child(2) {
            border-radius: 5px 0 0 5px;
          }
        }
      }
      .add {
        margin-top: 33px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        .input-group {
          label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 16px;
          }
          .calc {
            display: flex;
            align-items: center;
            margin-top: 12px;
            .screen {
              padding: 10px 30px;
              border: 1px solid rgba(255, 255, 255, 0.6);
              margin: 0 10px;
              text-align: center;
              width: 71px;
              font-size: 16px;
            }
            button {
              background: transparent;
              height: 36px;
              border: 0;
              outline: 0;
              display: flex;
              align-items: center;
            }
          }
        }
        .add-btn {
          display: block;
          font-size: 16px;
          text-decoration: none;
          padding: 5px 55px;
          height: 48px;
          background: #27ae60;
          border-radius: 10px;
          transition: 0.1s;
          border: 0;
          outline: 0;
          &:hover {
            background: #279e48;
          }
          &:disabled,
          &[disabled] {
            background: #7fa48e;
          }
        }
      }
      .main {
        max-width: 367px;
        width: 100%;
        margin-top: 20px;

        * {
          outline: 0;
          border: 0;
        }
        .slick-list {
          .slick-track {
            .slick-slide {
              img {
                filter: brightness(30%);
                border-radius: 10px;
                width: 77px;
                height: 77px;
              }
            }
            .slick-current {
              img {
                filter: brightness(100%);
              }
            }
          }
        }
      }
    }
  }
}
</style>