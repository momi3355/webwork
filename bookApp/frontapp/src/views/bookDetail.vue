<template>
  <div v-if="book" class="bookdetail-container">
    <div class="book-container">
      <img :src="getImagesrc" :alt="book.title" />
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
      <button class="btn btn-warning" @click="gotoForm(book.id)">수정</button>
      <button class="btn btn-danger" @click="deleteBookHeadler(book.id)">
        삭제
      </button>
    </div>
  </div>
  <div v-else class="book-container">찾을 수 없는 췍 😥</div>
</template>

<script setup>
import axios from "axios";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const book = ref({});

const getImagesrc = computed(() => {
  let src = book.value.image;
  return src ? `/api/${book.value.image}` : "#";
});

const gotoList = () => {
  router.push({ path: "/" });
};
const gotoForm = (id) => {
  router.push({ path: "/bookform", query: { id: id } });
};
const deleteBookHeadler = async (id) => {
  if (confirm("해당 도서정보를 삭제 하시겠습니까?")) {
    const result = await axios.delete(`/api/bookinfo/${id}`);
    console.log(result.data);
    alert("성공적으로 삭제가 되었습니다.");
    router.push({ path: "/" });
  }
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
  height: 450px;
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
