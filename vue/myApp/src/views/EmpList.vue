<script>
import axios from "axios";

export default {
  data() {
    return {
      emps: [],
    };
  },
  mounted() {
    axios.get(`/empdata.json`).then((res) => (htis.emps = res.data));
  },
};
</script>

<template>
  <table class="table">
    <tr>
      ...
    </tr>
  </table>
</template>

<style></style>
