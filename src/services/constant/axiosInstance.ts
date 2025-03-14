import axios from "axios";
import { BASE_URL } from "./apiConfig";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Gắn token vào headers
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const accessToken = localStorage.getItem("childcareToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Xử lý lỗi từ API
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Nếu lỗi 401 -> Tự động đăng xuất
      if (status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("childcareToken");
        window.location.href = "/login"; // Redirect về trang login
      }

      // Nếu lỗi 403 (Không có quyền truy cập)
      if (status === 403) {
        toast.error("You do not have permission to access this resource.");
      }

      // Hiển thị lỗi từ API nếu có
      if (data?.message) {
        toast.error(data.message);
      }
    } else {
      // Lỗi không có response (lỗi mạng, server không phản hồi)
      toast.error("Network error. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
