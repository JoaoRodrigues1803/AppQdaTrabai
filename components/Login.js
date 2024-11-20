import React, { useState } from 'react'; // Importando useState
import { StyleSheet, Text, View, Modal, ImageBackground, Pressable, Button, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import fundoApp from '../assets/fundoApp.png';
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import Cad from './Cadastrar'


export default function Login({ navigation }) {
  // const [text, onChangeText] = useState(''); // Use useState dentro do componente

  return ( 
    <ImageBackground 
      style={styles.container} 
      imageStyle={{ height: '100%', width: '100%' }}
      source={fundoApp}
    >

      <View style={styles.viewMestra}>
        <Text>BOM DIA</Text>
        <SafeAreaProvider>
          <SafeAreaView>
            <Text style={{marginTop:50,marginBottom:10,marginLeft:10, fontWeight:'bold'}}>Usuário</Text>
            <TextInput
              style={styles.input}
            />
            <Text style={{marginTop:20,marginBottom:10,marginLeft:10, fontWeight:'bold'}}>Senha</Text>
            <TextInput
              style={styles.input}
            />

            <Text style={{fontSize:10, marginTop:10,marginLeft:10,textDecorationColor:'red',textDecorationLine:'underline', color:'blue'}}>Esqueci minha senha</Text>

            <TouchableOpacity
              style={styles.button} // Estilos personalizados para o botão
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button} // Estilos personalizados para o botão
              onPress={() => navigation.navigate('Cadastrar')}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            
            <Text style={{marginTop:20,marginBottom:10,marginLeft:10, fontWeight:'bold'}}>Continuar como:</Text>
            
            <View style={styles.Viewpai}>
              <View style={styles.vDentro}>
                <Text>
                <AntDesign name="google" color={'red'} size={ 18 } />
                </Text>
                <Text>
                  Google 
                </Text>
              </View>
              <View style={styles.vDentro}>
                <Text>
                <AntDesign name="facebook-square" color={'blue'} size={ 18 } />
                </Text>
                <Text>
                 Facebook 
                </Text>
              </View>
              
            </View>


          </SafeAreaView>
        </SafeAreaProvider>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Viewpai:{
    flexDirection:'row'
  },
  vDentro:{
    alignItems:'center',
    margin:15,
    marginLeft:40
  },
  viewMestra: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    width: 280,
    height: 550,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius:20,
    width:240,
    height: 35,
    borderWidth: 0.5,
    padding: 10,
  },
  button: {
    backgroundColor: '#00adef', // Cor de fundo do botão
    paddingVertical: 10, // Altura do botão
    paddingHorizontal: 24, // Largura do botão
    borderRadius: 35, // Borda arredondada
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Sombra no Android
    marginTop:50,
    marginLeft:20,
    width:"80%",
  },
  buttonCad:{
    backgroundColor: '#00adef', // Cor de fundo do botão
    paddingVertical: 2, // Altura do botão
    paddingHorizontal: 24, // Largura do botão
    borderRadius: 0, // Borda arredondada
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Sombra no Android
    marginTop:20,
    marginLeft:20,
    width:"40%",
  },
  buttonText: {
    color: '#fff', // Cor do texto
    fontSize: 10, // Tamanho da fonte
    textAlign: 'center',
    fontWeight: 'bold', // Negrito
  },
});
