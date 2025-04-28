<!-- 자식이 Emp.List.vue EmpForm.vue -->
<script>
import EmpForm from "./EmpForm.vue";
import EmpList from "./EmpList.vue";

export default {
  components: {
    EmpList,
    EmpForm,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div class="col"><EmpList /></div>
      <div class="col"><EmpForm /></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10px;
}
</style>
