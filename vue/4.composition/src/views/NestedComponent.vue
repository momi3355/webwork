<template>
  <div>
    <PageTitle title="컴포넌트 props 연습" />
    <BlogPost
      :title="post.title"
      :author="post.author"
      :likes="42"
      :is-published="post.isPublished"
      :comment-ids="[234, 266, 273]"
    />
    <BlogPost v-bind="post" />
    <BlogPost v-for="post in posts" v-bind="post" />
  </div>
</template>
<script setup>
import PageTitle from "../components/PageTitle.vue";
import BlogPost from "../components/BlogPost.vue";
import { onMounted, reactive } from "vue";

//ref()를 사용해도 되는데,
//reactive()를 대게 배열이나 객체를 넣는다.
//그리고 reactive()를 사용하면
// script에서 사용할때 .value를 사용하지 않아도 값을 읽을 수 있다.
const posts = reactive([
  {
    title: "자바 열공",
    author: "이순신",
    isPublished: true,
    commentIds: [],
  },
  {
    title: "Vue와 함께한 나의 여행",
    author: "홍길동",
    isPublished: true,
    commentIds: [234, 266, 273],
  },
]);
const post = reactive({
  title: "Vue와 함께한 나의 여행",
  author: "홍길동",
  isPublished: true,
  commentIds: [234, 266, 273],
});

onMounted(() => {
  //console.log(post);
});
</script>
