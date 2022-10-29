import axios, {AxiosRequestConfig} from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  responseType: 'json',
});

interface ServiceError {
    endpoint: string;
    message: string;
    status: number;
}

export async function createRequest<T>(cfg: AxiosRequestConfig) {
  const res = await client.request(cfg);

  if (res === undefined || !(res.status >= 200 && res.status < 300)) {
    let error: ServiceError;
    if (res !== undefined) {
      error = {
        endpoint: cfg.url,
        message: res.data?.message || 'Not specified.',
        status: res.status,
      };
    } else {
      error = {
        endpoint: cfg.url,
        message: 'Not specified.',
        status: 0,
      };
    }

    return Promise.reject(error);
  }

  return res.data as T;
}

export {getGames} from './games';
