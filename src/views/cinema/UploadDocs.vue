<template>
  <div>
    <Header />
    <section class="wrap">
      <div class="container">
        <router-link
          :to="{ name: 'for-halls' }"
          class="text-white text-regular arrow-back"
          ><img
            src="../../assets/images/cinema-for-halls-page/arrow_back.svg"
            alt="Назад"
          />
          Вернуться назад</router-link
        >
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
export default {
  name: "UploadDocs",
  components: { Header, Footer },
  mounted() {
    document.title = "Extra Cinema | Загрузка документов";
  },
  data() {
    return {
      items: {
        simple: [
          { name: "Название юр. лица", input: "Введите название", docs: false },
          { name: "Уставные документы", input: "Прикрепите документы", docs: true },
          { name: "Населенный пункт", input: "Ваш населенный пункт", docs: false },
        ],
        
      },
    };
  },
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
