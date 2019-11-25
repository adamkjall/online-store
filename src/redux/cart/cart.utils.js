export const addItemToCart = (cartItems, itemToAdd) => {
  const existing = cartItems.find(item => item.id === itemToAdd.id);

  if (existing) {
    return cartItems.map(item => {
      if (item.id === itemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existing = cartItems.find(item => item.id === itemToRemove.id);

  if (existing) {
    return cartItems.filter(item => {
      if (item.id === itemToRemove.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } 
      }
      return item.quantity
    })
  }

  return [...cartItems]
}
