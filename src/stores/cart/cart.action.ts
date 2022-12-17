export const addProductToCart = ({ idProduct, total = 1 }) => {
  return async ({ setState, getState }) => {
    const { products } = getState();
    setState({
      products,
    });
  };
};
