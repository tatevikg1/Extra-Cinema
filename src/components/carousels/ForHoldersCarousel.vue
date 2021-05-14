<template>
  <div class="wrap">
    <VueSlickCarousel
      ref="c1"
      :focusOnSelect="true"
      :slidesToShow="4"
      :arrows="false"
      class="main"
    >
      <router-link
        v-for="(item, idx) in items"
        :key="idx"
        :to="item.url"
        class="item"
      >
        <div class="image">
          <img :src="item.img" alt="" />
        </div>
        <div class="line"></div>
        <h3 class="text-white text-semi-bold">{{ item.title }}</h3>
      </router-link>
    </VueSlickCarousel>
    <div @click="$refs.c1.prev()" class="prev">
      <img :src="ArrowIcon" alt="" />
    </div>
    <div @click="$refs.c1.next()" class="next">
      <img :src="ArrowIcon" alt="" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import ArrowIcon from "@/assets/images/for-holders-page/carousel/arrow.svg";

import item1 from "@/assets/images/for-holders-page/carousel/item1.svg";
import item2 from "@/assets/images/for-holders-page/carousel/item2.svg";
import item3 from "@/assets/images/for-holders-page/carousel/item3.svg";
import item4 from "@/assets/images/for-holders-page/carousel/item4.svg";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      ArrowIcon,
      items: [
        { img: item1, title: "Рейтинг Extracinema", url: "/" },
        { img: item2, title: "Сегодня в прокате", url: "/" },
        { img: item3, title: "Мои фильмы", url: "/" },
        { img: item4, title: "Отчеты и документы", url: "/" },

        { img: item1, title: "Рейтинг Extracinema", url: "/" },
        { img: item2, title: "Сегодня в прокате", url: "/" },
        { img: item3, title: "Мои фильмы", url: "/" },
        { img: item4, title: "Отчеты и документы", url: "/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  .main {
    margin-top: 100px;
    a {
      max-width: 266px;
      width: 100%;
      margin: 0 10px; //hack
      height: 198px;
      background: #000000;
      border: 1px solid #ffffff;
      border-radius: 10px;
      padding: 25px 10px 25px 10px;
      outline: 0;
      text-align: center;
      transition: 0.2s;
      text-decoration: none;
      &:hover {
        background: #181818;
        border: 1px solid #181818;
      }
      .image {
        height: 66px;
        display: flex;
        align-items: center;
        img {
          margin: auto;
        }
      }
      .line {
        width: 75px;
        height: 7px;
        background: #d8004e;
        margin: 26px auto;
      }
      h3 {
        font-size: 16px;
      }
    }
  }
  .prev,
  .next {
    width: 42px;
    height: 42px;
    position: absolute;
    top: calc(50% - 21px);
    &:hover {
      img {
        filter: brightness(50%);
      }
    }
    img {
      width: 100%;
      height: 100%;
      transition: 0.2s;
    }
  }
  .prev {
    transform: rotate(180deg);
    left: 11px;
  }
  .next {
    right: 9px;
  }
}
</style>