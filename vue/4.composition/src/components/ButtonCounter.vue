<template>
  <div class="border">
    <h3>emit 테스트</h3>
    <button @click="incrementChild">
      <slot></slot>
    </button>
    <button @click="incrementChild">증가 {{ count }}</button>
    <!-- template에서는 전역 변수를 사용할 수 있다. -->
    <button @click="$emit('incrementevent', 0)">emit 인수 {{ count }}</button>
    <button @click="$emit('incrementevent')">emit {{ count }}</button>
    <button @click="count++">직접변경안됨 {{ count }}</button>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";

const emit = defineEmits(["incrementevent"]);
const props = defineProps(["counter"]);

const count = ref(props.counter); //props는 읽기 전용이기 때문에
//ref를 만들어서 값을 수정 할 수 있다.

const incrementChild = () => {
  emit("incrementevent", count.value + 1);
};
</script>
