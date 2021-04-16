export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  /* 
    cartItems : [
      {
        action.payload (contenu du produit avec l'id, le nom etc...),
        quantity: 1
      },
      {
        action.payload (contenu du produit avec l'id, le nom etc...),
        quantity: 2
      }
    ]

  */
}