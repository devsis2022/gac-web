import axios, { AxiosError } from "axios";

export const publicInstance = axios.create({
  baseURL: "http://localhost:9000",
  headers: { "Content-Type": "application/json" },
});

export const privateInstance = axios.create({
  baseURL: "http://localhost:9000",
  headers: { "Content-Type": "application/json" },
});

privateInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const isAxiosError = error instanceof AxiosError;

    if (isAxiosError && error.response?.status === 401) {
      sessionStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

privateInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
