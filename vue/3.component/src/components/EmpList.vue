<template>
  <table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, idx) in emps" :key="emp.id" @click="selectHendler(idx)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button
            @click.prevent="deleteHandler(emp.id)"
            class="ml-4 text-red-600"
          >
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api/emp"; //API 서버 주소

export default {
  data() {
    return {
      emps: [], //사원 목록
      emp: {}, //emps에 추가할 객체
    };
  },
  methods: {
    fetchList() {
      axios.get("").then((response) => (this.emps = response.data));
    },
    deleteHandler(id) {
      axios.delete(`/${id}`).then(() => this.fetchList());
    },
    selectHendler(idx) {
      this.$emit("select", this.emps[idx]);
    },
  },
  mounted() {
    this.fetchList();
  },
};
</script>
