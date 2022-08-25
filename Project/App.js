import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Statusbar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const tab = createBottomTabNavigator();

//Ecran d'acceuil
import AcceuilScreen from './Screens/Authentification/AcceuilScreen';
//Ecrans d'authentification
import AuthentificationScreen from './Screens/Authentification/AuthentificationScreen';
import MailScreen from './Screens/Authentification/MailScreen';
import MotDePasseScreen from './Screens/Authentification/MotDePasseScreen';
import ProfilScreen from './Screens/Authentification/ProfilScreen';
//import BottomNav from './Navigation/BottomNav';
import Barre from "./Navigation/Barre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Acceuil"
        screenOptions={{ headerShown: false }}>
        {/*les écrans d'authentification*/}
        <Stack.Screen name="Acceuil" component={AcceuilScreen} />
        <Stack.Screen name="Mail" component={MailScreen} />
        <Stack.Screen name="Pass" component={MotDePasseScreen} />
        <Stack.Screen name="Profile" component={ProfilScreen} />
        <Stack.Screen name="Authentification" component={AuthentificationScreen} />
        <Stack.Screen name="Barre" component={Barre} />
      </Stack.Navigator>
 
    </NavigationContainer>

    
  );
}



