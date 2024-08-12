// components/CartContext.js
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_PRODUCT':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;