import api from "./api";

const authService = {
  login: async ({ name, password }) => {
    const response = await api.post("/login", { name, password });
    return response;
  },

  signup: async ({ name, email, password }) => {
    const response = await api.post("/signup", { name, email, password });
    return response;
  },

  fetchCurrentUser: async () => {
    const response = await api.get("/me");
    return response;
  },
};

export default authService;
