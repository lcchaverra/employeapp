import LoginScreen from './components/Screen/LoginScreen';
import WelcomeScreen from './components/Screen/WelcomeScreen';
import SingupScreen from './components/Screen/SingupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Image } from 'react-native';

const Stack = createNativeStackNavigator();

const logoHeader = () => {
  return (
    <Image source={require('./assets/images/FacnetLogo.png')} style={{width: 50, height: 50}} />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerTitle : 'Iniciar Sesión',
          headerTitleAlign: 'center',
          headerRight: () => logoHeader()
          }} />
        <Stack.Screen name="SingUpScreen" component={SingupScreen} options={{
          headerTitle : 'Registro', 
          headerTitleAlign: 'center',
          headerRight: () => logoHeader()
          } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
