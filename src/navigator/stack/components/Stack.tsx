import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@views/Auth/Login/Login';
import RegisterScreen from '@views/Auth/Register/Register';
import TabNavigator from '@navigator/tab';

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
