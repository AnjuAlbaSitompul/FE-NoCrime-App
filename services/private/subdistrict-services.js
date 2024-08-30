import axiosInstance from "../../axios/axiosInstance";

const getSubdistrict = async () => {
  try {
    const response = await axiosInstance.get("/api/subdistricts");
    return response.data;
  } catch (e) {
    const message = e.response.data;
    return message;
  }
};

export { getSubdistrict };
