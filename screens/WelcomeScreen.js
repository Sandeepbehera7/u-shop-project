import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import logo from '../assets/logo.jpg'; 

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to Our Store!</Text>
      <ButtonComponent kind="primary" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </ButtonComponent>
      <ButtonComponent kind="secondary" onPress={() => navigation.navigate('RegisterScreen')}>
        Register
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WelcomeScreen;