import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Input as RNEInput} from 'react-native-elements';
const {width} = Dimensions.get('screen');

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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#2c2c58',
              paddingTop: '2%',
              fontSize: 16,
              paddingRight: '50%',
            }}>
            {content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
Card.defaultProps = {
  onPress: () => alert('kampanyasının detayları'),
  style: {},
  textStyle: {},
  isActivite: false,
};
export {Card};
