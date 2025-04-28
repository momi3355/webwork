<template>
  <h3>부모컴포넌트</h3>
  <child-component ref="child_component" />
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  mounted() {
    //자식 컴포넌트의 메소드를 호출 가능.
    this.$refs.child_component.$refs.btn.click();
    //child-component 컴포넌트에서
    // btn 버튼에서
    // .click 이벤트 실행
    //this.$refs.child_component.childFunc();
    //child-component 컴포넌트에서
    // this.childFunc() 를 호출

    this.$refs.child_component.msg = "부모가 보내는 메시지";
    //data() 도 접근이 가능
  },
};
</script>
