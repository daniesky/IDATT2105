<template>
  <form>
    <label for="fname">First name</label><br />
    <input class="text" type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name</label><br />
    <input class="text" type="text" id="lname" name="lname" /><br />
    <label for="email">Email address</label><br />
    <input class="text" type="text" id="email" name="email" /><br />
    <label for="message">Feedback</label><br />
    <textarea id="message" /><br />
    <input class="submit" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  name: "FormComp",
};
</script>

<style scoped>
form {
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5vw;
  text-align: center;
}

label {
  width: 30vw;
}
.text {
  padding: 20px 28px;
  box-sizing: border-box;
  border: 2px solid #42b983;
  border-radius: 4px;
  font-size: 1vw;
}

.submit {
  padding: 20px 28px;
  box-sizing: border-box;
  border: 2px solid #42b983;
  border-radius: 4px;
  font-size: 1vw;
  background-color: white;
  width: 10vw;
  margin: auto;
}
.submit:hover {
  background-color: #42b983;
}

#message {
  height: 15vh;
  padding: 10px;
  font-size: 1vw;
  border: 2px solid #42b983;
  border-radius: 4px;
}
</style>
