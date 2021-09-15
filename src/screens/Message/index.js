import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image
} from 'react-native';
import {Input} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');

const data = [
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
];
const Message = ({navigation}) => {
  const item = ({item: {imageUrl, name, date}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 14,
        width: width * 1,
      }}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: '11%', height: 40, borderRadius: 70}}
            source={imageUrl}
          />
          <Text
            style={{
              width: '60%',
              padding: 15,
              paddingTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: '#93a0a8',
              width: '20%',
              padding: 15,
              paddingTop: 8,
              fontSize: 13,
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            {date}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Input
        placeholder={'Mesajlarda ara'}
        containerStyle={{
          width: width * 0.9,
          height: 60,
          marginLeft: '-5%',
          marginRight: '4%',
        }}
        icon={<AntDesign name={'search1'} color={'#c7cbcf'} size={24} />}
      />
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(d, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#ffffff22',
              alignSelf: 'center',
            }}></View>
        )}
      />
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width * 1,
    backgroundColor: '#ffffff',
  },
  
});
export {Message};
