// components/ButtonComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ kind, onPress, children }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[kind]]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
  },
  primary: {
    backgroundColor: '#6200ea',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  secondary: {
    backgroundColor: '#03dac6',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ButtonComponent;