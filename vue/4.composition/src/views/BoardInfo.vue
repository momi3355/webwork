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
<script setup>
import axios from "axios";
import CommentComp from "@/components/CommentComp.vue";
import { ref, computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { dateForment } from "@/module/date";

const router = useRouter();
const route = useRoute();
const searchNo = ref("");
const boardInfo = ref({});

const date = computed(() => {
  let _date = boardInfo.value.created_date;
  return dateForment(_date);
});

const fetchInfo = async () => {
  let board = await axios.get(`api/board/${searchNo.value}`);
  boardInfo.value = board.data[0];
};
const goToUpdateForm = (id) => {
  router.push({ path: "/boardForm", query: { id: id } });
};
const goToListForm = () => {
  router.push({ path: "/boardList" });
};
const deleteBoard = async () => {
  if (confirm("해당 개시물을 삭제 하시겠습니까?")) {
    let result = await axios.delete(`api/board/${searchNo.value}`);
    console.log(result);
    //200 == 정상실행
    if (result.request.status === 200) {
      alert("삭제가 완료 되었습니다.");
      goToListForm();
    } else {
      alert("삭제 도중 에러가 발생했습니다.");
    }
  }
};

onBeforeMount(() => {
  searchNo.value = route.query.id;
  fetchInfo();
});
</script>
