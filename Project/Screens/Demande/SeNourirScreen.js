import { Image, TouchableOpacity, Alert, ScrollView, SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';

const SeNourirScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headline}>Se nourrir</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux un Jus')
            }}>
            <Image
              source={require('../../assets/Pictos/Jus.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Je veux du l'eau")
            }}>
            <Image
              source={require('../../assets/Pictos/Eau.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux Café')
            }}>
            <Image
              source={require('../../assets/Pictos/Cafe.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux un Sandwitch')
            }}>
            <Image
              source={require('../../assets/Pictos/Sandwich.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
             
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux un Dessert')
            }}>
            <Image
              source={require('../../assets/Pictos/Fruit.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
       
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
   headline: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold', //gras
    fontSize: 60, //taille +
    width: 400, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },
});

export default SeNourirScreen;