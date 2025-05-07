import { createStore } from "vuex";
const store = createStore({
  //프로젝트 전체에서 공통으로 사용할 변수
  state() {
    return { count: 0, loginYn: false, email: "" };
  },
  //state를 변경하는 역할
  mutations: {
    increment(state) {
      state.count++;
    },
    changeLoginYn(state) {
      state.loginYn = true;
    },
    changeEmail(state, payload) {
      console.log(payload);
      state.email = payload.email;
    },
  },
  //mutation을 변경하는 action, dispatch로 호출 가능
  actions: {
    login(context, payload) {
      context.commit("changeEmail", payload);
      context.commit("changeLoginYn");
    },
  },
});
export default store;
