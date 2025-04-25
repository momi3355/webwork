<script>
import GoodsView from "./components/Goods.vue";

import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    GoodsView,
  },
  data() {
    return {
      fruits: ["사과", "바나나", "당근", "고구마", "감자"],
      message: "greeting",
    };
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="alert alert-primary" role="alert">
      <h1>Hello App!</h1>
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MyApp</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">홈으로</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/memberForm"
                >회원가입</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/todoList"
                >할일목록</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/empForm"
                >사원정보</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/movieList"
                >영화목록</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/paramView/kim"
                >파라미터</RouterLink
              ><RouterLink class="nav-link active" to="/paramView/park"
                >파라미터</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
