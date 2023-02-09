import { describe, it, expect, vi } from "vitest";
import FormComp from "src/components/FormComp.vue";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";

const store = createStore(
    { 
    state: {
    fname: "",
    lname: "",
    email: "",
  },
  mutations: {
    SET_STATE(state, { fname, lname, email }) {
      state.fname = fname;
      state.lname = lname;
      state.email = email;
    },
  }
  });

describe("Testing review form", () => {

  it("Testing if submit button is disabled with invalid data", () => {
    const wrapper = mount(FormComp, {
        global: {
            plugins: [store]
        }
    });
    expect(wrapper.find(".submit").element.disabled).toBe(true);
  });

  it("Testing if submit button is enabled with valid data", () => {
    const wrapper = mount(FormComp, {
        global: {
            plugins: [store]
        },
        data() {
            return{
                message: "Great calculator!",
                fname: "Daniel",
                lname: "Skymoen",
                email: "Danielskymoen02@gmail.com" 
            }
        }
    });

    expect(wrapper.find(".submit").element.disabled).toBe(false);
  });

  

});
