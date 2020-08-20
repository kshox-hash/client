
import React from 'react';
import { StyleSheet, View } from 'react-native';

//login
import LoginPage from './login/loginPage'


export default function App() {
  return (
    <View style={styles.container}>
        <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex : 1
  },
});
