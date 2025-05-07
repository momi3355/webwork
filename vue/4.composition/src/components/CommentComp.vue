<template>
  <div class="row">
    <div class="addchat-box">
      <h3>댓글 추가</h3>
      <ul class="addchat-content">
        <li class="addchat-item">
          <div class="addcaht-item-box">
            <label class="addchat-label">작성자 </label
            ><input type="text" v-model="commentInfo.writer" />
          </div>
        </li>
        <li class="addchat-item">
          <div class="addcaht-item-box">
            <label class="addchat-label">댓글 </label
            ><textarea v-model="commentInfo.content"></textarea>
          </div>
        </li>
      </ul>
      <button type="button" class="btn btn-primary" @click="addCommentHanlder">
        추가하기
      </button>
    </div>
  </div>
  <div v-if="comments.length > 0" class="row">
    <div class="chat-box">
      <h3>댓글</h3>
      <ul class="chat-list">
        <li v-for="com in comments" :key="com.id" class="chat-message">
          <div class="chat-bubble">
            <div class="chat-content">
              <strong>{{ com.writer }}</strong
              ><br />
              {{ com.content }}
            </div>
            <div class="chat-time">{{ date(com.created_date) }}</div>
          </div>
          <div class="chat-remove">
            <div>
              <button
                class="btn btn-danger"
                @click="removeCommentHanlder(com.id)"
              >
                삭제
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination-container">
      <ul class="pagination justify-content-center">
        <!-- 이전 블록 -->
        <li class="page-item" :class="{ disabled: pageBlockStart === 1 }">
          <a class="page-link" href="#" @click.prevent="prevBlock">이전</a>
        </li>

        <!-- 숫자 페이지 -->
        <li
          class="page-item"
          v-for="page in pageNumbers"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">
            {{ page }}
          </a>
        </li>

        <!-- 다음 블록 -->
        <li
          class="page-item"
          :class="{ disabled: pageBlockStart + pageBlockSize > totalPages }"
        >
          <a class="page-link" href="#" @click.prevent="nextBlock">다음</a>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="alert alert-info">댓글이 없습니다. 😥</div>
</template>
<script setup>
import axios from "axios";
import { dateForment } from "@/module/date";
import { ref, defineProps, computed, onBeforeMount } from "vue";

const props = defineProps(["bid"]);

const limit = ref(10);
const currentPage = ref(1);
const totalCount = ref(1);
const pageBlockSize = ref(10); // 한 번에 보여줄 페이지 수
const pageBlockStart = ref(1); // 현재 블록의 시작 페이지
const comments = ref([]);
const commentInfo = ref({});

const bid = computed(() => {
  return props.bid;
});
const totalPages = computed(() => {
  return Math.ceil(totalCount.value / limit.value);
});
const pageNumbers = computed(() => {
  const pages = [];
  const end = Math.min(
    pageBlockStart.value + pageBlockSize.value - 1,
    totalPages.value
  );
  for (let i = pageBlockStart.value; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

const date = (created_date) => {
  return dateForment(created_date);
};
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchComment(page);
  }
};
const prevBlock = () => {
  if (pageBlockStart.value > 1) {
    pageBlockStart.value = Math.max(
      1,
      pageBlockStart.value - pageBlockSize.value
    );
    changePage(pageBlockStart.value);
  }
};
const nextBlock = () => {
  if (pageBlockStart.value + pageBlockSize.value <= totalPages.value) {
    pageBlockStart.value = pageBlockStart.value + pageBlockSize.value;
    changePage(pageBlockStart.value);
  }
};
const fetchTotalCount = async () => {
  //console.log(bid.value);
  let total = await axios.get(`/api/comment/total?bid=${bid.value}`);
  totalCount.value = total.data[0].total;
};
const fetchComment = async (page) => {
  const offset = (page - 1) * limit.value;

  let comment = await axios.get(
    `/api/comment?bid=${bid.value}&limit=${limit.value}&offset=${offset}`
  );
  //console.log(comment.data);
  comments.value = comment.data;
  currentPage.value = page;
};
const addCommentHanlder = async () => {
  //console.log(commentInfo.value);
  const result = await axios.post("/api/comment", {
    writer: commentInfo.value.writer,
    content: commentInfo.value.content,
    bid: bid.value,
  });
  console.log(result.data);
  if (result.data) {
    fetchTotalCount();
    fetchComment(1);
    alert("댓글이 추가 되었습니다");
  }
};
const removeCommentHanlder = async (id) => {
  if (confirm("해당 댓글을 삭제 하시겠습니까?")) {
    const result = await axios.delete(`/api/comment/${id}`);
    console.log(result.data);
    if (result.data) {
      fetchTotalCount();
      fetchComment(currentPage.value);
      alert("댓글이 삭제 되었습니다");
    }
  }
};

onBeforeMount(() => {
  fetchTotalCount();
  fetchComment(1);
});
</script>
<style scoped>
.addchat-box {
  margin: 15px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #f1f1f1;
}
.addchat-content {
  list-style: none;
  margin: 25px 0;
}
.addchat-item {
  margin: 10px 0;
}
.addcaht-item-box {
  width: 400px;
  padding: 10px;
  border-radius: 15px;
  background-color: #e0e0e0;
}
.addcaht-item-box > .addchat-label {
  width: 65px;
}
.addcaht-item-box > input,
.addcaht-item-box > textarea {
  width: 80%;
}
.pagination-container {
  margin: 30px;
}
.chat-box {
  /*height: 400px;*/
  /*overflow-y: auto;*/
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
}

.chat-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.chat-message {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
}

.chat-bubble {
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 15px;
  max-width: 70%;
  word-wrap: break-word;
}
.chat-time {
  font-size: 0.75em;
  color: #666;
  text-align: right;
}
.chat-remove {
  position: relative;
}
</style>
