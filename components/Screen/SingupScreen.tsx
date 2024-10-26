import { StyleSheet, View, ScrollView } from 'react-native'
import {useState} from 'react'
import Buttons from '../Atoms/Buttons/Buttons';
import Texts from '../Atoms/Texts/Texts';
import { ImageBackground } from 'react-native';
import TInputs from '../Atoms/TInputs/TInputs';

const backgroundImage = require('../../assets/images/background.png');

const SingupScreen = ({navigation}:any) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [schedule, setSchedule] = useState('');

  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />
        <Texts text='Formulario de registro' type='title' />
        <Texts text='Llena tus datos para registrarte en el sistema' type='normal' />
        <ScrollView>

          <TInputs 
          placeholder={'Nombres'} 
          onChangeText={() => {
            setName('')
          } } 
          value={name} 
          />


          
          
        

        {/* Para registro necesito los siguientes campos 
          - si es trabajador o contratador(Empleador)
          - Nombres, Apellidos, Foto, Telefono, Ubicación, Fecha de nacimiento, correo, Profesión,
          -  Experiencia Laboral, Educacion,  Cobro por Hora o Trabajo, Datos Adicionales
        */}
          <View style={styles.buttonContainer}>
            <Buttons onPress={() => alert('Registrado con exito')} outline={false} text={'Registrarse'} size='large' />
            <Buttons onPress={() => navigation.navigate('WelcomeScreen')} text={'Volver'} outline={true} size='large' />
          </View>
        </ScrollView>
      </View>
  )
}

export default SingupScreen

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