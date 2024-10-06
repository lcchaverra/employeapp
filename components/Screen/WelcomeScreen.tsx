import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Buttons from '../Atoms/Buttons/Buttons';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>WelcomeScreen</Text>
      <Buttons text={'Login'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})