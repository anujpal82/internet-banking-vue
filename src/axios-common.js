import axios from "axios";

export const Axios = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {
    Authorization: "Bearer {token}",
  },
});
