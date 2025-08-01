import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TextInput} from 'react-native';
import fundoApp from "../assets/fundoApp.png";
import post1 from "../assets/post1.png"


export default function Contato() {
  return (
    <ScrollView>
    <View style={styles.posts}>

      <View style={styles.post}>
        <Image
          source={post1}
          style={styles.imgPost}
        />
        <View style={styles.corpoPost}>
          <Text style={styles.tituloPost}>Como tirar carrapato de cachorro com segurança: passo a passo e cuidados essenciais</Text>
          <Text style={styles.textoPost}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência .</Text>
        </View>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  posts:{
    width: 380,
  },
  texto:{
    textAlign: 'justify',
    margin: 30,
  },
  imgPost:{
    width:100,
    height:110,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20
  },
  post:{
    flexDirection: 'row',
    marginVertical:10,
    marginLeft:20,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth:1,
    borderRadius:20
  },
  tituloPost: {
    fontWeight: 'bold',
    fontSize:16,
    marginBottom:5
  },
  textoPost:{
    textAlign:'justify',
  },
  corpoPost:{
    width: 250,
    padding:5
  },
});