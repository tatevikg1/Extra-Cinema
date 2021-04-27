<template>
  <router-link :to="{ name: href }" class="text-white text-regular arrow-back"
    ><img
      src="../assets/images/cinema-for-halls-page/arrow_back.svg"
      alt="Назад"
    />
    Вернуться назад</router-link
  >
</template>

<script>
export default {
  name: "ArrowBack",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-back {
  position: absolute;
  top: 11px;
  left: 15px;
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
</style>