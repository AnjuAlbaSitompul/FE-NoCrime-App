import axios from "axios";

const API = process.env.EXPO_PUBLIC_API_URL;
const refreshToken = async () => {
  try {
    const response = await axios.get(`${API}/api/refreshToken`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export { refreshToken };
