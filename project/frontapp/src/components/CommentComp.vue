<template>
  <div v-if="comments.length > 0" class="row">
    <div class="chat-box">
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
<script>
import axios from "axios";
import { dateForment } from "@/module/date";

export default {
  props: ["bid"],
  data() {
    return {
      limit: 10,
      currentPage: 1,
      totalCount: 1,
      pageBlockSize: 10, // 한 번에 보여줄 페이지 수
      pageBlockStart: 1, // 현재 블록의 시작 페이지
      comments: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / this.limit);
    },
    pageNumbers() {
      const pages = [];
      const end = Math.min(
        this.pageBlockStart + this.pageBlockSize - 1,
        this.totalPages
      );
      for (let i = this.pageBlockStart; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    date(created_date) {
      return dateForment(created_date);
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchComment(page);
      }
    },
    prevBlock() {
      if (this.pageBlockStart > 1) {
        this.pageBlockStart = Math.max(
          1,
          this.pageBlockStart - this.pageBlockSize
        );
        this.changePage(this.pageBlockStart);
      }
    },
    nextBlock() {
      if (this.pageBlockStart + this.pageBlockSize <= this.totalPages) {
        this.pageBlockStart = this.pageBlockStart + this.pageBlockSize;
        this.changePage(this.pageBlockStart);
      }
    },
    async fetchTotalCount() {
      let total = await axios.get(
        `http://localhost:3000/comment/total?bid=${this.bid}`
      );
      this.totalCount = total.data[0].total;
    },
    async fetchComment(page) {
      const offset = (page - 1) * this.limit;

      let comment = await axios.get(
        `http://localhost:3000/comment?bid=${this.bid}&limit=${this.limit}&offset=${offset}`
      );
      //console.log(comment.data);
      this.comments = comment.data;
      this.currentPage = page;
    },
  },
  created() {
    this.fetchTotalCount();
    this.fetchComment(1);
  },
};
</script>
<style scoped>
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
</style>
