<template>
  <nav>
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/contactform">Form</router-link>
  </nav>
  <router-view />
  <div class="formwindow">
    <FormComp />
  </div>
</template>

<script>
import FormComp from "@/components/FormComp.vue";

export default {
  name: "FormView",
  components: {
    FormComp,
  },
};
</script>
<style>
nav {
  padding: 40px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
