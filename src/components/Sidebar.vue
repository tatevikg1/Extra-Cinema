<template>
  <ul class="sidebar">
    <li v-for="(item, idx) in menuItems" :key="idx">
      <router-link :to="item.url" exact-active-class="active">
        <div class="icon">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <span class="text-white text-regular">{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import item1 from "@/assets/images/dashboard/item1.svg";
import item2 from "@/assets/images/dashboard/item2.svg";
import item3 from "@/assets/images/dashboard/item3.svg";
import item4 from "@/assets/images/dashboard/item4.svg";
import item5 from "@/assets/images/dashboard/item5.svg";
import item6 from "@/assets/images/dashboard/item6.svg";
import item7 from "@/assets/images/dashboard/item7.svg";
import item8 from "@/assets/images/dashboard/item8.svg";

export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          name: "Личный кабинет",
          url: "/cinema/dashboard",
          imgUrl: item1,
        },
        {
          name: "Название компании",
          url: "/",
          imgUrl: item2,
        },
        {
          name: "Серийный номер проектора",
          url: "/",
          imgUrl: item3,
        },
        {
          name: "Мои кинозалы",
          url: "/",
          imgUrl: item4,
        },
        {
          name: "Ответственные лица",
          url: "/",
          imgUrl: item5,
        },
        {
          name: "Начать сеанс",
          url: "/",
          imgUrl: item6,
        },
        {
          name: "Документы ЕАИС",
          url: "/",
          imgUrl: item7,
        },
        {
          name: "Вывод средств",
          url: "/",
          imgUrl: item8,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #000000;
  border-right: 0.5px solid #777777;
  * {
    transition: 0.2s;
  }
  li {
    padding: 19px 32px 19px 32px;
    border-bottom: 0.5px solid #777777;
    &:hover {
      a {
        .icon {
          background: #ffffff;
          img {
            filter: brightness(0);
          }
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      .icon {
        min-width: 40px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        margin-right: 12px;
      }
      span {
        font-size: 16px;
      }
    }
    .active {
      .icon {
        background: #ffffff;
        img {
          filter: brightness(0);
        }
      }
      span {
        font-family: "SemiBold";
      }
    }
  }
}
</style>