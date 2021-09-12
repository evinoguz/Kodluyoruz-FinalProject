import React from 'react';
import {View, Dimensions} from 'react-native';
import {Button as RNEButton} from 'react-native-elements';
const {width} = Dimensions.get('screen');

const Button = props => {
  const {text, onPress, buttonStyle, titleStyle, icon} = props;
  return (
    <View>
      <RNEButton
        buttonStyle={[
          {
            backgroundColor: 'midnightblue',
            width: width * 0.9,
            height: 50,
            borderRadius: 30,
            margin:'2%'
          },
          buttonStyle,
        ]}
        title={text}
        type={'solid'}
        onPress={onPress}
        titleStyle={[
          {
            color: 'white',
            fontSize: 20,
          },
          titleStyle,
        ]}
        icon={icon}
        iconLeft
      />
    </View>
  );
};
Button.defaultProps = {
  text: 'Button',
  onPress: () => alert('Button dokunuldu.'),
  style: {},
  textStyle: {},
};
export {Button};