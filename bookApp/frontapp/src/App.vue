<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <header><h1>도서 구매 사이트</h1></header>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link active" to="/">도서</RouterLink>
      </li>
    </ul>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  margin: 50px 0;
}
</style>
