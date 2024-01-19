import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-44-205-32-103.compute-1.amazonaws.com:8080/api",
  timeout: 10000, // Set timeout to 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error.response);
  }
);

export default instance;
