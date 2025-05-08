<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">작가</th>
        <th scope="col">제목</th>
        <th scope="col">출판사</th>
        <th scope="col">가격</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id" @click="goToDetail(book.id)">
        <td scope="col">{{ book.id }}</td>
        <td scope="col">{{ book.writer }}</td>
        <td scope="col">{{ book.title }}</td>
        <td scope="col">{{ book.publish }}</td>
        <td scope="col">{{ book.price + "원" }}</td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-warning" @click="goToForm">추가</button>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const books = ref([]);

const goToForm = () => {
  router.push({ path: "/bookform" });
};
const goToDetail = (id) => {
  router.push({ path: "/bookdetail", query: { id: id } });
};

onBeforeMount(async () => {
  const result = await axios.get("/api/bookinfo");
  books.value = result.data;
});
</script>
