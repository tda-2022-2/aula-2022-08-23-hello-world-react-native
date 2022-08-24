import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fato from './Fato';

const endpoint = 'https://catfact.ninja/fact';

// export default function App() {
const App = () => {
  // hook para criar um objeto observável e sua
  // função mutadora
  const [fato, setFato] = useState('Carregando ...')
  
  // executar um código na inicialização
  useEffect(() => {
    fetch(endpoint)
      .then(raw => raw.json())
      .then(json => {
        console.log(json.fact);
        setFato(json.fact)
      });
  }, [])

  
  return (
    <View style={styles.container}>
      <Fato texto={fato} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fato: {
    fontSize: 24,
    color: 'blue'
  }
});

export default App;