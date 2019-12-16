export const addItemToCart = (cartItems, itemToAdd) => {
  const existing = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existing) {
    return cartItems.map(cartItem => {
      if (cartItem.id === itemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === itemToRemove.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1
      };
    } else {
      return cartItem;
    }
  });
};
