<script>
export default {
  data() {
    return {
      totalPage: 5,
      depts: [
        {
          dno: 10,
          dname: "개발",
        },
        {
          dno: 20,
          dname: "인사",
        },
        {
          dno: 30,
          dname: "안사",
        },
      ],
      emp: {
        employee_id: "100",
        department_id: "20",
        first_name: "steven",
        last_name: "king",
        email: "",
        phone_number: "",
        hire_date: "",
        job_id: "",
        salary: "",
        commission_pct: "",
        manager_id: "",
      },
    };
  },
  methods: {
    empUpdate() {
      alert("수정");
      console.log(this.emp);
      //이 값으로 fatch()보내면된다.
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="mb-3 row g-3">
      <label class="col-sm-2 col-form-label">사번 : </label>
      <div class="col-auto">
        <input class="form-control" v-model="emp.employee_id" />
      </div>
    </div>
    <div class="mb-3 row g-3">
      <label class="col-sm-2 col-form-label">fname : </label>
      <div class="col-auto">
        <input class="form-control" v-model="emp.first_name" />
      </div>
    </div>
    <div class="mb-3 row g-3">
      <label class="col-sm-2 col-form-label">lname : </label>
      <div class="col-auto">
        <input class="form-control" v-model="emp.last_name" />
      </div>
    </div>
    <div class="mb-3 row g-3">
      <label class="col-sm-2 col-form-label">job id :</label>
      <div class="col-auto">
        <div class="form-check form-check-inline">
          <input
            type="radio"
            class="form-check-input"
            v-model="emp.job_id"
            value="it"
          />
          <label class="form-check-label">IT</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            class="form-check-input"
            v-model="emp.job_id"
            value="sales"
          />
          <label class="form-check-label">SALES</label>
        </div>
      </div>
    </div>
    <div class="mb-3 row g-3">
      <label class="col-sm-2 col-form-label">부서:</label>
      <div class="col-auto">
        <select class="form-select" v-model="emp.department_id">
          <option disabled value="">다음 중 하나를 선택하세요</option>
          <option v-for="dept in depts" :value="dept.dno">
            {{ dept.dname }}
          </option>
        </select>
      </div>
    </div>
    <button class="btn btn-primary" @click="empUpdate()">수정</button>
  </div>
</template>

<style></style>
