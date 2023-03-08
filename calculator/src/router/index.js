import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/calculator",
    name: "calculator",
    component: HomeView,
  },
  {
    path: "/contactform",
    name: "contactform",

    component: () =>
      import(/* webpackChunkName: "contactform" */ "../views/FormView.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
