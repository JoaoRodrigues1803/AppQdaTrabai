import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import fundoApp from "../assets/fundoApp.png"

export default function Sobre() {
  return (
    <ImageBackground style={styles.container} imageStyle={{
      height: '100%' ,
      width: '100%'
    }}
      source={fundoApp}
        
    >
    <View style={styles.Sobre}>
      <Text>Página Sobre</Text>
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