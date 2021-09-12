import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

const NetworkTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Network Sayfası
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    backgroundColor: '#ffffff',
  },
});
export {NetworkTab};
