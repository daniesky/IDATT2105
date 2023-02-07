<template>
  <Form @submit="onSubmit" :validation-schema="simpleSchema" class="form">
    <label>First name</label>
    <Field v-model="fname" name="fname" class="text" />
    <label>Last name</label>
    <Field v-model="lname" name="lname" class="text" />
    <label>Email</label>
    <Field v-model="email" name="email" class="text" type="email" />
    <label>Message</label>
    <Field v-model="message" name="message" id="message1" />
    <button class="submit" :disabled="!simpleSchemaValidate">Submit</button>
  </Form>
</template>
<script>
import { Form, Field } from "vee-validate";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import EventService from "@/services/EventService.js";
import * as yup from "yup";

const simpleSchema = yup.object({
  email: yup.string().required().email(),
  fname: yup.string().required(),
  lname: yup.string().required(),
  message: yup.string().required(),
});

export default {
  name: "FormComp",
  setup() {
    const toastSuccess = () => {
      createToast("Successfully uploaded form!", {
        position: "bottom-center",
      });
    };
    const toastFail = () => {
      createToast("Could not upload form!", {
        position: "bottom-center",
      });
    };
    return { toastSuccess, toastFail };
  },
  data() {
    return {
      reviews: null,
      fname: this.$store.state.fname,
      lname: this.$store.state.lname,
      email: this.$store.state.email,
      message: "",
      status: "",
    };
  },
  computed: {
    simpleSchemaValidate() {
      let val = this.validateSchema();
      return Boolean(val);
    },
  },
  methods: {
    onSubmit() {
      EventService.postForm(this.fname, this.lname, this.email, this.message)
        .then(() => {
          //console.log(response);
          this.toastSuccess();
          this.updateState();
        })
        .catch(() => {
          this.toastFail();
        });
    },
    validateSchema() {
      return simpleSchema.isValidSync(
        {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          message: this.message,
        },
        { strict: true }
      );
    },
    updateState() {
      this.$store.commit("SET_STATE", {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
      });
    },
  },
  components: {
    Form,
    Field,
  },
};
</script>

<style scoped>
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
}

.submit {
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
.submit:hover {
  background-color: cornflowerblue;
}
.submit:disabled {
  background-color: white;
  border-color: #42b983;
}

#message1 {
  height: 15vh;
  padding: 10px;
  font-size: 1vw;
  border: 2px solid #42b983;
  border-radius: 4px;
}
</style>
