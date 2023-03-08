<template>
  <nav>
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/contactform">Form</router-link>
  </nav>
  <router-view />
  <div class="window">
    <CalculatorComp @log="addToLog" />
    <LogComp :log="this.log" />
  </div>
</template>

<script>
// @ is an alias to /src
import CalculatorComp from "@/components/CalculatorComp.vue";
import LogComp from "@/components/LogComp.vue";
export default {
  name: "HomeView",
  components: {
    CalculatorComp,
    LogComp,
  },
  data() {
    return {
      log: [],
    };
  },
  methods: {
    addToLog(symbol, numone, numtwo, sum) {
      this.log.push(
        numone.toString() + " " + symbol + " " + numtwo.toString() + " = " + sum
      );
    },
  },
};
</script>

<style scoped>
.window {
  display: flex;
  justify-content: center;
  gap: 10px;
}
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
@media only screen and (max-width: 1000px) {
  .window {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
