import axios from "axios";

const API = process.env.EXPO_PUBLIC_API_URL;

const createUser = async (data) => {
  try {
    const response = await axios.post(`${API}/api/users`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    const message = e.response.data;
    return message;
  }
};

const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API}/api/users/login`, data);
    return response.data;
  } catch (e) {
    const message = e.response.data;
    return message;
  }
};

export { createUser, loginUser };
