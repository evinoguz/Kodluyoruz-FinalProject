import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {Button} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('screen');

const PostTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingLeft: '1%',
          paddingVertical: 14,
          width: width * 1,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: '11%', height: 40, borderRadius: 70}}
            source={require('_assets/image/b.jpeg')}
          />
          <Text
            style={{
              width: '60%',
              padding: 15,
              paddingTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Evin Oğuz
          </Text>
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            placeholder={'Ne hakkındaa konuşmak istiyorsunuz?'}
            multiline={true}
            numberOfLines={10}
            style={{
              height: 200,
              color: 'gray',
              textAlignVertical: 'top',
              fontSize: 19,
              fontWeight: 'bold',
            }}
          />
        </View>
        <Button
          text={' Fotoğraf ekle'}
          icon={<FontAwesome name={'photo'} color={'#0a66c2'} size={20} />}
          buttonStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0a66c2',
          }}
          titleStyle={{color: '#0a66c2'}}
          onPress={() => alert('Fotoğraf ekle')}
        />
        <Button
          text={' Video çek'}
          icon={<AntDesign name={'videocamera'} color={'#0a66c2'} size={20} />}
          buttonStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0a66c2',
          }}
          titleStyle={{color: '#0a66c2'}}
          onPress={() => alert('Video çek')}
        />
        <Button
          text={' Bir günü kutlayın'}
          icon={<Fontisto name={'day-haze'} color={'#0a66c2'} size={20} />}
          buttonStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0a66c2',
          }}
          titleStyle={{color: '#0a66c2'}}
          onPress={() => alert('Bir günü kutlayın')}
        />
        <Button
          text={' Belge ekleyin'}
          icon={<Entypo name={'document'} color={'#0a66c2'} size={20} />}
          buttonStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0a66c2',
          }}
          titleStyle={{color: '#0a66c2'}}
          onPress={() => alert('Belge ekleyin')}
        />
        <Button
          text={' Bir anket oluşturun'}
          icon={
            <FontAwesome5 name={'clipboard-list'} color={'#0a66c2'} size={20} />
          }
          buttonStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0a66c2',
          }}
          titleStyle={{color: '#0a66c2'}}
          onPress={() => alert('Bir anket oluşturun')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: width * 1,
    backgroundColor: '#ffffff',
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },

});
export {PostTab};
