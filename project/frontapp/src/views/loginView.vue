<template>
  <div class="container">
    <ul>
      <li>email<input type="text" v-model="userInfo.email" /></li>
      <li>pw<input type="text" v-model="userInfo.pass" /></li>
      <li>
        <button type="button" class="btn btn-primary" @click="loginHanlder">
          로그인
        </button>
      </li>
    </ul>
  </div>
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
      const result = await axios.post("/api/users/login", {
        email: this.userInfo.email,
        pw: this.userInfo.pass,
      });

      if (result.data && result.data.code === "success") {
        //this.$store.commit("loginSuccess");
        //this.$store.commit("changeEmail", { email: this.userInfo.email });
        this.$store.dispatch("login", { email: this.userInfo.email }); //action을 호출
        alert(result.data.code);
        this.$router.push({ path: "/" }); //home
      }
    },
  },
};
</script>
