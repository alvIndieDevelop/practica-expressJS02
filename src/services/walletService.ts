import { apiClient } from "../utils/apiClient";

export const WalletService = {
  async findWalletByUserId(userId: string) {
    return apiClient.get(`/api/wallet/findWalletByUserId?userId=${userId}`);
  },
  async addToWallet(payload: {
    name: string;
    email: string;
    document: string;
    phone: string;
    amount: number;
  }) {
    return apiClient.post("/api/wallet/addToWallet", payload);
  },
  async pay(payload: { userId: string; amount: number }) {
    return apiClient.post("/api/wallet/pay", payload);
  },
  async confirmPayment(payload: {
    sessionId: string;
    token: string;
    userId: string;
    amount: string;
  }) {
    return apiClient.post("/api/wallet/confirmPayment", payload);
  },
};
