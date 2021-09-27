import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Vuelidate from "vuelidate";
import store from './store'
Vue.use(Vuelidate);
Vue.prototype.$axios = axios;
const token = localStorage.getItem("Token");
console.log(token);
axios.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  },
  (error) => Promise.reject(error)
);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  store: store,
  router,
}).$mount("#app");
