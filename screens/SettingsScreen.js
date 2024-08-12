import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const SettingsScreen = () => {
  // Sample data for settings options
  const settingsOptions = [
    { id: '1', title: 'Account Settings' },
    { id: '2', title: 'Payment Methods' },
    { id: '3', title: 'Shipping Address' },
    { id: '4', title: 'Notifications' },
    { id: '5', title: 'Privacy Settings' },
    { id: '6', title: 'Help & Support' },
    { id: '7', title: 'About Us' },
    { id: '8', title: 'Logout' },
  ];

  // Function to handle option click
  const handleOptionPress = (title) => {
    Alert.alert(`You clicked on ${title}`); 
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity 
      style={styles.optionContainer} 
      onPress={() => handleOptionPress(item.title)} 
    >
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <FlatList
        data={settingsOptions}
        renderItem={renderOption}
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
  optionContainer: {
    padding: 15,
    marginVertical: 5,
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
  optionText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SettingsScreen;