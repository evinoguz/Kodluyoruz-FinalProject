import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
      }}>
      <AntDesign name={'linkedin-square'} color={'#0a66c2'} size={120} />
    </View>
  );
};
export {Splash};
