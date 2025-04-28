<template>
  <div class="alert alert-warning">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
  data() {},
  methods: {},
};
</script>
