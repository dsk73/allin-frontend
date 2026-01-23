import axios from "axios";

export const api = axios.create({
  baseURL: "https://allin-backend.onrender.com/api",
});
