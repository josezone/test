import { AxiosError, AxiosInstance } from "axios";

function onFulfilled(config: any): Promise<any> {
  const jwt = localStorage.getItem('jwToken');
  config.headers = {...config.headers, Authorization: `Bearer ${jwt}`}
  return Promise.resolve(config);
}

function onRejected(error: AxiosError): Promise<any> {
  return Promise.reject(error);
}

export function requestInterceptors(apis: AxiosInstance): number {
  return apis.interceptors.request.use(onFulfilled, onRejected);
}

export default requestInterceptors;
