<template>
  <div>inject</div>
</template>

<script>
export default {
  inject: ["itemLength"],
  mounted() {
    console.log(this.itemLength);
  },
};
</script>
