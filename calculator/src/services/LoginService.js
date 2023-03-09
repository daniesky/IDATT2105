import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  login(username, password) {
    return apiClient
      .post("/user/login", null, {
        params: {
          username,
          password,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  register(username, password) {
    return apiClient
      .post("/user/login", null, {
        params: {
          username,
          password,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
