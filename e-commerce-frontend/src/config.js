import dotenv from 'dotenv';

dotenv.config();

const config = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  apis: {
    LOGIN: '/user/login',
    REFRESH_TOKEN: '/token/refresh',
    GET_PRODUCT_DETAILS: '/products'
  }
};

export default config;
