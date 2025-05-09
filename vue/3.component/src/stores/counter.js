import { defineStore } from "pinia";

//옵션 방식
export const useCounterStore = defineStore("counter", {
  //data() { return{} }
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  //methods: {}
  actions: {
    increment() {
      this.count++;
    },
  },
});

//컴포지션 방식
// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });
