import axios, { AxiosInstance } from 'axios';

const BASE_URL_MANGO = 'https://api.skilla.ru/mango';
const BASE_URL_PARTNERSHIP = 'https://api.skilla.ru/partnership';
const REQUEST_TIMEOUT = 5000;

export const createMangoAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL_MANGO,
    timeout: REQUEST_TIMEOUT,
  });

export const createPartnershipAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL_PARTNERSHIP,
    timeout: REQUEST_TIMEOUT,
  });
