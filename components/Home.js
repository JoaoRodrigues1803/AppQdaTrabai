import { useState } from 'react';
import { StyleSheet, Text, View, Modal, ImageBackground, Pressable, Button} from 'react-native';
import fundoApp from '../assets/fundoApp.png';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// const [value, setValue] = useState(0);
// let textBpmColor = 'black'; // Cor padrão

// // Verificando o valor numérico e alterando a cor com base no valor
// if (value <= 120) {
//   textColor = 'green'; // Se o valor for 10 ou mais
// } else if (value < 70) {
//   textColor = 'red'; // Se o valor for 5 ou mais, mas menor que 10
// } else {
//   textColor = 'red'; // Se o valor for menor que 5
// }

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
    return (
    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
    >
      <View style={styles.saudacao}>
        <Text style={styles.saudacao}>Ola, vamos ver como esta a saúde de seu pet!!</Text>
      </View>
      <View style={{alignItems:'flex-end', marginRight:30}}>
      <Text style={styles.bpm}>
        100
      </Text>
      </View>









      {/* <SafeAreaProvider>
        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Button
              title="Go to Details"
              onPress={() => {
                navigation.navigate('Calendario'); // Navega para a tela "Details"
                setModalVisible(false); // Fecha o modal ao navegar
              }}
            />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
          </Pressable>
        </SafeAreaView>
      </SafeAreaProvider> */}
    </ImageBackground>

  );
}



const styles = StyleSheet.create({
  bpm:{
    fontSize:70,
    color:'green',
    fontWeight:'bold',
    marginTop:-20
  },
  saudacao:{
    marginTop:20,
    fontSize:18,
    fontWeight:'bold',
    padding:20
  },
  container: {
    flex: 1,
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  },
  Titulo:{
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 150,
    color:'#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign:'left'
  },
  modalView: {
    textAlign:'left',
    marginTop: 0,
    margin: 0,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 0,
  },
  button: {
    padding: 10,
    elevation: 0,
  },
  buttonClose: {
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  modalText: {
    marginBottom: 15,
  },
});
