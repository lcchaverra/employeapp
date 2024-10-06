import LoginScreen from './components/Screen/LoginScreen';
import WelcomeScreen from './components/Screen/WelcomeScreen';
import SingupScreen from './components/Screen/SingupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTitle : 'Iniciar Sesión'}} />
        <Stack.Screen name="SingUpScreen" component={SingupScreen} options={{headerTitle : 'Registro'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
