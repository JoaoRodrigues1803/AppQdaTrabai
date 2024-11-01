import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import fundoApp from "../assets/fundoApp.png"

export default function Contato() {
  return (
    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
        
    >
      <View>
        <Text style={styles.Contato}>
          pagina Contato
        </Text>
      </View>
      <View>

      </View>


    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});