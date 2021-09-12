import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import {Button, Card, Input, Header} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');

const HomeTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
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
          }}
          icon={<AntDesign name={'search1'} color={'#c7cbcf'} size={24} />}
        />
        <TouchableOpacity onPress={() => alert('Mesajlar')}>
          <AntDesign name={'message1'} color={'#000000'} size={24} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: width * 1,
          borderWidth: 1,
          backgroundColor: '#c7cbcf',
          alignItems: 'center',
          height: 210,
        }}>
        <View style={{width: width * 0.95, paddingTop: 20}}>
          <ScrollView horizontal={true}>
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
