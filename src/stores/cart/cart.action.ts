export const addProductToCart = ({ idProduct, total = 1 }) => {
  return async ({ setState, getState }) => {
    const { products } = getState();
    setState({
      products,
    });
  };
};

export const loadCard = ({ cart, total = 1 }) => {
  return async ({ setState, getState }) => {
    // const { products } = getState();
    setState({
      products: [...cart],
      count: total,
    });
  };
};
