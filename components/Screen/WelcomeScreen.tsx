import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Buttons from '../Atoms/Buttons/Buttons';
import Texts from '../Atoms/Texts/Texts';
import { Image } from 'react-native';

export default function WelcomeScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image source={require('../../assets/images/FacnetLogo.png')} style={{width: 200, height: 200}} />
        <Texts text='Bienvenidos a Employe app' type='title' />
        <Texts text='Abre las puertas a una nueva oportunidad de demostrar tu capacidad para trabajar o de cumplir tu necesidad laboral' type='normal' />

        <View style={styles.buttonContainer}>
          <Buttons onPress={() => navigation.navigate('LoginScreen')} text={'Iniciar Sesión'} size='large' />
          <Buttons onPress={() => navigation.navigate('SingUpScreen')} text={'Registrarse'} outline={true} size='large' />
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  }
})