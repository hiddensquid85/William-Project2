// axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  // Reset progress on new request
  if (config.onDownloadProgress) {
    config.onDownloadProgress({
      loaded: 0, total: 1,
      bytes: 0,
      lengthComputable: false
    });
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;