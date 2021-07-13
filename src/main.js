import Vue from 'vue';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate)
import axios from "axios";
// const axios = require('axios').default;

axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.common["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

createApp(App).use(store).use(router).mount("#app");
