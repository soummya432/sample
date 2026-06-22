import axiosInstance from "./axiosInstance";

const ENDPOINT = "/expenses";

const expenseService = {
  getExpenses: async () => axiosInstance.get(ENDPOINT),
  createExpense: async (expense) => axiosInstance.post(ENDPOINT, expense),
  updateExpense: async (id, expense) => axiosInstance.put(`${ENDPOINT}/${id}`, expense),
  deleteExpense: async (id) => axiosInstance.delete(`${ENDPOINT}/${id}`),
};

export default expenseService;
