<template>
  <div>
    <Header />
    <section class="wrap">
      <div class="container">
        <arrow-back />
        <h1 class="text-white text-regular">
          Введите данные и прикрепите фото
        </h1>
        <form></form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from '@/components/ArrowBack.vue';
export default {
  name: "UploadDocs",
  components: { Header, Footer, ArrowBack },
  mounted() {
    document.title = "Extra Cinema | Загрузка документов";
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px 0 63px 0;
  .container {
    position: relative;
    .arrow-back {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #999999;
      transition: 0.2s;
      &:hover {
        color: #ffffff;
      }
      img {
        margin-right: 10px;
        transform: translateY(2px);
      }
    }
    h1 {
      margin: auto;
      text-align: center;
      font-size: 24px;
      margin-bottom: 26px;
    }
    form {
      padding: 41px 45px;
      background: #161616;
      max-width: 883px;
      width: 100%;
      margin: auto;
      border-radius: 10px;
    }
  }
}
</style>
