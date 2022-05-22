import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../src/screens/home/home';
import Notif from '../../src/screens/notif/notif';
import colors from '../../src/styles/colors';

const Tab = createBottomTabNavigator();

describe('AppStack', () => {
  it('renders the correct tab screen', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName: string = '';

              if (route.name === 'HOME') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'NOTIF') {
                iconName = focused
                  ? 'ios-notifications'
                  : 'ios-notifications-outline';
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
      </NavigationContainer>,
    );
    await waitFor(() => getByText('HOME'));
    // await waitFor(() => getByText('NOTIF'));
  });
});
