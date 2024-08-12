import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInputComponent placeholder="Username" value={username} onChange={setUsername} />
      <TextInputComponent placeholder="Email" value={email} onChange={setEmail} />
      <TextInputComponent placeholder="Password" value={password} onChange={setPassword} />
      <ButtonComponent kind="primary" onPress={() => navigation.navigate('ProfileScreen')}>
        Register
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

export default RegisterScreen;