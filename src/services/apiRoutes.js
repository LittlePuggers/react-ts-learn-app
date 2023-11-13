import axios from "axios";

// Create an instance of Axios
export const axiosInstance = axios.create({
  // Set a base URL for your API
  baseURL: "http://localhost:4000",
  // You can also add default headers here
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
    // Add any other headers you need
    "x-token": undefined,
  },
});
