import axiosInstance from "../../axios/axiosInstance";

const logoutUser = async () => {
  try {
    const response = await axiosInstance.delete(`/api/users/logout`);
    return response.data;
  } catch (e) {
    const message = e.response.data;
    return message;
  }
};

const getUser = async () => {
  try {
    const response = await axiosInstance.get(`/api/users`);
    return response.data;
  } catch (e) {
    const message = e.response.data;
    return message;
  }
};

export { logoutUser, getUser };
