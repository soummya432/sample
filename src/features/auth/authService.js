import axiosClient from "../../api/axiosClient";

const authService = {
  signup: ({ name, email, password }) => {
    return axiosClient.post("/signup", { name, email, password });
  },

  login: ({ email, password }) => {
    return axiosClient.post("/login", { email, password });
  },

  fetchCurrentUser: () => {
    return axiosClient.get("/me");
  },
};

export default authService;
