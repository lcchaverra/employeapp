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
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" component={SingupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
