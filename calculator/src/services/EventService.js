import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  postForm(fname, lname, email, message) {
    return apiClient
      .post("/reviews", {
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log("Successfully uploaded form", response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
