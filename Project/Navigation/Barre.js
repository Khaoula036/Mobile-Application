import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Authentification/HomeScreen';
import ParametreProfilScreen from '../Screens/Authentification/ParametreProfilScreen';
import StackNav from './StackNav';

const tab = createBottomTabNavigator();


const Barre = () => {
return (
      <tab.Navigator
        screenOptions={({  route } ) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;


            if (route.name == 'Home') {
              
              iconName = 'home';
            } else if (route.name == 'Parametre') {
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={25} color='darkblue' />;
          },
        })}>
        <tab.Screen options={{headerShown: false}} name="Home" component={StackNav} />
        <tab.Screen options={{headerShown: false}} name="Parametre" component={ParametreProfilScreen} />
      </tab.Navigator>
   );  

};

export default  Barre;

