<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
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
          <td>{{ this.date(board.created_date) }}</td>
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-xs btn-info" @click="addButton">
      추가
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { dateForment } from "@/module/date";

export default {
  data() {
    return {
      boardList: [],
    };
  },
  methods: {
    date(created_date) {
      return dateForment(created_date);
    },
    fetchList() {
      axios
        .get(`/api/board`)
        .then((response) => (this.boardList = response.data));
      //then으로 하지않고 동기적 처리가 가능하다.
      //let result = await axios.get(`/api/board`);
      //this.boardList = result.data;
    },
    goToDetail(id) {
      this.$router.push({ path: "/boardInfo", query: { id: id } });
      //페이지 이동
    },
    addButton() {
      this.$router.push({ path: "/boardForm" });
    },
  },
  mounted() {
    this.fetchList();
  },
};
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
