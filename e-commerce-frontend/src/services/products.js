import config from '../config';
import http from '../utils/http';

export async function getAllProducts() {
  const { data } = await http.get(config.apis.GET_PRODUCT_DETAILS);

  return data.data;
}
