<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      좋아요 {{ likes }}
      <div v-if="isPublished">출판</div>
      <div v-else>편집중</div>
      <hr />
      <div>
        댓글
        <div v-for="(com, idx) in commentIds">{{ idx + 1 }}. {{ com }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props로 읽은 값은 const(readonly)이다.
  //props: ["title", "likes", "isPublished", "commentIds"],
  props: {
    title: {
      type: String,
      default: "기본타이틀",
    },
    likes: {
      type: Number,
      validator: function (value) {
        return value > 0;
      },
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: true,
    },
    commentIds: Array,
  },
  //유효성 검사에서 실패하면 console창에서
  //Invalid prop: custom validator check failed for prop "likes"
};
</script>
