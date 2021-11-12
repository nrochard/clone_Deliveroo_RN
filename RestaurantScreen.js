import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LottieView from "lottie-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground,SearchBar, ScrollView} from 'react-native';

export default function RestaurantScreen() {
  return (
    <View style={styles.container}>
    <Text>Welcome to MySocialNetwork!</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  