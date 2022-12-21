import API, { getAuthHeader } from '~/services/axiosClient';
import useAuth from '~/stores/auth';
import useCart from '~/stores/cart';

type AddToCartPayload = {
  _id: string;
  color: string;
  quantity: number;
};

const useCartHook = () => {
  const [{ signedIn }] = useAuth();
  const [{ count }, actionCart] = useCart();

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

  const addToCart = async (payload: AddToCartPayload) => {
    if (signedIn) {
      await API.post({
        url: '/api/users/pushCart',
        headers: { ...getAuthHeader() },
        body: { ...payload },
      });

      return;
    }
    console.log('go here');
    actionCart.addProductToCartLocal(payload);
  };

  return {
    calculateCartBill,
    cartCount: count,
    addToCart,
  };
};

export default useCartHook;
