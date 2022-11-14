import axios from 'axios';


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_API_URL,
  responseType: 'json',
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_API_KEY
  },
});


export default apiClient;
