import { ref, computed } from "vue";
import { defineStore } from "pinia";

//컴포지션은 함수로 선언 된다.
// 참고로 옵션은 객체
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("setup kym");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

//옵션 방식
// export const useCounterStore = defineStore("counter", {
//   //data() { return{} }
//   state: () => ({ count: 0, name: "Eduardo" }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   //methods: {}
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });
