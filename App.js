import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
// import { Icon } from 'react-native-vector-icons/Icon';
import home from './components/Home'
import config from './components/Sobre'
import entretenimento from './components/entretenimento.js'
import calendario from './components/Calendario'
import login from './components/Login'
import cadastrar from './components/Cadastrar'

// Telas para o Drawer Navigator


// function Login() {
//   return (
//     <ImageBackground style={{container: {
//       flex: 1,
//       backgroundColor: '#fff',
//     },}} imageStyle={{
//       height: '100%' ,
//       width: '100%'
//     }}
//       source={fundoApp}
//     >
//     </ImageBackground>
//   );
// }

// Criando o Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown:false,
      
      tabBarStyle: {
        position:'absolute',
        bottom: 10,
        width: '80%',
        marginLeft:35,
        backgroundColor:'#00adef',
        borderRadius:20,
        borderTopWidth: 0
      },
      tabBarInactiveTintColor: "white",
      }}>

        <Tab.Screen
          name="Início"
          component = { home }
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 18 } />
            ),
          }}
        />

        <Tab.Screen
          name="Agenda"
          component = { calendario }
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="calendar"  color={ color } size={ 18 }/>
            ),
          }}
        />

        <Tab.Screen
          name="Bate-Papo "
          component = { entretenimento }
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => (
              <Entypo name="message" color={ color } size={ 18 }/>
            ),
          }}
        />
    </Tab.Navigator>
  );
}

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown:false,
    }}>
       <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          
          drawerLabel: 'Inicio'
        }}
  />
      <Drawer.Screen name="Logar" component={login} />
      <Drawer.Screen name="Cadastrar" component={cadastrar} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
