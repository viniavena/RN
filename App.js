import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Footer from './src/Components/Footer';
import Feed from  './src/Pages/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f3833f"/>
      <Feed />
      <Footer />
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
