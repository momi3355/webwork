<script>
import axios from "axios";

export default {
  data() {
    return {
      emps: [],
    };
  },
  mounted() {
    axios.get(`/empdata.json`).then((res) => (this.emps = res.data));
  },
};
</script>

<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" v-for="(value, key) in emps[0]">
          {{ key === "employee_id" ? "#" : key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in emps">
        <td v-for="value in emp">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
