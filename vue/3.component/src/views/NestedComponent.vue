<template>
  <page-title :title />
  <blog-post v-bind="post" />
  <!-- 객체 전달도 가능 -->
  <blog-post
    :likes="50"
    :is-published="post.isShow"
    :comment-ids="[100, 103, 200]"
  />
  <!-- 정적데이터는 ':' 바인딩이 아니라 그냥 속성으로 전달 -->
  <!-- 문자역이 아닌 타임은 바인딩':'을 해야한다. -->
  <!-- 블림에서 true이면 'is-published' 만 적어도 된다. -->
  <!-- 'page-title', 'PageTitle' 둘다 가능 -->
</template>

<script>
// '@'는 './src' 경로 이다.
// '@'는 jsconfig.json에 지정되어있다.
import PageTitle from "@/components/PageTitle.vue";
import BlogPost from "@/components/BlogPost.vue";

export default {
  components: {
    PageTitle,
    BlogPost,
  },
  data() {
    return {
      title: "동적페이지이름",
      post: {
        title: "vue 블로그",
        likes: 100,
        isShow: true,
        commentIds: [400, 200, 150],
      },
    };
  },
};
</script>
