import { API_URL } from '~/constants/api.constant';
import { CATEGORY_MODEL } from '~/models/category.model';
import API from './axiosClient';
import { ReturnListResponse } from './response.interface';

export const getCategories = async () => {
  return await API.get<{ data: ReturnListResponse<CATEGORY_MODEL> }>({
    url: API_URL.CATEGORY_LIST,
  });
};
