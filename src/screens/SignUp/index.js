import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button, Input} from '_components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 50,
        }}>
        <Text style={styles.logo}>Linked</Text>
        <AntDesign name={'linkedin-square'} color={'#0a66c2'} size={60} />
      </View>
      <Input
        placeholder={'E-posta veya Telefon'}
        icon={
          <MaterialCommunityIcons
            name={'cellphone-android'}
            color={'#cccccc'}
            size={24}
          />
        }
      />
      <Input
        placeholder={'Şifre'}
        secureTextEntry={true}
        icon={<Entypo name={'lock'} color={'#cccccc'} size={24} />}
      />
      <Input
        placeholder={'Şifre Tekrarı'}
        secureTextEntry={true}
        icon={<Entypo name={'lock'} color={'#cccccc'} size={24} />}
      />

      <Button
        text={' Kaydol'}
        icon={<FontAwesome name={'sign-in'} color={'#ffffff'} size={20} />}
        buttonStyle={{backgroundColor: '#0a66c2'}}
        onPress={() => navigation.navigate('Login')}
      />
      <Text style={{color: '#cccccc', marginTop: 20, marginBottom: 20}}>
        ──────── VEYA ────────
      </Text>
      <Button
        text={' Oturum Aç'}
        icon={<AntDesign name={'adduser'} color={'#0a66c2'} size={20} />}
        buttonStyle={{
          backgroundColor: '#ffffff',
          borderWidth: 2,
          borderColor: '#0a66c2',
        }}
        titleStyle={{color: '#0a66c2'}}
        onPress={() => navigation.navigate('Login')}
      />
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
  forgotPasswordText: {
    color: '#0a66c2',
    fontSize: 16,
    margin: '5%',
  },
  logo: {
    color: '#0a66c2',
    fontWeight: 'bold',
    fontSize: 60,
  },
});
export {SignUp};
