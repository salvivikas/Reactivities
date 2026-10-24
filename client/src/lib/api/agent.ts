import axios from "axios";
import { store } from "../store/store";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.request.use(async (config) => {
  store.UIStore.isBusy();
  return config;
});

agent.interceptors.response.use(
  async (response) => {
    try {
      await sleep(1000);
      return response;
    } finally {
      store.UIStore.isIdle();
    }
  },
  (error) => {
    store.UIStore.isIdle();
    return Promise.reject(error);
  },
);
export default agent;
