import { createStore, createHook } from 'react-sweet-state';
import { LOCAL_STORAGE_KEY } from '~/constants/localStorage.constants';
import { getFromLocalStorage } from '~/helpers/base.helper';
import { addProductToCart, loadCard } from './cart.action';

const initialState = {
  products: getFromLocalStorage(LOCAL_STORAGE_KEY.CART_PRODUCT_KEY) || [],
  count: Number(getFromLocalStorage(LOCAL_STORAGE_KEY.CART_COUNT_KEY)) || 0,
};

export const CartStore = createStore({
  initialState,
  actions: {
    addProductToCart,
    loadCard,
  },
  name: 'cart',
});

const useCart = createHook(CartStore);
export default useCart;
