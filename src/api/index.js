import axios from 'axios';

const baseURL = 'https://gpt-server-voao.onrender.com';

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
      }
});


export const updateAxiosHeaders = () => {
  let token = localStorage.getItem('token');
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

updateAxiosHeaders();