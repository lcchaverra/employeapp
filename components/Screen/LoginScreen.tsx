import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Buttons from '../Atoms/Buttons/Buttons';
import Texts from '../Atoms/Texts/Texts';
import { ImageBackground } from 'react-native';

const backgroundImage = require('../../assets/images/background.png');

const LoginScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />
    <View>
      <Text>LoginScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})