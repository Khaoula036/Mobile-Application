import { Image, TouchableOpacity, Alert } from 'react-native';
//import test from './assets/snack-icon.png';
const index3: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headline}>Jouer</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux jouer aux Jeux Vidéos')
            }}>
            <Image
              source={require('./assets/JeuxVideo.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('je veux jouer du Basketball')
            }}>
            <Image
              source={require('./assets/Basketball.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux faire de la course')
            }}>
            <Image
              source={require('./assets/Course.png')}
              style={{ resizeMode: 'contain', width: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Je veux écouter la Musique')
            }}>
            <Image
              source={require('./assets/Musique.png')}
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

export default index3;