import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TextInput} from 'react-native';
import fundoApp from "../assets/fundoApp.png";
import veterinario from "../assets/Dr.perfil.jpeg";
import user from "../assets/dog.jpeg";


export default function Contato() {
  return (
    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
    >
      <View style={styles.container}>
      <Text style={styles.titulo}>Chat de texto com : 
        Dra. Karina</Text>
      <ScrollView style={styles.corpoChat}>
        <View style={styles.msg}>
          <Image
            source={veterinario}
            style={styles.imgChat}
          />
          <View style={styles.textoChat}>
            <Text style={styles.nome}>
              Dra. Karina
            </Text>
            <Text style={styles.corTexto}>
              Obrigado Rui! Permita-me Fazer-lher mais algumas perguntas sobre o Thor:
              Qual o peso do Thor ?
            </Text>
          </View>
        </View>

        <View style={styles.msg}>
          <View style={styles.textoChatUser}>
            <Text style={styles.nome}>
            Você
            </Text>
            <Text style={styles.corTexto}>
              Na última consulta ele estava com 58Kg!
            </Text>
          </View>
          <Image
            source={user}
            style={styles.imgChat}
          />
        </View>   

        <View style={styles.msg}>
          <Image
            source={veterinario}
            style={styles.imgChat}
          />
          <View style={styles.textoChat}>
            <Text style={styles.nome}>
              Dra. Karina
            </Text>
            <Text style={styles.corTexto}>
              Tem passeado bastante com o Thor:
            </Text>
          </View>
        </View>

        <View style={styles.msg}>
          <View style={styles.textoChatUser}>
            <Text style={styles.nome}>
              Você
            </Text>
            <Text style={styles.corTexto}>
              Tenho sim, pelo menos 3 vezes na semana.
            </Text>
          </View>
          <Image
            source={user}
            style={styles.imgChat}
          />
        </View>  


        <View style={styles.msg}>
          <Image
            source={veterinario}
            style={styles.imgChat}
          />
          <View style={styles.textoChat}>
            <Text style={styles.nome}>
              Dra. Karina
            </Text>
            <Text style={styles.corTexto}>
              Como está o apetide do Thor: pouco, normal ou muito?
            </Text>
          </View>
        </View>

        <View style={styles.msg}>
          <View style={styles.textoChatUser}>
            <Text style={styles.nome}>
              Você
            </Text>
            <Text style={styles.corTexto}>
              Está normal, ele tem comido bem como normalmente!
            </Text>
          </View>
          <Image
            source={user}
            style={styles.imgChat}
          />
        </View>   

        <TextInput
        placeholder='Digite sua msg e pressione "enviar"'
          style={styles.input}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  input: {
    width:600,
    height: 55,
    marginBottom: 5,
    borderWidth: 0.5,
    padding: 10,
    backgroundColor:"#fff"
  },
  container: {
    flex: 1,
    backgroundColor: '#444444e0'
  },
  icones: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  msg: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  corTexto: {
    color: '#fff',
    textAlign: 'left',
    maxWidth: 260,
    fontSize:13.5
  },
  imgChat: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  textoChat: {
    flex: 1,
    backgroundColor: '#444',
    borderRadius: 10,
    borderTopLeftRadius:0,
    paddingHorizontal: 10,
    paddingVertical: 13
  },
  textoChatUser: {
    flex: 1,
    backgroundColor: '#00adef',
    borderRadius: 10,
    borderTopRightRadius:0,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  corpoChat: {
    width: '100%',
    padding: 10,
    marginBottom:65
  },
  titulo: {
    paddingTop:30,
    fontSize: 18,
    width: '100%',
    backgroundColor: '#00adef',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold'
  },
  nome: {
    color: '#fff',
    fontWeight: 'bold'
  }
});