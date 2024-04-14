/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
// import HomeMap from './src/components/HomeMap';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      {/* <HomeMap /> */}
    </>
  );
}

export default App;
