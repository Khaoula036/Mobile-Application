import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Pictogramme from './Pictogramme';
import Boutton from './Button';
import BoutonRetour from './BoutonRetour';


import { Card } from 'react-native-paper';

//BoutonRetour: à la page ScreenCategorie1/2/3 (sous catégorie)

export default function ScreenPictogramme() {
  return (
     <View >

      <Card>
       <BoutonRetour/>
      </Card>
      
       <Pictogramme/>
     
    </View>
  );
}



