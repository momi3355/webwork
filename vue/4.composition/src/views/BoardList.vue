<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(board, i) in boardList"
          :key="board.id"
          @click="goToDetail(board.id)"
        >
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ dateForment(board.created_date) }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-xs btn-info" @click="addButton">
      추가
    </button>
  </div>
  {{ route.fullPath }}
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { dateForment } from "@/module/date";

const router = useRouter(); //라우터
const route = useRoute(); //라우트
const boardList = ref([]);

const getBoardList = async () => {
  let result = await axios.get("/api/board");
  boardList.value = result.data;
};
const goToDetail = async (id) => {
  router.push({ path: "/boardInfo", query: { id: id } });
  //this$router.push({ path: "/boardInfo", query: { id: id } });
};

getBoardList();
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
