<script>
import TodoItem from "@/components/TodoItem.vue";
// 각 할 일에 고유한 ID 부여
let id = 0;

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todos: [
        { id: id++, text: "HTML 배우기" },
        { id: id++, text: "JavaScript 배우기" },
        { id: id++, text: "Vue 배우기" },
      ],
    };
  },
  methods: {
    addTodo() {
      // ...
      this.newTodo = "";
    },
    removeTodo(todo) {
      // ...
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />
    <button>할 일 추가</button>
  </form>
  <ul>
    <todo-item v-for="todo in todos" v-bind="todo" />
  </ul>
</template>
