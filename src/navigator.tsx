import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/home/home';
import Notif from './screens/notif/notif';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './styles/colors';

const linking = {
  prefixes: ['demoapp://'],
  config: {
    initialRouteName: 'NOTIF',
    screens: {
      HOME: {
        path: 'HOME/:totalLiveStreams/:totalMembers',
      },
      NOTIF: {
        path: 'NOTIF/:totalCourses/:totalMembers',
      },
    },
  },
};

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const getIcon = (page: string, focused: boolean): string => {
    let icon: string = '';
    if (page === 'HOME') {
      icon = focused ? 'ios-home' : 'ios-home-outline';
    } else if (page === 'NOTIF') {
      icon = focused ? 'ios-notifications' : 'ios-notifications-outline';
    }

    return icon;
  };

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons
                name={getIcon(route.name, focused)}
                size={size}
                color={color}
              />
            );
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
