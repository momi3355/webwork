<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="
                  white-space: pre-wrap;
                  border: none;
                  background-color: white;
                "
                >{{ boardInfo.content }}</pre
              >
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info"
                @click="goToUpdateForm(boardInfo.id)"
              >
                수정
              </button>
              <button class="btn btn-xs btn-warning" @click="goToListForm()">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div v-if="comments.length > 0" class="row">
      <ul>
        <li v-for="com in comments">{{ com.content }}</li>
      </ul>
    </div>
    <div v-else class="alert alert-info">댓글이 없습니다. 😥</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      boardInfo: {},
      comments: [],
    };
  },
  methods: {
    async fetchInfo() {
      let board = await axios.get(
        `http://localhost:3000/board/${this.searchNo}`
      );
      this.boardInfo = board.data;
    },
    async fetchComment() {
      let comment = await axios.get(`http://localhost:3000/comment/`);
      this.comments = comment.data.filter((data) => {
        return data.bid === Number(this.searchNo);
      });
    },
    goToUpdateForm(id) {
      this.$router.push({ path: "/boardForm", query: { id: id } });
      //페이지 이동
    },
    goToListForm() {
      this.$router.push({ path: "/boardList" });
      //페이지 이동
    },
  },
  mounted() {
    this.searchNo = this.$route.query.id;
    this.fetchInfo();
    this.fetchComment();
  },
};
</script>
