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
  postCalc(numOne, numTwo, operation) {
    const content =
      numOne.toString() + " " + operation + " " + numTwo.toString();
    console.log(content);
    return apiClient
      .post("/calculate", content)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
