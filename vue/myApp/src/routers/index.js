import { createMemoryHistory, createRouter } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import MemberForm from "../views/MemberForm.vue";
import TodoList from "@/views/TodoList.vue";
import MovieList from "@/views/MovieList.vue";
import ParamView from "@/views/ParamView.vue";
import EmpView from "@/views/EmpView.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/memberForm", component: MemberForm },
  { path: "/todoList", component: TodoList },
  { path: "/empView", component: EmpView },
  { path: "/movieList", component: MovieList },
  { path: "/ParamView/:userName", component: ParamView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
