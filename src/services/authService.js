// frontend/src/api/auth.js
import axios from "axios";

// use relative path — proxy will forward to backend in dev
const API_URL = "/back1/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  // controller mapping is @PostMapping("/signup")
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
