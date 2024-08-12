import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInputComponent placeholder="Username" value={username} onChange={setUsername} />
      <TextInputComponent placeholder="Password" value={password} onChange={setPassword} />
      <ButtonComponent kind="primary" onPress={() => navigation.navigate('ProfileScreen')}>
        Login
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});

export default LoginScreen;