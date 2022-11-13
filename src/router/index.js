import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  _routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  get routes() {
    return this._routes;
  },
  set routes(value) {
    this._routes = value;
  },
});

export default router;
