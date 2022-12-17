import { createStore, createHook } from 'react-sweet-state';
import { LOCAL_STORAGE_KEY } from '~/constants/localStorage.constants';
import { getFromLocalStorage } from '~/helpers/base.helper';
import { addProductToCart } from './cart.action';

const initialState = {
  products: getFromLocalStorage(LOCAL_STORAGE_KEY.CART_PRODUCT_KEY) || [],
  count: Number(getFromLocalStorage(LOCAL_STORAGE_KEY.CART_COUNT_KEY)) || 0,
};

const Store = createStore({
  initialState,
  actions: {
    addProductToCart,
  },
  name: 'cart',
});

const useCart = createHook(Store);
export default useCart;
