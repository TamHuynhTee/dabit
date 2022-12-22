import { LocalCartPayload } from '~/interfaces/cart.interface';
import API, { getAuthHeader } from '~/services/axiosClient';
import useAuth from '~/stores/auth';
import useCart from '~/stores/cart';

const useCartHook = () => {
  const [{ signedIn }] = useAuth();
  const [{ count, products }, actionCart] = useCart();

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

  const addToCart = (payload: LocalCartPayload) => {
    if (signedIn) {
      actionCart.addProductToCartAuth(payload);
      return;
    }
    actionCart.addProductToCartLocal(payload);
  };

  const changeItemQuantity = (payload: LocalCartPayload) => {
    if (signedIn) {
      actionCart.changeAuthCartItemQuantity(payload);
      return;
    }
    actionCart.changeLocalCartItemQuantity(payload);
  };

  const removeCartItem = (product: string) => {
    if (signedIn) {
      actionCart.removeAuthCartItem(product);
      return;
    }

    actionCart.removeLocalCartItem(product);
  };

  const clearCart = () => {
    if (!signedIn) {
      actionCart.clearCart();
    }
  };

  return {
    calculateCartBill,
    cartCount: count,
    cartProducts: products,
    addToCart,
    changeItemQuantity,
    removeCartItem,
    clearCart,
  };
};

export default useCartHook;
