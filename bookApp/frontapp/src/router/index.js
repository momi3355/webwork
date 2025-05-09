import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "bookInfo",
      component: () => import("@/views/bookList.vue"),
    },
    {
      path: "/bookdetail",
      name: "bookDetail",
      component: () => import("@/views/bookDetail.vue"),
    },
    {
      path: "/bookform",
      name: "bookAddForm",
      component: () => import("@/views/bookForm.vue"),
    },
  ],
});

export default router;
