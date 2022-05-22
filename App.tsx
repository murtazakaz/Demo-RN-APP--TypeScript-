/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {LogBox} from 'react-native';
import AppNavigator from './src/navigator';
LogBox.ignoreLogs(['EventEmitter.removeListener']);
const App = () => {
  return <AppNavigator />;
};

export default App;
