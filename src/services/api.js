import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'http://192.168.1.81:3333',
});

api.interceptors.request.use(async (config) => {
  // const token = await localStorage.getItem('@Pizzaria:token');
  const { token } = store.getState().login;
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
    // console.tron.log(headers.Authorization);
  }

  return { ...config, headers };
});
export default api;
