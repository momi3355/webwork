<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="id" readonly v-model="book.id" />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="book.title" />

      <label for="description">부제</label>
      <input type="text" id="description" v-model="book.description" />

      <label for="writer">작가</label>
      <input type="text" id="writer" v-model="book.writer" />

      <label for="isbn">ISBN</label>
      <input type="text" id="isbn" v-model="book.isbn" />

      <label for="price">가격</label>
      <input type="text" id="price" v-model="book.price" />

      <label for="image">이미지 URL</label>
      <input type="text" id="image" v-model="book.image" />

      <label for="created_date">작성일자</label>
      <input
        type="text"
        id="created_date"
        readonly
        v-model="book.created_date"
      />

      <button type="button" class="btn btn-xs btn-info">저장</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const book = ref({});

onBeforeMount(async () => {
  const id = route.query.id;
  if (id) {
    const result = await axios.get(`/api/bookinfo/${id}`);
    book.value = result.data[0];
  }
});
</script>

<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
