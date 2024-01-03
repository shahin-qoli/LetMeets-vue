const baseUrl =  "http://192.168.142.128:3000"//"https://letmeets.com" //process.env.VUE_APP_BACKEND_URL
import axios from 'axios';
export const finAgent = axios.create({

  baseURL: `${baseUrl}/api`
}
);

// Request interceptor for API calls
finAgent.interceptors.request.use(
    async config => {

      config.headers = { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json'       
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });