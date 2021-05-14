<template>
  <button class="text-regular">
    Удалить <img :src="DeleteIcon" alt="" />
  </button>
</template>

<script>
import DeleteIcon from "@/assets/images/dashboard/cancel.svg";

export default {
  data() {
    return {
      DeleteIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background: transparent;
  color: #27ae60;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
  img {
    margin-left: 10px;
  }
}
</style>