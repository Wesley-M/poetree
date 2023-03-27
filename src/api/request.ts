/**
 * This file contains the axios instance that will be used to make requests to the API
*/

import axiosLib from 'axios';
import { getApiURL } from '../environment/config';

let request = axiosLib.create({
  baseURL: getApiURL()
});

/**
 * This axios response interceptor will run after each response
 * */
request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

/**
 * Get an error code from an axios error
 */
const getErrorCode = (error: unknown) => {
  if (axiosLib.isAxiosError(error)) return error.response?.status;
};

export { request, getErrorCode };