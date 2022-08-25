import { Image, TouchableOpacity, Alert } from 'react-native';
//import test from './assets/snack-icon.png';
const index1: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headline}>S'exprimer</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Oui')
            }}>
            <Image
              source={require('./assets/Oui.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Non')
            }}>
            <Image
              source={require('./assets/Non.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux encore')
            }}>
            <Image
              source={require('./assets/Encore.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Aidez-moi svp!')
            }}>
            <Image
              source={require('./assets/AideMoi.png')}
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

export default index1;