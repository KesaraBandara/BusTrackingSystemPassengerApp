/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import HomeMap from '../../components/HomeMap';
import Message from '../../components/message';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <HomeMap/>
      <Message/>
      <HomeSearch/>
    </View>
  );
};

export default HomeScreen;
