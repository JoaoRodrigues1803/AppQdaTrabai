import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground} from 'react-native';
import fundoApp from "../assets/fundoApp.png"
import Calendar from './calendar'; // Caminho para o arquivo Calendar.js

export default function Calendario() {
  return ( 

    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
        
    >
      <SafeAreaView style={styles.container}>
        <Calendar />        
      </SafeAreaView>
  

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});