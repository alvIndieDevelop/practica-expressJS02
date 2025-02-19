import { apiClient } from "../utils/apiClient";

export const AuthService = {
  async login(credentials: { email: string; password: string }) {
    return apiClient.post("/api/auth/login", credentials);
  },
  async register(userData: {
    name: string;
    email: string;
    password: string;
    document: string;
    phone: string;
  }) {
    return apiClient.post("/api/auth/register", userData);
  },
};
