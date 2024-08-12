import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailsComponent = ({ productData }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: productData.image }} style={styles.image} />
      <Text style={styles.title}>{productData.title}</Text>
      <Text style={styles.price}>${productData.price.toFixed(2)}</Text>
      <Text style={styles.description}>{productData.description}</Text>
      <Text style={styles.rating}>Rating: {productData.rating}</Text>
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
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#6200ea',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  rating: {
    marginTop: 10,
    color: '#ff9800',
  },
});

export default ProductDetailsComponent;