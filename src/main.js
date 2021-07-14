
import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import useValidate from "@vuelidate/core";
const app = createApp(App);
// import Vue from 'vue';
// import { useVuelidate } from '@vuelidate/core'

// app.use(useVuelidate)
// import axios from "axios";

// // const axios = require('axios').default;

// axios.interceptors.request.use(
//     config => {
//       const token = localStorage.getItem("access_token");
//       if (token) {
//         config.headers.common["Authorization"] = 'Bearer ' + token;
//       }
//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );
app.use(store)
app.use(router)
// app.use(useValidate)

app.mount("#app")

//createApp(App).use(store).use(router).mount("#app");
