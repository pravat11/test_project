import axios from 'axios';

import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if (!accessToken) {
    return request;
  }

  const authorizationHeader = `Bearer ${accessToken}`;

  request.headers['Authorization'] = authorizationHeader;

  return request;
});

http.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response &&
      error.response.config &&
      error.response.config.url === `${config.baseUrl}${config.apis.REFRESH_TOKEN}`
    ) {
      console.log('Refresh token also expired');

      return Promise.reject(error);
    }

    const errorCode = error.response && error.response.data && error.response.data.code;

    // Handle 401 Unauthorized case by refreshing the access token.
    if (errorCode === 401) {
      // Get stored username and refresh token.
      const username = await localStorage.getItem('USER_NAME');
      const refreshToken = await localStorage.getItem('REFRESH_TOKEN');

      // Request new access token
      const { data } = await http.post(config.apis.REFRESH_TOKEN, { username, refreshToken });

      const newAccessToken = data.data.accessToken;

      // Save new access token
      localStorage.setItem('ACCESS_TOKEN', newAccessToken);

      // The request status is preserved in error.config
      const originalRequest = error.config;

      // Add the new token in the header
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

      // Resume the request with new token
      return http.request(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default http;
