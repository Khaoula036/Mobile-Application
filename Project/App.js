import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();







// You can import from local files
import AssetExample from './components/AssetExample';
import AcceuilScreen from './Screens/Authentification/AcceuilScreen';
import AuthentificationScreen from './Screens/Authentification/AuthentificationScreen';
import MailScreen from './Screens/Authentification/MailScreen';
import MotDePasseScreen from './Screens/Authentification/MotDePasseScreen';
import ProfilScreen from './Screens/Authentification/ProfilScreen';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import ParametreScreen from './Screens/ParametreScreen';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options= {{ headerShown: false}} name= "Parametre" component={ParametreScreen} />
        <Stack.Screen name= "Home" component={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      
    
  );
}


