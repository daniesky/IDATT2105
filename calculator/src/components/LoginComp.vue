<template>
  <div class="header">
    <h1>Calculator app</h1>
    <p>Create a new user or login with existing user</p>
  </div>
  <Form :validation-schema="simpleSchema" class="form" @submit="onSubmit">
    <label>Username</label>
    <Field v-model="username" name="username" class="text" />
    <label>Password</label>
    <Field type="password" v-model="password" name="password" class="text" />
    <button class="submit" :disabled="!simpleSchemaValidate">Login</button>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import LoginService from "@/services/LoginService";

const simpleSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});
export default {
  name: "LoginComp",
  components: {
    Form,
    Field,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    simpleSchemaValidate() {
      let val = this.validateSchema();
      return Boolean(val);
    },
  },
  methods: {
    validateSchema() {
      return simpleSchema.isValidSync({
        username: this.username,
        password: this.password,
      });
    },
    onSubmit() {
      LoginService.login(this.username, this.password)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("login");
          } else if (response.status == 401) {
            alert("Invalid username or password");
          } else {
            alert("Something went wrong" + response.data);
          }
        })
        .catch((error) => {
          alert("Something went wrong" + error.data);
        });
    },
  },
};
</script>

<style scoped>
.header {
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: center;
}
h1 {
  font-size: 2vw;
  margin-left: 14px;
}
p {
  font-style: italic;
}
.form {
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
  padding-top: 20px;
  padding-bottom: 10px;
}
.text {
  padding: 15px 15px;
  box-sizing: border-box;
  border: 2px solid #42b983;
  border-radius: 4px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1vw;
  text-align: center;
}
button {
  padding: 20px 28px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 4px;
  font-size: 1vw;
  background-color: #42b983;
  width: 10vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
}
button:hover {
  background-color: cornflowerblue;
}
button:disabled {
  background-color: white;
  border-color: #42b983;
}
</style>
