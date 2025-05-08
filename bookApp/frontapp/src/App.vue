<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->
  <!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
  <div class="container">
    <header><h1>도서 구매 사이트</h1></header>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link active" to="/">홈으로</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link active" to="/book">도서</RouterLink>
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
