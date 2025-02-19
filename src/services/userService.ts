import { apiClient } from "../utils/apiClient";

export const UserService = {
  async findAll() {
    return apiClient.get("/api/user");
  },
  async findOne(userId: string) {
    return apiClient.get(`/api/user/${userId}`);
  },
  async create(userData: {
    name: string;
    email: string;
    password: string;
    document: string;
    phone: string;
  }) {
    return apiClient.post("/api/user", userData);
  },
  async update(
    userId: string,
    userData: Partial<{
      name: string;
      email: string;
      password: string;
      document: string;
      phone: string;
    }>
  ) {
    return apiClient.put(`/api/user/${userId}`, userData);
  },
  async delete(userId: string) {
    return apiClient.delete(`/api/user/${userId}`);
  },
};
