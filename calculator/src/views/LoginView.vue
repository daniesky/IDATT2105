<template>
  <div class="loginWin">
    <LoginComp @login="loggedIn" />
  </div>
</template>

<script>
import LoginComp from "@/components/LoginComp.vue";
import router from "@/router/index.js";
export default {
  name: "LoginView",
  components: {
    LoginComp,
  },
  methods: {
    loggedIn() {
      router.push("/calculator");
    },
  },
};
</script>

<style scoped></style>
