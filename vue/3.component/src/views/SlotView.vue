<template>
  <fancy-button>팬시버튼</fancy-button>
  <fancy-button>저장하기</fancy-button>
  <slot-modal-layout>
    <template v-slot:header>팝업타이틀</template>
    <!-- v-slot을 #으로 대처가능 -->
    <template #default>
      <p>팝업컨텐츠</p>
      <p>팝업컨텐츠</p>
    </template>
    <template #footer><button type="button">닫기</button></template>
  </slot-modal-layout>
</template>
<hr />
<provide-inject />

<script>
import FancyButton from "@/components/FancyButton.vue";
import SlotModalLayout from "@/components/SlotModalLayout.vue";
import ProvideInject from "./ProvideInject.vue";

export default {
  components: {
    FancyButton,
    SlotModalLayout,
    ProvideInject,
  },
};
</script>

<style></style>
