import { createStore } from "vuex";
const store = createStore({
  state() {
    //프로젝트 전체에서 공통으로 사용할 변수
    return { count: 0, loginYn: false };
  },
  mutations: {
    //state를 변경하는 역할
    increment(state) {
      state.count++;
    },
    loginSuccess(state) {
      state.loginYn = true;
    },
  },
});
export default store;
