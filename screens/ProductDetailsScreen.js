import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductDetailsComponent from '../components/ProductDetailsComponent';

const ProductDetailsScreen = ({ route }) => {
  const { productData } = route.params;

  return (
    <View style={styles.container}>
      <ProductDetailsComponent productData={productData} />
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

export default ProductDetailsScreen;