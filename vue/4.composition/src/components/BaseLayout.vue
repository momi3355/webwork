<template>
  <!-- components/BaseLayout.vue -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>

  <main>
    <slot></slot>
  </main>
  
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>
