<template>
  <div class="carousel">
    <div class="row">
      <!-- main carouse; -->
      <VueSlickCarousel
        v-bind="settings"
      >
        <div v-for="(item, idx) in items" :key="idx">
          <img :src="item" alt="">
        </div>
      </VueSlickCarousel>
      <div class="info">
        <h3 class="text-white text-semi-bold">Кинопроектор EIKI EK-Cinema</h3>
        <!-- carousel -->
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
      items: [Slide, Slide, Slide, Slide, Slide],
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 1
      }
    };
  },
  mounted() {
    // this.$nextTick(this.$forceUpdate);
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  padding-bottom: 46px;
  margin-bottom: 46px;
  border-bottom: 1px solid #444444;
  .row {
    display: flex;
    .c1 {
      max-width: 400px;
      .slick-slider {
        max-width: 224px !important;
      }
    }
    .info {
      h3 {
        font-size: 18px;
      }
    }
  }
}
</style>