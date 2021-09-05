<template>
  <div class="documents-wrap bg-black">
    <Header />
    <div class="container">
      <arrow-back />
      <title-decor text="Отчеты и документы" :img="TitleIcon" />
      <div class="toggler">
        <h3 class="h3 text-white text-semi-bold">ЗАПРОСИТЬ:</h3>
        <div class="buttons">
          <button
            @click="currentTab = 'Finance'; showFormItem = false"
            class="p-xs text-gray text-semi-bold"
            :class="{active: currentTab === 'Finance'}"
          >
            Финансовый отчет
            <svg1 />
          </button>
          <button
            @click="currentTab = 'Agreement'; showFormItem = false"
            class="p-xs text-gray text-semi-bold"
            :class="{active: currentTab === 'Agreement'}"
          >
            Договор на размещение контента
            <svg2 />
          </button>
          <button
            @click="currentTab = 'Delete'; showFormItem = false"
            class="p-xs text-gray text-semi-bold"
            :class="{active: currentTab === 'Delete'}"
          >
            Заявление на ликвидацию контента
            <svg3 />
          </button>
          <button
            @click="currentTab = 'Other'; showFormItem = false"
            class="p-xs text-gray text-semi-bold"
            :class="{active: currentTab === 'Other'}"
          >
            Иной документ
            <svg4 />
          </button>
        </div>
      </div>
      <div class="row">
        <form @submit.prevent>
          <component :is="currentTab" @onRequest="requestHandler" />
          <div v-if="showFormItem" class="form-item">
            <div class="heading">
              <img src="@/assets/images/documents/pdf.svg" alt="Отчет по фильму " />
              <span class="text-white text-regular p-sm">
                {{title}}
                <span v-for="(film, idx) in films" :key="idx">{{film}},</span>
              </span>
            </div>
            <div class="buttons">
              <div class="email">
                <button class="p-sm text-semi-bold">
                  <img src="@/assets/images/documents/mail.svg" />
                  Отправить на почту
                </button>
                <span class="text-regular">Файл отправится на почту, указанную при регистрации</span>
              </div>
              <button class="p-sm text-semi-bold">
                <img src="@/assets/images/documents/print.svg" />
                Распечатать
              </button>
            </div>
            <div class="input">
              <span class="p-sm text-white text-regular">Отправить на другую почту</span>
              <input
                v-model="$v.email.$model"
                type="text"
                class="p-xs text-white text-regular"
                placeholder="Введите электронный адрес"
              />
            </div>
            <Btn text="Отправить" fluid :disabled="$v.email.$error || !$v.email.$model" />
          </div>
        </form>
      </div>
      <btn-group />
    </div>
    <Footer />
  </div>
</template>

<script>
import BtnGroup from "@/components/BtnGroup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";
import TitleDecor from "@/components/TitleDecor";
import Finance from "@/components/documents/Finance";
import Agreement from "@/components/documents/Agreement";
import Delete from "@/components/documents/Delete";
import Other from "@/components/documents/Other";
import Btn from "@/components/Btn";

import { required, email } from "vuelidate/lib/validators";

import svg1 from "@/assets/images/documents/report.vue";
import svg2 from "@/assets/images/documents/agreement.vue";
import svg3 from "@/assets/images/documents/delete.vue";
import svg4 from "@/assets/images/documents/other.vue";

import TitleIcon from "@/assets/images/for-holders-page/carousel/item4.svg";

export default {
  data: () => ({
    currentTab: "Finance",
    films: [],
    email: null,
    showFormItem: false,
    title: "",
    TitleIcon,
  }),
  components: {
    BtnGroup,
    Header,
    Footer,
    Btn,
    ArrowBack,
    TitleDecor,
    Finance,
    Agreement,
    Delete,
    Other,
    svg1,
    svg2,
    svg3,
    svg4,
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    requestHandler(films, title) {
      this.films = films;
      this.title = title;
      this.showFormItem = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.documents-wrap {
  .container {
    position: relative;
    padding: 90px 15px 120px 15px;
    .toggler {
      margin-top: 66px;
      .buttons {
        margin-top: 20px;
        display: flex;
        button {
          background: transparent;
          border: 1px solid #7c7c7c;
          display: flex;
          align-items: center;
          padding: 17px 23px;
          cursor: pointer;
          transition: 0.2s;
          svg {
            margin-left: 10px;
            fill: #7c7c7c;
            transition: 0.2s;
          }
        }
        .active {
          color: #ffffff;
          border: 1px solid #ffffff;
          svg {
            fill: #d8004e !important;
          }
        }
      }
    }
    .row {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      form {
        background: #212121;
        padding: 50px 67px;
        border-radius: 22px;
        max-width: 870px;
        width: 100%;
        .form-item {
          margin-top: 46px;
          padding-top: 46px;
          border-top: 1px solid #7c7c7c;
          .heading {
            display: flex;
            align-items: center;
            img {
              margin-right: 10px;
            }
            span {
              text-decoration: underline;
            }
          }
          .buttons {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .email {
              display: flex;
              align-items: center;
              span {
                margin-left: 15px;
                max-width: 256px;
                width: 100%;
                color: #828282;
                font-size: 12px;
              }
            }
            button {
              padding: 16px;
              border: 3px solid #27ae60;
              border-radius: 10px;
              color: #27ae60;
              background: transparent;
              display: flex;
              align-items: center;
              transition: 0.2s;
              &:hover {
                color: #ffffff;
                border: 3px solid #ffffff;
                img {
                  filter: brightness(1000%) !important;
                }
              }
              img {
                margin-right: 10px;
                transition: 0.2s;
              }
            }
          }
          .input {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            input {
              margin-top: 15px;
              background: transparent;
              border: 1px solid #ffffff;
              outline: 0;
              border-radius: 10px;
              height: 35px;
              width: 100%;
              padding: 0 15px;
            }
          }
          .btn {
            margin-top: 50px;
          }
        }
      }
    }
  }
}
</style>