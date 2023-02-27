import { createStore } from "vuex";

export default createStore({
  state: {
    fname: "",
    lname: "",
    email: "",
  },
  getters: {},
  mutations: {
    SET_STATE(state, { fname, lname, email }) {
      state.fname = fname;
      state.lname = lname;
      state.email = email;
    },
  },
  actions: {},
  modules: {},
});
