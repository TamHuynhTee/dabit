export const API_URL = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REGISTER: '/api/auth/register',
  PROFILE: '/api/auth/profile',
  CATEGORY_LIST: '/api/category/list',
  CATEGORY_READ: '/api/category/read',
  PRODUCT_LIST: '/api/product/list',
  PRODUCT_READ: '/api/product/read',
  PROVINCE: '/api/location/province',
  DISTRICT: (proCode: string) => `/api/location/district/${proCode}`,
  WARD: (disCode: string) => `/api/location/ward/${disCode}`,
};
