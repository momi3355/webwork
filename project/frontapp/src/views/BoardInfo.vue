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
              {{ date }}
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
              <button
                class="btn btn-xs btn-danger"
                @click="deleteBoard(boardInfo.id)"
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <comment-comp :bid="searchNo" />
  </div>
</template>
<script>
import axios from "axios";
import CommentComp from "@/components/CommentComp.vue";
import { dateForment } from "@/module/date";

export default {
  components: {
    CommentComp,
  },
  data() {
    return {
      searchNo: "",
      boardInfo: {},
    };
  },
  computed: {
    date() {
      let date = this.boardInfo.created_date;
      return dateForment(date);
    },
  },
  methods: {
    async fetchInfo() {
      let board = await axios.get(
        `http://localhost:3000/board/${this.searchNo}`
      );
      this.boardInfo = board.data[0];
      //console.log(this.boardInfo.id);
    },
    goToUpdateForm(id) {
      this.$router.push({ path: "/boardForm", query: { id: id } });
      //페이지 이동
    },
    goToListForm() {
      this.$router.push({ path: "/boardList" });
      //페이지 이동
    },
    async deleteBoard() {
      if (confirm("해당 개시물을 삭제 하시겠습니까?")) {
        let result = await axios.delete(
          `http://localhost:3000/board/${this.searchNo}`
        );
        console.log(result);
        //200 == 정상실행
        if (result.request.status === 200) {
          alert("삭제가 완료 되었습니다.");
          this.goToListForm();
        } else {
          alert("삭제 도중 에러가 발생했습니다.");
        }
      }
    },
  },
  created() {
    this.searchNo = this.$route.query.id;
    this.fetchInfo();
  },
};
</script>
