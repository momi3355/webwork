<template>
  <div class="alert alert-warning">
    <h2>{{ title }}</h2>
  </div>
</template>
<script setup>
//  ["title"],  // 배열로 받기
//const props = defineProps(["title"]);
const props = defineProps({
  // 객체로 받기기
  title: String,
  //default: "페이지 제목입니다.",
  requird: true,
});
</script>
