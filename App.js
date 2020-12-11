import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Feed from  './src/Pages/Feed';
import ProfileInfo from './src/Pages/ProfileInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f3833f"/>
      <ProfileInfo/>

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

// <ProfileInfo/>