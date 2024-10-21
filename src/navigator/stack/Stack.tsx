import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './Stack.typeDefs';

// views
import Home from '@views/Home';
import Details from '@views/Details';
import Profile from '@views/Profile';

const Stack = createNativeStackNavigator<StackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Home}
        name="HomeStack"
      />
      <Stack.Screen
        component={Details}
        name="DetailsStack"
      />
    </Stack.Navigator>
  );
}

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Profile}
        name="ProfileStack"
      />
      <Stack.Screen
        component={Details}
        name="DetailsStack"
      />
    </Stack.Navigator>
  );
}
