<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <emp-list @select="selectHandler" ref="listRef" />
      </div>
      <div class="col">
        <emp-form :selEmp="selectedEmp" @saved="savedHandler" />
      </div>
    </div>
  </div>
</template>

<script>
import EmpList from "@/components/EmpList.vue";
import EmpForm from "@/components/EmpForm.vue";

export default {
  components: {
    EmpList,
    EmpForm,
  },
  data() {
    return {
      selectedEmp: {},
    };
  },
  methods: {
    selectHandler(emp) {
      this.selectedEmp = emp;
    },
    savedHandler() {
      this.$refs.listRef.fetchList();
    },
  },
};
</script>
