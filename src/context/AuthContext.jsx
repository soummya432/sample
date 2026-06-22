import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import authService from "../features/auth/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(Boolean(localStorage.getItem("auth_token")));

  const token = localStorage.getItem("auth_token");

  const { isLoading, refetch } = useQuery(
    ["currentUser"],
    async () => {
      const response = await authService.fetchCurrentUser();
      return response.data?.data ?? response.data;
    },
    {
      enabled: Boolean(token),
      retry: false,
      onSuccess: (data) => {
        if (data) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      },
      onError: () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        setUser(null);
      },
    }
  );

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    setLoading(isLoading);
  }, [token, isLoading]);

  const login = async ({ email, password }) => {
    const response = await authService.login({ email, password });
    const result = response.data;
    const authToken = result.token || result.data?.token;
    const userData = result.data || result;

    if (!authToken) {
      throw new Error("Missing authentication token");
    }

    localStorage.setItem("auth_token", authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    await refetch();
    return result;
  };

  const signup = async ({ name, email, password }) => {
    const response = await authService.signup({ name, email, password });
    const result = response.data;
    const authToken = result.token || result.data?.token;
    const userData = result.data || result;

    if (!authToken) {
      throw new Error("Missing authentication token");
    }

    localStorage.setItem("auth_token", authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    await refetch();
    return result;
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, login, signup, logout }),
    [user, isAuthenticated, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
