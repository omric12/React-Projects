export const addItemToCart = (cartItems, newItem) => {
  if (cartItems.find((cartItem) => cartItem.id === newItem.id)) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const reduceItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
