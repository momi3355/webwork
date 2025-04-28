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
    };
  },
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>
