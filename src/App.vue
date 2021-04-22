<template>
  <div id="app">
    <transition name="urlChanged" mode="out-in">
      <router-view>
        <home />
      </router-view>
    </transition>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "app",
  components: { Home },
};
</script>

<style lang="scss">
#app {
  background: #000000;
}
.urlChanged-enter-active,
.urlChanged-leave-active {
  transition: opacity 0.3s;
}
.urlChanged-enter,
.urlChanged-leave-to {
  opacity: 0;
}


.slide-enter-active,
.slide-leave-active {
  transition:  .5s;
  transform: translateX(0);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
