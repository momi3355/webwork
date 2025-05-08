<template>
  <div v-if="book" class="bookdetail-container">
    <div class="book-container">
      <img :src="book.image" :alt="book.title" />
      <div class="bookInfo">
        <ul>
          <li><b>책 제목</b></li>
          <li>{{ book.title }}</li>
        </ul>
        <ul>
          <li><b>부제</b></li>
          <li>{{ book.description }}</li>
        </ul>
        <ul>
          <li><b>출판사</b></li>
          <li>{{ book.publish }}</li>
        </ul>
        <ul>
          <li><b>ISBN</b></li>
          <li>{{ book.isbn }}</li>
        </ul>
        <ul>
          <li><b>작가</b></li>
          <li>{{ book.writer }}</li>
        </ul>
        <ul>
          <li><b>가격</b></li>
          <li>{{ book.price + "원" }}</li>
        </ul>
      </div>
    </div>
    <div class="btn-container">
      <button class="btn btn-primary" @click="gotoList()">목록으로</button>
      <button class="btn btn-primary" @click="gotoForm(book.id)">수정</button>
    </div>
  </div>
  <div v-else class="book-container">찾을 수 없는 췍 😥</div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const book = ref({});

const gotoList = () => {
  router.push({ path: "/book" });
};
const gotoForm = (id) => {
  router.push({ path: "/bookform", query: { id: id } });
};

onBeforeMount(async () => {
  const id = route.query.id;
  const result = await axios.get(`/api/bookinfo/${id}`);
  book.value = result.data[0];
});
</script>

<style>
.book-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.book-container img {
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bookInfo {
  flex: 1;
  padding: 30px 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.bookInfo > ul {
  list-style: none;
}

.btn-container {
  margin: 20px;
  text-align: center;
}

.btn-container > button {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
