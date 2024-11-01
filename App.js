import React from "react";
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import home from './components/Home';
import calendario from './components/Calendario';
import chat from "./components/Contato";
import config from "./components/Sobre";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#00adef'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#00adef',
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#00adef",
      }}>
        <Abas.Screen
          name="Início"
          component = { home }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />

        <Abas.Screen
          name="Agenda"
          component = { calendario }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="calendar"  color={ color } size={ 20 }/>
            ),
          }}
        />

        <Abas.Screen
          name="Bate-Papo "
          component = { chat }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="message" color={ color } size={ 20 }/>
            ),
          }}
        />
        <Abas.Screen
          name="Configurações "
          component = { config }
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" color={ color } size={ 20 }/>
            ),
          }}
        />
      
      </Abas.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});