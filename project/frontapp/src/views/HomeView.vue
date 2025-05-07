<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="container">
      count: {{ $store.state.count }} loginYn{{ $store.state.loginYn }}
      <hr />
      <TheWelcome />
    </div>
  </main>
</template>
