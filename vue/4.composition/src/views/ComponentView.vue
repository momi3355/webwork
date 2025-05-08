<template>
  useComponentrefs 이용
  <input ref="my-input" value="hello" />
  <div>
    현재페이지는 {{ route.fullPath }}<br />
    <a href="#" @click.passive="router.push('/')">home</a>
    <span>&nbsp;&nbsp;</span>
    <a href="#" @click.passive="goPage">about</a>
  </div>
  <hr />
  {{ state.count }}
  <button class="btn btn-primary" @click="clickHandler">클릭</button><br />
  <button-counter :counter="state.count" @incrementevent="clickHandler">
    자식컨포넌트
  </button-counter>
</template>

<script setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import { onMounted, reactive, useTemplateRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

//const count = ref(0);
const state = reactive({
  count: 0,
});

// 첫 번째 인자는 템플릿에서 사용된 ref 값과 일치해야 합니다.
const input = useTemplateRef("my-input"); //ref 속성
//input.value는 <input> 태그, DOM api 사용 가능

const goPage = () => {
  router.push("/about");
};
const clickHandler = (init) => {
  if (init >= 0) state.count = init;
  else state.count++;
};

onMounted(() => {
  input.value.focus();
});

onMounted(() => {
  console.log("count = ", state.count);
  console.log("input.value = ", input.value.value);
  input.value.focus(); //커서
  //input.value.select(); //선택
});
</script>
