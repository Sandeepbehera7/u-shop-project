import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const fetchUserProfile = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Mrigesh Mohanty',
        email: 'mrigesh007@gmail.com',
        phone: '+91-82607 XXXXX',
        profilePicture: '../assets/profileImg.jpg', 
      });
    }, 1000);
  });
};

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserProfile = async () => {
      const userData = await fetchUserProfile();
      setUser(userData);
      setLoading(false);
    };

    getUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      
      {/* Profile Picture */}
      <Image
        source={{ uri: user.profilePicture }}
        style={styles.profilePicture}
      />

      {/* User Details Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{user.name}</Text>
        <Text style={styles.cardText}>Email: {user.email}</Text>
        <Text style={styles.cardText}>Phone: {user.phone}</Text>
      </View>

      <ButtonComponent kind="primary" onPress={() => navigation.navigate('EditProfileScreen')}>
        Edit Profile
      </ButtonComponent>
      <ButtonComponent kind="secondary" onPress={() => navigation.navigate('OrderHistoryScreen')}>
        Order History
      </ButtonComponent>
      <ButtonComponent kind="primary" onPress={() => navigation.navigate('SettingsScreen')}>
        Settings
      </ButtonComponent>
      <ButtonComponent kind="secondary" onPress={() => navigation.navigate('WishlistScreen')}>
        Wishlist
      </ButtonComponent>
      <ButtonComponent kind="secondary" onPress={() => navigation.navigate('ProductListScreen')}>
        View Products
      </ButtonComponent>
      <ButtonComponent kind="primary" onPress={() => navigation.navigate('CartScreen')}>
        View Cart
      </ButtonComponent>
      <ButtonComponent kind="secondary" onPress={() => navigation.navigate('LoginScreen')}>
        Logout
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePicture: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: '#007BFF', 
    alignSelf: 'center', 
    marginBottom: 20, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
