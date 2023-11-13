import { axiosInstance } from "./apiRoutes";

export const setToken = (token) => localStorage.setItem("x-token", token);
export const removeToken = () => localStorage.removeItem("x-token");

export const login = async (payload) => {
  try {
    const result = await axiosInstance.post("/api/auth", payload);
    const token = result.data.token;
    axiosInstance.defaults.headers = { "x-token": token };
    return result;
  } catch (error) {
    console.error("Error during login: ", error);
  }
};

export const register = async (payload) => {
  try {
    const result = await axiosInstance.post("/api/auth/register", payload);
    const token = result.data.token;
    axiosInstance.defaults.headers = { "x-token": token };
    return result;
  } catch (error) {
    console.error("Error during register:", error);
  }
};

export const logout = async () => {
  try {
    delete axiosInstance.defaults.headers["x-token"];
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
