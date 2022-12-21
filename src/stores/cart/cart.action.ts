import { LOCAL_STORAGE_KEY } from '~/constants/localStorage.constants';
import { saveToLocalStorage } from '~/helpers/base.helper';
import { State } from '.';

type Actions = { setState: any; getState: () => State; dispatch: any };

export const addProductToCartLocal = (product) => {
  return async ({ setState, getState }: Actions) => {
    const { products, count } = getState();
    const { _id, color, quantity = 1 } = product;

    let _newCount = count;
    const cloneCart = [...products];

    const findProduct = products.find(
      (pro) => pro?._id === _id && pro?.color === color
    );

    if (!findProduct) {
      _newCount++;
      cloneCart.push(product);
    } else {
      const productIndex = products.findIndex(
        (pro) => pro?._id === _id && pro?.color === color
      );
      cloneCart[productIndex] = {
        ...findProduct,
        quantity: findProduct.quantity + quantity,
      };
    }

    saveToLocalStorage(LOCAL_STORAGE_KEY.CART_COUNT_KEY, _newCount);
    saveToLocalStorage(LOCAL_STORAGE_KEY.CART_PRODUCT_KEY, cloneCart);

    setState({
      products: cloneCart,
      count: _newCount,
    });
  };
};

export const loadCard = ({ cart, total = 1 }) => {
  return async ({ setState }) => {
    setState({
      products: [...cart],
      count: total,
    });
  };
};
