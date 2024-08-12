import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCardComponent from './ProductCardComponent';

const ProductListComponent = ({ products, navigation }) => {
  return (
    <View style={styles.container}>
      {products.map((product, index) => (
        <ProductCardComponent 
          key={index} 
          productData={product} 
          onPress={() => navigation.navigate('ProductDetailsScreen', { productData: product })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ProductListComponent;