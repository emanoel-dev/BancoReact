import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, View, ScrollView
} from 'react-native';
import React, { Component } from 'react';
import Formulario from './src/formulario';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="light" />
          <View style={styles.logo}><Text style={styles.title}>Banco React</Text></View>
          <Formulario />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#489458',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 200
  },
  title: {
    color: '#ffffff',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default App;