// screens/ProductListScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductListComponent from '../components/ProductListComponent';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const ProductListScreen = ({ navigation }) => {
  const products = [
    { id: 1, title: 'Debut HRX Audio Buds', price: 10.99, rating: 4.5, image: product1 },
    { id: 2, title: 'Lenovo Legion 7i Gen 9,Gaming laptop', price: 80000.00, rating: 4.0, image: product2 },
    { id: 3, title: 'nubia red magic 9 pro', price: 56000.00, rating: 4.8, image: product3 },
    { id: 4, title: 'VersionTech KOTION EACH G2000 gaming headphone', price: 4200.00, rating: 5.0, image: product4 },
  ];

  return (
    <View style={styles.container}>
      <ProductListComponent products={products} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default ProductListScreen;