import { useSelector } from 'react-redux';
import API, { getAuthHeader } from '~/services/axiosClient';
import { selectAuthState } from '~/stores/auth/authSlice';
import useCart from '~/stores/cart';

const useCartHook = () => {
  const authState = useSelector(selectAuthState);
  const signedIn = authState.signedIn;
  const [{ count }, { addProductToCart }] = useCart();

  const calculateCartBill = async () => {
    if (signedIn) {
      return API.post({
        url: '/api/bill/calc',
        headers: { ...getAuthHeader() },
        body: {
          cart: null,
          address: {
            province: '',
            district: '',
            address: '',
          },
          discountCode: '',
        },
      });
    }
  };

  const addToCart = async () => {};

  return {
    calculateCartBill,
    cartCount: count,
  };
};

export default useCartHook;
