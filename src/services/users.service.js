import { axiosInstance } from "./apiRoutes";

export const getUser = async (emailParam) => {
  try {
    const result = await axiosInstance.get(`/api/users/${emailParam}`);
    const userProfile = result.data.user;
    return userProfile;
  } catch (error) {
    console.error("Error with getUser function:", error);
  }
};

export const getUsersByRole = async (role) => {
  try {
    const result = await axiosInstance.get(`/api/users/role/${role}`);
    const users = result.data.users;
    return users;
  } catch (error) {
    console.error("Error with getUserByRole function:", error);
  }
};

export const changePassword = async (emailParam, payload) => {
  try {
    const result = await axiosInstance.put(`/api/users/${emailParam}`, payload);
    return result;
  } catch (error) {
    console.error("Error changing password:", error);
  }
};

export const updateUser = async (emailParam, payload) => {
  try {
    const result = await axiosInstance.put(
      `/api/users/update/${emailParam}`,
      payload
    );
    return result;
  } catch (error) {
    console.error("Error with updateUser function:", error);
  }
};

export const deleteUser = async (emailParam) => {
  try {
    const result = await axiosInstance.delete(`/api/users/${emailParam}`);
    return result;
  } catch (error) {
    console.error("Error with deleteUser function:", error);
  }
};
