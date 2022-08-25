import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Authentification/HomeScreen';
//import ParametreProfilScreen from '../Screens/Authentification/ParametreProfilScreen';
import SexprimerScreen from '../Screens/Demande/SexprimerScreen';
import SeNourirScreen from '../Screens/Demande/SeNourirScreen';
import SeDeplacerScreen from '../Screens/Demande/SeDeplacerScreen';
import JouerScreen from '../Screens/Demande/JouerScreen';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      
      <Stack.Screen name="S'exprimer" component={SexprimerScreen} />
      <Stack.Screen name="Se nourrir" component={SeNourirScreen} />
      <Stack.Screen name="Se deplacer" component={SeDeplacerScreen} />
      <Stack.Screen name="Jouer" component={JouerScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
