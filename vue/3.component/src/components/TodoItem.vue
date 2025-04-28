<template>
  <li>
    {{ text }}
    <button @click="removeTodo(id)">X</button>
  </li>
</template>

<script>
export default {
  props: ["id", "text"],
  data() {
    return {};
  },
  methods: {
    removeTodo(id) {
      //TODO : 이곳부터
    },
  },
};
</script>
