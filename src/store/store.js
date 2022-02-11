import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    change: function (state, data) {
      state.count = data;
    },
  },
  getters: {
    newCount: (state) => state.count + 100,
  },
});
