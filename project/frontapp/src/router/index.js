import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/boardList",
      name: "boardList",
      component: () => import("@/views/BoardList.vue"),
    },
    {
      path: "/boardForm",
      name: "boardForm",
      component: () => import("@/views/BoardForm.vue"),
    },
    {
      path: "/boardInfo",
      //param으로 전달 하면"/boardInfo/:id"로 하면 된다.
      // 하지만 쿼리로 전달하기 때문에 적지 않아도 된다.
      name: "boardInfo",
      component: () => import("@/views/BoardInfo.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/loginView.vue"),
    },
  ],
});

export default router;
