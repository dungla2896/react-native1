import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Api login :      https://apiv2.ltservices2.ovh/gate/{{login}}.json
// Api signUp:      https://apiv2.ltservices2.ovh/pool/.json?new_key_signup=true

const axiosClient = axios.create({
  baseURL: 'https://apiv2.ltservices2.ovh',
  //baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;