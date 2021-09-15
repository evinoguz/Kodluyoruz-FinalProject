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
import {Input} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');

const data = [
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Evin Oğuz',
    status: 'yorum yaptı.',
    date: 'Şimdi',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Sara Yücel',
    status: 'beğendi.',
    date: '5 dk önce',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Zeynep Aydın',
    status: 'yorum yaptı.',
    date: '2 saat önce',
  }
];
const NotificationTab = ({navigation}) => {
  const item = ({item: {imageUrl, name, status, date}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 12,
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
              width: '35%',
              padding: 15,
              paddingTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              width: '30%',
              paddingTop: 8,
              fontSize: 13,
            }}>
            {status}
          </Text>
          <Text
            style={{
              width: '25%',
              paddingTop: 8,
              fontSize: 13,
            }}>
            {'   ' + date}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      
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
export {NotificationTab};
