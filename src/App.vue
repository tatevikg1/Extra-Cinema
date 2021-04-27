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
/* width */
*::-webkit-scrollbar {
  width: 4px;
  border-radius: 15px;
  margin-right: 20px;
  transform: translateX(20px);
}

/* Track */
*::-webkit-scrollbar-track {
  background: #1d1d1d;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background: #a1a1a1;
  border-radius: 15px;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #858585;
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
  transition: 0.5s;
  transform: translateX(0);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.modal-enter-active,
.modal-leave-active {
  transition: .2s;
  opacity: 1;
  height: 42px;
}
.dropdown-enter,
.dropdown-leave-to {
  height: 0;
  opacity: 0;
}
</style>
