import * as React from 'react';
import {Platform, Text, View} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Notif from './screens/notif';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './styles/colors';

const linking = {
    prefixes: ['demo://'],
};

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';

            if (route.name === 'HOME') {
              iconName = focused
                ? `${Platform.OS}-home`
                : `${Platform.OS}-home-outline`;
            } else if (route.name === 'NOTIF') {
              iconName = focused
                ? `${Platform.OS}-notifications`
                : `${Platform.OS}-notifications-outline`;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.secondary,
          inactiveTintColor: colors.gray,
        }}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="NOTIF" component={Notif} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
