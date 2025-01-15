export const getItem = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

export const setItem = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToLocalStorage = (itemId) => {
  const cart = getItem();
  if (!cart.includes(itemId)) {
    cart.push(itemId);
    console.log(cart);
    setItem(cart);
  }
};
