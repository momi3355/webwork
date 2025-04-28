<template>
  <h3>부모컴포넌트</h3>
  <child-component @send-message="sendMessage" />
  <!-- click, change 가 아니라 커스텀 이벤트를 만들 수 있다. -->
</template>

<script>
import ChildComponent from "@/components/ChildComponent4.vue";

export default {
  components: {
    ChildComponent,
  },
  methods: {
    sendMessage(msg, msg2) {
      console.log(msg, msg2);
    },
  },
};
</script>
