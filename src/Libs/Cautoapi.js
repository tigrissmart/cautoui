import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': "application/json",
  },
})

//if jwt token has been set please comment out the following code 
/*

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
*/
export default instance;