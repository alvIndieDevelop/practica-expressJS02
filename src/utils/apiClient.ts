import axios from "axios";
import { options } from "../config";

const API_BASE = options.BACKEND_URL;

export const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (response) => response,
  (error) => {
    console.error("API request error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
