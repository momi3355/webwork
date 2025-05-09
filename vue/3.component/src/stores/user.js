import { defineStore } from "pinia";

//옵션 방식
export const useUserStore = defineStore("user", {
  //data() { return{} }
  state: () => ({ userId: 0, grade: "admin" }),
  getters: {},
  //methods: {}
  actions: {
    setUserId(id) {
      this.userId = id;
    },
    setGrande(grade) {
      this.grade = grade;
    },
  },
});
