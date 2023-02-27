<template>
  <div class="div22" id="log">
    <ul id="list">
      <li v-for="(item, index) in log" v-bind:key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LogComp",
  props: {
    log: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
#log {
  background-color: #b0a8a7;
  border-style: solid;
  overflow: hidden;
  border-color: black;
  border-width: 3px;
  border-radius: 15px;
  font-size: 2vh;
  text-align: center;
  padding-top: 10px;
  overflow: auto;
  width: 30%;
  font-size: 2vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 0px;
}

#list {
  list-style-type: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  overflow: scroll;
  scroll-snap-align: end;
  max-height: 90vh;
}
#list::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 1000px) {
  #log {
    width: 100%;
    font-size: 3vh;
  }
}
</style>
