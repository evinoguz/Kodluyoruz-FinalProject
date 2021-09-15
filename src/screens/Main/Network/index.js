import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {Input, Button} from '_components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');

const data = [
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Merve Oğuz',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Zeynep Oğuz',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Ahmet Yazılım',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Selin Oğuz',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Ali Aydın',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
  },
];
const NetworkTab = ({navigation}) => {
  const item = ({item: {imageUrl, name}, index}) => (
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
              width: '50%',
              padding: 15,
              paddingTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Button
            text={'Bağlantı kur'}
            buttonStyle={{
              backgroundColor: '#ffffff',
              borderWidth: 2,
              borderColor: '#0a66c2',
              width: width * 0.4,
              height:40
            }}
            titleStyle={{color: '#0a66c2', fontSize:14}}
            onPress={() => alert('İstek gönderildi')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Input
        placeholder={'Arama yap'}
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
export {NetworkTab};
