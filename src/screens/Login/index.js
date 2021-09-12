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
const {width} = Dimensions.get('screen');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 50,
        }}>
        <Text style={styles.logo}>
          Linked
        </Text>
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
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Şifrenizi mi Unuttunuz?</Text>
      </TouchableOpacity>
      <Button
        text={'Devam Et'}
        buttonStyle={{backgroundColor: '#0a66c2'}}
        onPress={() => navigation.navigate('Main')}
      />
      <Text style={{color: '#cccccc', marginTop: 20, marginBottom: 20}}>
        {' '}
        ──────── VEYA ────────
      </Text>
      <Button
        text={'Google ile oturum açın'}
        icon={<AntDesign name={'google'} color={'orange'} size={20} />}
        buttonStyle={{
          backgroundColor: '#ffffff',
          borderWidth: 2,
          borderColor: '#2c2c58',
        }}
        titleStyle={{color: '#2c2c58'}}
        onPress={() => navigation.navigate('Main')}
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
export {Login};
