import axios from "axios";
import URLS from "../core/constants/urls";

const client = axios.create({
  baseURL: URLS.baseURL,
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers.Accept = "application/json";

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default client;
