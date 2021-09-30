import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || ''
  },
  mutations: {
    setAuthToken(state, token) {
      var object = { value: token, timestamp: new Date().getTime() }
      localStorage.setItem("user-token", JSON.stringify(object));
      state.token = token;
    },
    deleteAuthToken(state) {
      state.token = '';
      localStorage.removeItem("user-token");
    }
  },
  getters: {
    getAuthToken(state) {
      if (state.token) {
        var object = JSON.parse(localStorage.getItem("user-token")),
          dateString = object.timestamp,
          now = new Date().getTime().toString();
        // delete token after 2 weeks
        if ((now - dateString) < 60 * 60 * 60 * 24 * 7) {
          return object.value;
        };
        state.token = '';
        localStorage.removeItem("user-token");
      }
      return null;
    }
  },
  actions: {},
  modules: {},
});
