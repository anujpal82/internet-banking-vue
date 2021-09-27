import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import VuexPersist from "vuex-persist";
const vuexPersist = new VuexPersist({
  key: "vue-router-course",
  storage: window.localStorage,
});
const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    accountNo: "",
  },
  getters: {
    getAllVideoCources(state) {
      return state.videoCorces;
    },
  },
  mutations: {
    setAccountNo(state, data) {
    //   console.log(data);
    //   state.cources.push(data);
    //   console.log(state.cources);
    console.log(state);
    state.accountNo=data
    },
  },
});

export default store;
