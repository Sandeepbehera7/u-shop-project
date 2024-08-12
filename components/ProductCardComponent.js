// components/ProductCardComponent.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCardComponent = ({ productData, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: productData.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{productData.title}</Text>
        <Text style={styles.price}>${productData.price.toFixed(2)}</Text>
        <Text style={styles.rating}>Rating: {productData.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  details: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    color: '#6200ea',
    fontSize: 14,
  },
  rating: {
    color: '#ff9800',
    fontSize: 12,
  },
});

export default ProductCardComponent;