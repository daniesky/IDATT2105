<template>
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
        numone.toString() +
          " " +
          symbol +
          " " +
          numtwo.toString() +
          " = " +
          sum.toString()
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
@media only screen and (max-width: 1000px) {
  .window {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
