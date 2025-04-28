<template>
  {{ msg }} <br />
  <button type="button" class="btn btn-success" ref="btn" @click="childFunc">
    클릭
  </button>
</template>

<script>
export default {
  data() {
    return {
      msg: "자식컴포넌트 메시지",
      msg2: "메시지2",
    };
  },
  methods: {
    childFunc() {
      this.$emit("send-message", this.msg, this.msg2);
      //부모컴포넌트의 send-message 이벤트를 호출
      // 메게변수 전달도 가능하다.
    },
  },
};
</script>
