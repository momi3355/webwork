<template>
  <ul>
    <li>email<input type="text" v-model="userInfo.email" /></li>
    <li>pw<input type="text" v-model="userInfo.pass" /></li>
    <li>
      <button type="button" class="btn btn-primary" @click="loginHanlder">
        로그인
      </button>
    </li>
  </ul>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    async loginHanlder() {
      this.$store.commit("loginSuccess");
      const result = await axios.post("/api/users/login", {
        email: this.userInfo.email,
        pw: this.userInfo.pass,
      });

      if (result.data && result.data.code === "success") {
        alert(result.data.code);
        this.$router.push({ path: "/" }); //home
      }
    },
  },
};
</script>
