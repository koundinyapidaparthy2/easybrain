import axios from "axios";
export const axiosInstace = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ROUTE, // Set a base URL for all requests
  timeout: 5000, // Set a timeout for requests in milliseconds
});
