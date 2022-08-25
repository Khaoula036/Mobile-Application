import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import {Center, Pressable } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons"; 
import StackNav from './StackNav';
import ParametreProfilScreen from '../Screens/Authentification/ParametreProfilScreen';
import HomeScreen from '../Screens/Authentification/HomeScreen';
import AcceuilScreen from '../Screens/Authentification/AcceuilScreen';



const Tab = createBottomTabNavigator();


const BottomNav = () => {
return (
    {/*Home*/},
    <Tab.Navigator backBehavior= "Main" initialRouteName="Main" screenOptions={{ 
        tabBarShowLable: false,
        tabBarStyle:{...styles.tab},
        headerShown:false,
        tabBarHideOnKeyboard:true}}>

        <Tab.Screen name="Main" component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                      <Entypo name="home" size={24} color= 'palevioletred' />
                              ) : (
                                <AntDesign name="home" size={24} color= "black" />
                              )}
            </Center>
           ),
          }}
         />
         {/*Profile*/}
          <Tab.Screen name="Profile" component={ParametreProfilScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                     <FontAwesome name="user" size={24} color= 'palevioletred' />
                              ) : (
                                <AntDesign name="user" size={24} color= "black" />
                              )} 
            </Center>
           ),
          }}
         />
 </Tab.Navigator>
);  

};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: "white",
    height: 60,
    //paddindTop: 5,
  },
});


export default BottomNav;

