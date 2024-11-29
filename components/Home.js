import {useFonts} from 'expo-font'
import { useState,} from 'react';
import { StyleSheet, Text, View, Modal, ImageBackground, Pressable, Button, Image} from 'react-native';
import fundoApp from '../assets/fundoApp.png';
import batidas from '../assets/batidas.png'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    'Questrial-Regular': require('../assets/fonts/Questrial/Questrial-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <View />; // or any loading indicator
  }
    return (
    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
    >
      <View style={styles.container}>
        <View style={styles.saudacao}>
          <Text style={styles.saudacao}>OLÁ, VAMOS VER COMO ESTÁ A SAÚDE DO SEU PET!!</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.txtBpm}>
          bmp
        </Text>
        <Text style={styles.bpm}>
          100
        </Text>
        <Text style={{color:"white", fontWeight:"bold", fontSize:12, marginBottom:10}}>
          batimento Regular
        </Text>
        <Image
          source={batidas}
          style={{width:"100%", height:150}}
        />
        </View>
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
  txtBpm:{
    marginTop:20,
    fontSize:12,
    color:"white",
    fontWeight:'bold'
  },
  bpm:{
    fontSize:70,
    color: "white",
    fontWeight:'250',
    marginTop:-20
  },
  saudacao:{
    marginTop:10,
    fontSize:18,
    fontWeight:'bold',
    padding:20,
    color:"white",
  },
  container: {
    flex: 1,
    backgroundColor: '#444444f4'
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
