import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9808', // Set your base URL
  timeout: 5000, // Define the request timeout
  headers: {
    'Content-Type': 'application/json', // Set the default content type
  },
});

// // Set up an interceptor for request configuration
// api.interceptors.request.use(
//   (config) => {
//     // You can modify the request config here (e.g., add authentication token)
//     return config;
//   },
//   (error) => {
//     // Handle request errors
//     return Promise.reject(error);
//   }
// );

// // Set up an interceptor for response handling
// api.interceptors.response.use(
//   (response) => {
//     // You can handle successful responses here
//     return response.data;
//   },
//   (error) => {
//     // Handle error responses
//     return Promise.reject(error);
//   }
// );

export default api;