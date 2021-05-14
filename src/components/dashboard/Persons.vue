<template>
  <div class="form">
    <div v-for="(hall, idx) in halls" :key="idx" class="item">
      <h3 class="text-white text-semi-bold">{{ hall.title }}</h3>
      <add-btn
        @click.native="$emit('onEdit')"
        text="Добавить ответственное лицо"
      />
      <div class="scroll-wrap">
        <ul class="scroll">
          <li
            v-for="(person, idx) in hall.people"
            :key="idx"
            class="text-regular"
          >
            <div class="person">
              <span>{{ person.role }}</span>
              <span
                >{{ person.name }},
                <router-link to="/" class="text-regular-italic"
                  >паспорт</router-link
                ></span
              >
            </div>
            <delete-btn @click.native="deleteHandler(person)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AddBtn from "@/components/AddBtn";
import DeleteBtn from "@/components/DeleteBtn";
export default {
  components: { AddBtn, DeleteBtn },
  data() {
    return {
      halls: [
        {
          title: "ООО «Мой кинозал №1»",
          people: [
            { role: "Бухгалтер:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Бухгалтер:", name: "Кукушкина Е.И.", passport: "/asd" },
            { role: "Бухгалтер:", name: "Петрова В.А.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
          ],
        },
        {
          title: "ООО «Мой кинозал №2»",
          people: [
            { role: "Бухгалтер:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Бухгалтер:", name: "Кукушкина Е.И.", passport: "/asd" },
            { role: "Бухгалтер:", name: "Петрова В.А.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
            { role: "Кассир:", name: "Иванова А.В.", passport: "/asd" },
          ],
        },
      ],
    };
  },
  methods: {
    deleteHandler(person) {
      this.halls.forEach((hall) => {
        hall.people = hall.people.filter((el) => el !== person);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 53px 72px 65px 72px;
  background: #161616;
  border-radius: 10px;
  margin: 122px auto 65px auto;
  max-width: 871px;
  width: 100%;
  .item {
    padding: 34px 0;
    border-bottom: 1px solid #777777;
    &:first-child {
      padding: 0 0 34px 0;
    }
    &:last-child {
      padding: 34px 0 0 0;
      border-bottom: 0;
    }
    .addBtn {
      margin-top: 23px;
    }
    .scroll-wrap {
      padding: 13px 16px;
      background: #1c1c1c;
      border-radius: 6px;
      margin-top: 24px;
      .scroll {
        max-height: 140px;
        height: 100%;
        overflow-y: scroll;
        padding-right: 28px;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          .person {
            display: flex;
            color: #9a9a9a;
            font-size: 16px;
            max-width: 400px;
            width: 100%;
            display: flex;
            align-items: center;
            span:nth-child(1) {
              min-width: 90px;
            }
            span:nth-child(2) {
              margin-left: 60px;
              a {
                color: #27ae60;
              }
            }
          }
        }
      }
    }
  }
}
</style>