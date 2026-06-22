import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
const USER_KEY = "expense_tracker_user";
const TOKEN_KEY = "expense_tracker_token";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(USER_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }

    const savedUser = localStorage.getItem(USER_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const currentUser = {
      name: email.split("@")[0] || "Expense User",
      email,
      joinedAt: new Date().toISOString(),
    };

    localStorage.setItem(TOKEN_KEY, "expense_token_sample_2026");
    localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
    setUser(currentUser);

    return currentUser;
  };

  const signup = async ({ name, email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const newUser = {
      name,
      email,
      joinedAt: new Date().toISOString(),
    };

    localStorage.setItem(TOKEN_KEY, "expense_token_sample_2026");
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    setUser(newUser);

    return newUser;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, login, signup, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
}
