<template>
  <div>
    <h3>{{ emp ? "직원 수정" : "직원 등록" }}</h3>
    사번 : <input v-model="emp.id" class="form-control" />
    <div>
      <label>fname</label>
      <input v-model="emp.first_name" class="form-control" />
    </div>
    <div>
      <label>lname</label>
      <input v-model="emp.last_name" class="form-control" />
    </div>
    <div>
      <label>jobId</label>
      <div class="form-check">
        <input
          type="radio"
          class="form-check-input"
          v-model="emp.job_id"
          value="it"
        /><label class="form-check-label">IT</label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          class="form-check-input"
          v-model="emp.job_id"
          value="sales"
        /><label class="form-check-label">SALES</label>
      </div>
    </div>
    <div>
      <label>부서</label>
      <select v-model="emp.department_id" class="form-select">
        <option v-for="dept in depts" :value="dept.id">
          {{ dept.dname }}
        </option>
      </select>
    </div>
    <div>
      <label>급여</label>
      <input class="form-control" v-model="emp.salary" />
    </div>
    <div>
      <label>이메일</label>
      <input class="form-control" v-model="emp.email" />
    </div>
    <button @click="empUpdate()" class="btn btn-success mt-2">수정</button>
    <button @click="reset()" class="btn btn-warning mt-2">초기화</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api/emp"; //API 서버 주소
let id = 20;

export default {
  props: { selEmp: Object },
  data() {
    return {
      depts: [], //부서 목록
      emp: {}, //emps에 추가할 객체
    };
  },
  watch: {
    selEmp: {
      handler(newEmp) {
        if (newEmp) this.emp = { ...newEmp }; //깊은복사
      },
    },
  },
  methods: {
    fetchDeptList() {
      axios.get("/api/dept").then((response) => (this.depts = response.data));
    },
    empUpdate() {
      if (this.emp.id) {
        //수정
        axios.put(`/${this.emp.id}`, this.emp).then(() => this.$emit("saved"));
      } else {
        //추가
        this.emp.id = ++id;
        axios.post("", this.emp).then(() => this.$emit("saved"));
        //서버에 추가하고, 부모컴포넌트에게 @saved를 호출(EmpList.vue 갱신을 위해)
      }
    },
    selectHendler(idx) {
      this.emp = { ...this.emps[idx] }; //깊은복사
    },
    reset() {
      this.emp = {}; //clear
    },
  },
  mounted() {
    this.fetchDeptList();
  },
};
</script>
