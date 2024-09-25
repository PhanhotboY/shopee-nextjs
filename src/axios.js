import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;

    return data;
  },
  (error) => {
    const { response } = error;

    return Promise.reject(
      new Error(
        response.data.message || `${response.status}: ${response.statusText}`
      )
    );
  }
);

export default instance;
