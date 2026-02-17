// src/context/AuthProvider.jsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { authService } from "../services/authService";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getStoredUser());

  const login = async (identifier, password) => {
    const user = await authService.login(identifier, password);
    setUser(user);
    return user;
  };

  const register = async (username, email, password) => {
    const user = await authService.register(username, email, password);
    setUser(user);
    return user;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
