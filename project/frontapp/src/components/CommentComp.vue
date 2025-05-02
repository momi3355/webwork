<template>
  <div v-if="comments.length > 0" class="row">
    <ul>
      <li v-for="com in comments">{{ com.content }}</li>
    </ul>
  </div>
  <div v-else class="alert alert-info">댓글이 없습니다. 😥</div>
</template>
<script>
import axios from "axios";

export default {
  props: ["bid"],
  data() {
    return {
      searchNo: "",
      comments: [],
    };
  },
  methods: {
    async fetchComment() {
      let comment = await axios.get(
        `http://localhost:3000/comment/${this.bid}`
      );

      //TODO : this.bid가 undefined가 나옴.
      console.log(comment.data[0]);
      this.comments = comment.data[0];
      // this.comments = comment.data.filter((data) => {
      //   return data.bid === Number(this.searchNo);
      // });
    },
  },
  mounted() {
    this.fetchComment();
  },
};
</script>
<style></style>
