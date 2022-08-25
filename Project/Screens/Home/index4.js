import { Image, TouchableOpacity, Alert } from 'react-native';
//import test from './assets/snack-icon.png';
const index4: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headline}>Se déplacer</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux partir au Supermarché')
            }}>
            <Image
              source={require('./assets/Supermarche.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux partir au Toilettes')
            }}>
            <Image
              source={require('./assets/Toilettes.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux aller dormir')
            }}>
            <Image
              source={require('./assets/Lit.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Je veux partir à l'école")
            }}>
            <Image
              source={require('./assets/Ecole.png')}
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

export default index4;