import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

const TabBar =({state: {index}, navigation: {jumpTo}}) => {
  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity
          style={style.tabButton}
          onPress={() => jumpTo('HomeTab')}>
          <FontAwesome
            name={'home'}
            color={index === 0 ? '#000000' : '#93a0a8'}
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[
            {
              color: index === 0 ? '#000000' : '#93a0a8',
            },
            style.tabText,
          ]}>
          Ana Sayfa
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.tabButton}
          onPress={() => jumpTo('NetworkTab')}>
          <Feather
            name={'users'}
            color={index === 1 ? '#000000' : '#93a0a8'}
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[
            {
              color: index === 1 ? '#000000' : '#93a0a8',
            },
            style.tabText,
          ]}>
          Ağım
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.tabButton}
          onPress={() => jumpTo('PostTab')}>
          <MaterialIcons
            name={'add-box'}
            color={index === 2 ? '#000000' : '#93a0a8'}
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[
            {
              color: index === 2 ? '#000000' : '#93a0a8',
            },
            style.tabText,
          ]}>
          Yayınla
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.tabButton}
          onPress={() => jumpTo('NotificationTab')}>
          <Ionicons
            name={'notifications'}
            color={index === 3 ? '#000000' : '#93a0a8'}
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[
            {
              color: index === 3 ? '#000000' : '#93a0a8',
            },
            style.tabText,
          ]}>
          Bildirimler
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.tabButton}
          onPress={() => jumpTo('JobPostingsTab')}>
          <Ionicons
            name={'folder'}
            color={index === 4 ? '#000000' : '#93a0a8'}
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[
            {
              color: index === 4 ? '#000000' : '#93a0a8',
            },
            style.tabText,
          ]}>
          İş İlanları
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    height: 100,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.18,
    height: 70,
    paddingVertical: 2,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 10,
  },
});
export {TabBar};
