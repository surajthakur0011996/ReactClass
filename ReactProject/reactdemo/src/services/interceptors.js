import axios from "axios";

export const axiosinstance=axios.create();

axiosinstance.interceptors.request.use(function (config) {
    // Do something before request is sent
console.log(config);
    config.baseURL="https://dummyjson.com/"
    config.headers={
        test:"hello"
    }
    return config;
  }, function (error) {
    console.log(error)
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    console.log(error)
    if(error?.response?.status===400){
        alert("error")
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });