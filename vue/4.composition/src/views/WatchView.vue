<template>
  <input type="text" v-model="question" />
  <!-- input테그이면 watch를 사용하지 않고
     @input 이벤트를 사용해도 된다. -->
  <div>{{ state.answer }}</div>
  <img
    v-if="state.imageSrc !== '#'"
    :src="state.imageSrc"
    width="200"
    alt="답변 관련 이미지"
  />
  <hr />
  {{ publishedBooksMessage }}
</template>
<script setup>
import axios from "axios";
import { computed, reactive, ref, watch } from "vue";

const question = ref("");
const state = reactive({
  answer: "질문에는 일반적으로 물음표가 포함됩니다.",
  imageSrc: "#",
});
const books = reactive([
  "Vue 2 - Advanced Guide",
  "Vue 3 - Basic Guide",
  "Vue 4 - The Mystery",
]);

//watch랑 조금 다르다.
const publishedBooksMessage = computed(() => {
  return books.length > 0 ? "yes" : "no";
});

//watch는 ref에서 직접 작동합니다.
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) getAnswer();
});

const getAnswer = async () => {
  state.answer = "생각 중...";
  try {
    const result = await axios.get("https://yesno.wtf/api");
    const json = result.data;

    state.answer = json.answer === "yes" ? "네" : "아니오";
    state.imageSrc = await json.image;
  } catch (error) {
    state.answer = "에러! API에 연결할 수 없습니다." + error;
  }
};
</script>
