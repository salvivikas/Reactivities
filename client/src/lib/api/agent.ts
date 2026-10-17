import axios from "axios";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

agent.interceptors.request.use(async (response) => {
  try {
    console.log("Request Interceptor");
    sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
});
export default agent;
