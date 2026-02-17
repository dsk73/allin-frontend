// src/services/authClient.js
import axios from "axios";

const authClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL || "http://localhost:1337",
});

export default authClient;
