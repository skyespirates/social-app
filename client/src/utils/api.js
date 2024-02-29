import axios from "axios";

const config = {
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
};

const instance = axios.create(config);

export default instance;
