import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  headers: {
    "content-type": "application/json",
  },
  timeout: 30000,
};

const client = axios.create(axiosConfig);

export const fetch = (endpoint: string) => {
  return new Promise((resolve, reject) => {
    client
      .get(endpoint)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
