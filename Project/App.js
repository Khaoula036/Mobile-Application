import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import AcceuilScreen from './Screens/Authentification/AcceuilScreen';
import AuthentificationScreen from './Screens/Authentification/AuthentificationScreen';
import MailScreen from './Screens/Authentification/MailScreen';
import MotDePasseScreen from './Screens/Authentification/MotDePasseScreen';
import ProfilScreen from './Screens/Authentification/ProfilScreen';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View >
      <Card>
        <AuthentificationScreen/>
      </Card>
    </View>
  );
}


