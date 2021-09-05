<template>
  <div class="myfilms-empty-wrap">
    <Header />
    <div class="wrap bg-black">
      <div class="container">
        <arrow-back />
        <title-decor text="Мои фильмы" :img="Icon" />
        <div class="row">
          <div class="laptop">
            <router-link :to="{name: 'ec-upload'}" class="h1 text-red text-bold">ЗАГРУЗИТЬ ФИЛЬМ?</router-link>
          </div>
        </div>
        <btn-group />
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import BtnGroup from "@/components/BtnGroup";
import TitleDecor from "@/components/TitleDecor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";

import Icon from "@/assets/images/for-holders-page/carousel/item3.svg";

export default {
  data: () => ({ Icon }),
  components: { BtnGroup, TitleDecor, Header, Footer, ArrowBack },
};
</script>

<style lang="scss" scoped>
.myfilms-empty-wrap {
  .container {
    position: relative;
    padding: 87px 15px 121px 15px;
    .row {
      margin-top: 92px;

      .laptop {
        width: 100%;
        height: 403px;
        background: url("../../assets/images/my-films/bg1.svg") no-repeat center;
        background-size: contain;
        transform: translateX(-64px);
        display: flex;
        justify-content: center;
        a {
          text-align: center;
          // position: absolute;
          // top: 50px;
          // left: 50%;
          transform: translateX(64px);
          height: 59px;
          z-index: 10;
          padding: 10px 25px;
          background: #ffffff;
          position: relative;
          &::before {
            content: "";
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-right: 20px solid #ffffff;
            border-bottom: 29px solid transparent;
            position: absolute;
            top: 0;
            left: -20px;
          }
          &::after {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #d8004e;
            filter: blur(3px);
            margin: 0 12px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -35px;
          }
        }
      }
    }
    .buttons {
      margin-top: 100px;
    }
  }
}
</style>