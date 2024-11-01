import axios from 'axios';

const ApiAxiosCreate = axios.create({
  baseURL: 'http://localhost:3125',
});

ApiAxiosCreate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface CommonResponse<T> {
  body: T;
  status_code: number;
  type: string;
}

class Api {
  async get<T>(path: string, params?: any): Promise<T> {
    return (await ApiAxiosCreate.get<CommonResponse<T>>(path, {params})).data.body;
  }

  async post<T>(path: string, data: any) {
    return (await ApiAxiosCreate.post<CommonResponse<T>>(path, data)).data.body;
  }

  async put(path: string, data: any): Promise<void> {
    await ApiAxiosCreate.put(path, data);
  }

  async delete(path: string): Promise<void> {
    await ApiAxiosCreate.delete(path);
  }
}

const api = new Api();

export { api };
