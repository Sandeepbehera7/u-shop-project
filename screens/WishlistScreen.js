import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const WishlistScreen = () => {
  
  const [savedProducts, setSavedProducts] = useState([
    { id: '1', name: 'Product 1', price: '10000.00' },
    { id: '2', name: 'Product 2', price: '15000.00' },
    { id: '3', name: 'Product 3', price: '20000.00' },
  ]);

  
  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>  {/* Product container style */}
      <Text style={styles.productName}>{item.name}</Text>  {/* Product name style */}
      <Text style={styles.productPrice}>{item.price}</Text>  {/* Product price style */}
    </View>
  );

  return (
    <View style={styles.container}>  
      <Text style={styles.title}>Wishlist</Text> 
      <FlatList
        data={savedProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold', 
  },
  productContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,  
  },
  productName: {
    fontSize: 18,
    fontWeight: '600', 
  },
  productPrice: {
    fontSize: 16,
    color: '#888', 
  },
});

export default WishlistScreen;