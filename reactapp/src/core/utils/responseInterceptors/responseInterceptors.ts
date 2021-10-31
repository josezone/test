import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

function onFulfilled(response: AxiosResponse): Promise<any> {
  if (String(response.status).startsWith('2')) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}

function onRejected(error: AxiosError): Promise<any> {
  return Promise.reject(error);
}

export function responseInterceptors(apis: AxiosInstance): number {
  return apis.interceptors.response.use(onFulfilled, onRejected);
}

export default responseInterceptors;