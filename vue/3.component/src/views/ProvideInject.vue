<template>
  <div>
    provide
    <provide-inject-child />
  </div>
</template>

<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";

export default {
  components: {
    ProvideInjectChild,
  },
  data() {
    return {
      items: ["A", "B"],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
};
</script>
