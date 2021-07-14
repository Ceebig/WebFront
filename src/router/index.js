import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Guest from "../Guest.vue";
import Auth from "../Auth.vue";
// import Auth from "../Auth.vue";

const routes = [
  {
    path: '/',
    component: Auth,
    children: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        }
    ]
  },
  {
    path: '/',
    component: Guest,
    children: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
          path: "/register",
          name: "Register",
          component: () =>
          import("../views/Register.vue"),
        }
    ]
  },
  
  // {
  //   path: '/',
  //   component: Auth,
  //   children: [
  //       {
  //           path: '/shop',
  //           name: 'Shop',
  //           component: Shop,
  //       }
  //   ]
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
