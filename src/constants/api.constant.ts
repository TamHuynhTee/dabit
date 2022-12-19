export const API_URL = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  PROFILE: '/api/auth/profile',
  CATEGORY_LIST: '/api/category/list',
  CATEGORY_READ: '/api/category/read',
  PROVINCE: '/api/location/province',
  DISTRICT: (proCode: string) => `/api/location/district/${proCode}`,
  WARD: (disCode: string) => `/api/location/ward/${disCode}`,
};
