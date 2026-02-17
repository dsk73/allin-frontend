// src/services/authService.js
import api from "./api";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export const authService = {
  async login(identifier, password) {
    const res = await api.post("/auth/local", {
      identifier,
      password,
    });

    const { jwt, user } = res.data;

    localStorage.setItem(TOKEN_KEY, jwt);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return user;
  },

  async register(username, email, password) {
    const res = await api.post("/auth/local/register", {
      username,
      email,
      password,
    });

    const { jwt, user } = res.data;

    localStorage.setItem(TOKEN_KEY, jwt);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return user;
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getStoredUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },
};
