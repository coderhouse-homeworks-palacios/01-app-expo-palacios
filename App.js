import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const imageUrl = require('./assets/img/goku.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jorge Palacios</Text>
      <Text style={styles.h1}>Hola Coder!</Text>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130f40',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50%',
  },
  text: {
    color: '#dff9fb',
    fontSize: 20,
  },
  h1: {
    color: '#f0932b',
    fontSize: 40,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 280,
    height: 300,
    borderRadius: 20,
  },
});
