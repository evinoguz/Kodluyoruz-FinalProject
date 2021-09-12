import React from 'react';
import {View, StatusBar} from 'react-native';
import {Navigation} from '_/Navigation';
const App = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </>
  );
};

export {App};
