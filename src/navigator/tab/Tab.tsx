import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '@theme';
import { TabParamList, TabBarStatus } from './Tab.typeDefs';
import { DetailStackNavigator, HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack';
const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case 'HomeTab':
      return <FontAwesome name="home" size={28} color={tabStatus.color} />;
    case 'OrderTab':
      return <FontAwesome name="list-alt" size={24} color={tabStatus.color} />;
    case 'HelpLineTab':
      return <FontAwesome name="phone" size={24} color={tabStatus.color} />;
    case 'ProfileTab':
      return <FontAwesome name="user" size={24} color={tabStatus.color} />;
    default:
      return null;
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarInactiveTintColor: colors.black,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.orange,
        tabBarActiveBackgroundColor: colors.white,
      })}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
      <Tab.Screen
        name="OrderTab"
        component={DetailStackNavigator}
        options={{ title: 'Order List' }}
      />
      <Tab.Screen
        name="HelpLineTab"
        component={HomeStackNavigator}
        options={{ title: 'Helpline' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
