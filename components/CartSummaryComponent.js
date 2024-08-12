import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartSummaryComponent = ({ cartItems, totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Summary</Text>
      {cartItems.map(item => (
        <Text key={item.id}>{item.title} - {item.quantity} pcs</Text>
      ))}
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
  },
});

export default CartSummaryComponent;