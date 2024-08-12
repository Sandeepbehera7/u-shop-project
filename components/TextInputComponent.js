import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#6200ea',
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
  },
});

export default TextInputComponent;