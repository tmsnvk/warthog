// external packages.
import axios, { AxiosInstance } from 'axios';
// config utilities.
import { BACKEND_ROOT } from '@constants/constants';

const axiosConfig: AxiosInstance = axios.create({
  baseURL: String(BACKEND_ROOT),
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Origin, Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  },
});

export default axiosConfig;
