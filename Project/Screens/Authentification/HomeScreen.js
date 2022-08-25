import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import LogoS from '../LogoS';
import Acces from '../../components/Acces';
//<ion-icon name="chatbubbles-outline"></ion-icon> S'exprimer
//<ion-icon name="game-controller-outline"></ion-icon> jouer
//<ion-icon name="walk-outline"></ion-icon>  se deplacer
//<ion-icon name="fast-food-outline"></ion-icon>

function HomeScreen({ navigation }) {
  return (
    <View>
      <LogoS />
      <Text style={styles.headline}> Helppicto</Text>
      <Text style={styles.title}> Demande</Text>
      <View style={styles.container}>
        <Acces
          title="S'exprimer"
          onPress={() => navigation.navigate("S'exprimer")}
          iconName="chatbubbles-outline"
        />
      </View>
      <View style={styles.container}>
        <Acces
          title="Se nourrire"
          onPress={() => navigation.navigate("Se nourrir")}
          iconName="fast-food-outline"
        />
      </View>
      <View style={styles.container}>
        <Acces
          title="Jouer"
         onPress={() => navigation.navigate("Jouer")}
         iconName="game-controller-outline"
        />
      </View>
      <View style={styles.container}>
        <Acces
          title="Se déplacer"
          onPress={() => navigation.navigate("Se deplacer")}
          iconName="walk-outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold', //gras
    fontSize: 60, //taille +
    marginTop: -100, //trans haut -
    width: 500, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },

  title: {
    margin: 24,
    marginTop: 38,
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'palevioletred',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
});

export default HomeScreen;
