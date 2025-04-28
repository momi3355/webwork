import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
//import NestedComponent from "@/views/NestedComponent.vue";
//최초 1번 main에서 실행

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      //페이지를 열때 import 실행
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/nested",
      name: "nested",
      component: () => import("@/views/NestedComponent.vue"),
    },
  ],
});

export default router;
