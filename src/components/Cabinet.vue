<template>
  <div class="cab-wrap text-white">
    <div class="buttons">
      <button @click="currentView = 'createSession'">Создать сеанс</button>
      <button @click="currentView = 'lastSessions'">Прошлые сеансы</button>
      <button @click="currentView = 'currentSession'">Действующий сеанс</button>
    </div>
    <div class="form">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "Cabinet",
  data() {
    return {
      currentView: "createSession",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>