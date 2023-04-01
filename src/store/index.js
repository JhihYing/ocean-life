import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: true, // header 導覽列

    headerIsSohow: true,
    footerIsSohow: true,
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },

    getHeaderIsSohow(state) {
      return state.headerIsSohow;
    },
    getFooterIsSohow(state) {
      return state.footerIsSohow;
    },
  },
  mutations: {
    headerIsSohowState(state) {
      state.headerIsSohow = false;
    },

    footerIsSohowState(state) {
      state.footerIsSohow = false;
    },
  },
  actions: {
    headerIsSohow(context) {
      context.commit("headerIsSohowState");
    },

    footerIsSohow(context) {
      context.commit("footerIsSohowState");
    },
  },
  modules: {},
});
