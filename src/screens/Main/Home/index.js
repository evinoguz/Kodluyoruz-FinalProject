import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import {Button, Card, Input, Header} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');
const data = [
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Evin Oğuz',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Evin Oğuz',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/image/a.jpeg'),
    name: 'Sara Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/image/b.jpeg'),
    name: 'Ali Yazılım',
    date: '08.43',
  },
];
const HomeTab = ({navigation}) => {
  const item = ({item: {imageUrl, name}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 14,
        width: width * 1,
      }}>
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
      </View>
      <View>
        <Text
          style={{
            color: '#93a0a8',
            width: '40%',
            padding: 15,
            paddingTop: 8,
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
          gönderi paylaştı
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <AntDesign name={'like2'} color={'#000000'} size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <AntDesign name={'message1'} color={'#000000'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <AntDesign name={'sharealt'} color={'#000000'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          margin: '2%',
        }}>
        <Image
          style={{
            width: '11%',
            height: 40,
            margin: 20,
            borderRadius: 70,
          }}
          source={require('_assets/image/a.jpeg')}
        />
        <Input
          placeholder={'Arama Yap...'}
          containerStyle={{
            width: width * 0.7,
            height: 60,
            marginLeft: '-5%',
            marginRight: '4%',
          }}
          icon={<AntDesign name={'search1'} color={'#c7cbcf'} size={24} />}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <AntDesign name={'message1'} color={'#000000'} size={32} />
        </TouchableOpacity>
      </View>
        <View
          style={{
            width: width * 1,
            margin: '2%',
            borderWidth: 1,
            backgroundColor: '#c7cbcf',
            alignItems: 'center',
            height: 210,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                color: '#000000',
                paddingTop: '1%',
                fontSize: 16,
              }}>
              Önerilen İş İlanları
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('JobPostingsTab')}>
              <Text
                style={{
                  color: '#0a66c2',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingTop: '1%',
                  marginLeft: 20,
                }}>
                Daha fazlası...
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: width * 0.95, margin: '2%'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Card
                color={'#ec7c20'}
                name="Kodluyoruz"
                content="Java Developer"
                imageUrl="_assets/image/kodluyoruz.png"
                source={require('_assets/image/kodluyoruz.png')}
              />
              <Card
                color={'#444bff'}
                name="Patika.dev"
                content="React Developer"
                imageUrl="_assets/image/patika.png"
                source={require('_assets/image/patika.png')}
              />
            </ScrollView> 
          </View>
        </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width * 1,
    backgroundColor: '#ffffff',
  },
});
export {HomeTab};
