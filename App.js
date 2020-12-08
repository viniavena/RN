import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import TalesDiv from './src/Components/TalesDiv';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f3833f"/>
      <Header />
      <TalesDiv />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: 'center'
  }
});
