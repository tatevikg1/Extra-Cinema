<template>
  <div class="form">
    <div class="scroll-wrap">
      <div v-for="(item, idx) in items" :key="idx" class="item">
        <div class="row">
          <h3 class="name text-white text-semi-bold">{{ item.title }}</h3>
          <div class="buttons">
            <edit-btn
              @click.native="$emit('onEdit')"
              :show-text="showBtnText"
            />
            <delete-btn
              @click.native="deleteHandler(item)"
              :show-text="showBtnText"
            />
          </div>
        </div>
        <div class="row">
          <p class="subtitle text-regular">Адрес:</p>
          <p class="content text-regular">{{ item.adress }}</p>
        </div>
        <div class="row">
          <p class="subtitle text-regular">Описание зала:</p>
          <div v-html="item.desc" class="content text-regular"></div>
        </div>
      </div>
    </div>
    <add-btn @click.native="formActive = !formActive" text="Добавить Кинозал" />
    <div v-if="formActive" class="add-form">
      <p class="text-medium text-white">
        ТУТ ДОЛЖНА БЫТЬ ФОРМА, НО ЕЕ ПОКА НЕТ
      </p>
      <Btn text="Добавить" fluid />
    </div>
  </div>
</template>

<script>
import AddBtn from "@/components/AddBtn";
import Btn from "@/components/Btn";
import DeleteBtn from "@/components/DeleteBtn";
import EditBtn from "@/components/EditBtn";

export default {
  components: { AddBtn, Btn, DeleteBtn, EditBtn },
  data() {
    return {
      formActive: false,
      showBtnText: true,
      items: [
        {
          title: "ООО «Мой кинозал №1»",
          adress: "г. Тула, ул Металлургов, 100",
          desc:
            "<p>Характеристики помещения:Ширина - 10 м | Длина -  8 м | Высота - 3 м </p><p>Количество посадочных мест - 100</p><p>Звуковое оборудование: название 1, название 2, название 3.</p><p>Размер экрана: Ширина - 3 м, длина - 10 м</p><p>Фото зала с 4-х ракурсов: <span>Фото</span></p>",
        },
        {
          title: "ООО «Мой кинозал №2»",
          adress: "г. Тула, ул Металлургов, 100",
          desc:
            "<p>Характеристики помещения:Ширина - 10 м | Длина -  8 м | Высота - 3 м </p><p>Количество посадочных мест - 100</p><p>Звуковое оборудование: название 1, название 2, название 3.</p><p>Размер экрана: Ширина - 3 м, длина - 10 м</p><p>Фото зала с 4-х ракурсов: <span>Фото</span></p>",
        },
        {
          title: "ООО «Мой кинозал №3»",
          adress: "г. Тула, ул Металлургов, 100",
          desc:
            "<p>Характеристики помещения:Ширина - 10 м | Длина -  8 м | Высота - 3 м </p><p>Количество посадочных мест - 100</p><p>Звуковое оборудование: название 1, название 2, название 3.</p><p>Размер экрана: Ширина - 3 м, длина - 10 м</p><p>Фото зала с 4-х ракурсов: <span>Фото</span></p>",
        },
      ],
    };
  },
  methods: {
    deleteHandler(item) {
      this.items = this.items.filter((el) => el !== item);
    },
  },
  mounted() {
    if (window.screen.width <= 834) {
      this.showBtnText = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 53px 74px 76px 74px;
  margin: 122px auto 66px auto;
  border-radius: 10px;
  max-width: 871px;
  width: 100%;
  background: #161616;
  .scroll-wrap {
    max-height: 607px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 41px;
    .item {
      padding: 50px 0;
      border-bottom: 1px solid #464646;
      &:first-child {
        padding: 0 0 50px 0;
      }
      &:last-child {
        padding: 50px 0 0 0;
        border-bottom: 0;
      }
      .row {
        display: flex;
        &:nth-child(1) {
          justify-content: space-between;
          align-items: center;
          .buttons {
            display: flex;
            align-items: center;
            button {
              &:nth-child(2) {
                margin-left: 32px;
              }
            }
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 25px;
          .subtitle {
            min-width: 166px;
            color: #9a9a9a;
            font-size: 16px;
          }
          .content {
            max-width: 358px;
            color: #9a9a9a;
            font-size: 16px;
            p {
              span {
                color: #ffffff !important;
              }
            }
          }
        }
      }
    }
  }
  .add-form {
    margin-top: 40px;
    .btn {
      margin-top: 40px;
    }
  }
  .addBtn {
    margin-top: 67px;
  }
}
@media screen and (max-width: 834px) {
  .form {
    padding: 41px 37px 49px 37px;
    margin: 122px auto 66px auto;
    .scroll-wrap {
      .item {
        .row:nth-child(2),
        .row:nth-child(3) {
          flex-wrap: wrap;
          .subtitle {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .form {
    background: transparent;
    padding: 0;
    margin: 88px auto 47px auto;
    .scroll-wrap {
      padding-right: 20px;
      .item {
        .row:nth-child(2),
        .row:nth-child(3) {
          flex-wrap: wrap;
        }
      }
    }
    .addBtn {
      margin-top: 50px;
    }
  }
}
</style>

<style lang="scss">
//Here I created not scoped styles, because its impossible to manage v-html under scoped styles (vue bug)
.content {
  p {
    margin-top: 17px;
    &:nth-child(1) {
      margin-top: 0;
    }
    span {
      color: #27ae60;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>