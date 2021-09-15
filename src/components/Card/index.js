import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Input as RNEInput} from 'react-native-elements';
const {width} = Dimensions.get('screen');
import {Button} from '_components';

const Card = props => {
  const {
    text,
    onPress,
    style,
    textStyle,
    isActivite,
    color,
    source,
    name,
    content,
    zoom,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 8,
          width: width * 0.7,
          borderWidth: 1,
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          height: 150,
        }}>
        <View
          style={{
            width: width * 0.7,
            backgroundColor: color,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: 'center',
            height: 30,
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{
              width: '30%',
              height: 80,
              borderRadius: 70,
              borderWidth: 5,
              borderColor: color,
              marginTop: '-2%',
            }}
            source={source}
          />
          <Text
            style={{
              color: '#000000',
              width: '60%',
              padding: '5%',
              paddingTop: '5%',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#2c2c58',
              paddingTop: '1%',
              fontSize: 16,
            }}>
            {content}
          </Text>
          <Button
            text={'Başvur'}
            buttonStyle={{
              backgroundColor: 'white',
              width: width * 0.3,
              marginBottom: '20%',
              paddingTop: '15%',
            }}
            titleStyle={{color: color, fontSize: 18}}
            onPress={() => alert("'"+content+"'" +" ilanına başvuruldu.")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
Card.defaultProps = {
  style: {},
  textStyle: {},
  isActivite: false,
};
export {Card};
