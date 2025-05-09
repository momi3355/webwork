<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <button class="btn btn-success" @click="increment">증가</button>
  <hr />
  <!-- <p>userID: {{ userId }}</p>
  <p>grade: {{ grade }}</p> -->
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

// 스토어 객체로 인스턴스 생성
const counterStore = useCounterStore();

// store state를 컴포넌트에 등록 == mapState();
const { name, count } = storeToRefs(counterStore);

const increment = () => {
  counterStore.increment(); //바로 접근 가능.
};
</script>
