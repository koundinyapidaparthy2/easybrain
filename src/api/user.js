import { axiosInstace } from "./index";
import { API_COMMON_ROUTE_PATHS } from "utils";
export const createUser = async (data) => {
  const route = `${API_COMMON_ROUTE_PATHS.auth}/createuser`;
  const response = await axiosInstace.post(route, data, {
    "Content-Type": "application/json",
  });
  return response.data;
};
export const loginUser = async (data) => {
  const route = `${API_COMMON_ROUTE_PATHS.auth}/loginuser`;
  const response = await axiosInstace.post(route, data, {
    "Content-Type": "application/json",
  });
  return response.data;
};
