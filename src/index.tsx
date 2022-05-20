import * as React from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Notif from './screens/notif';
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
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
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
