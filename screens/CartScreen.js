import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CartSummaryComponent from '../components/CartSummaryComponent';
import CartContext from '../components/CartContext';

const CartScreen = () => {
  const { state } = useContext(CartContext);
  const totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <CartSummaryComponent cartItems={state.cartItems} totalPrice={totalPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default CartScreen;