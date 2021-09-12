import React from 'react';
import {View, Dimensions} from 'react-native';
import {Input as RNEInput} from 'react-native-elements';
const {width} = Dimensions.get('screen');

const Input = props => {
  const {icon, placeholder, secureTextEntry, containerStyle} = props;
  return (
    <View>
      <RNEInput
        placeholder={placeholder}
        style={{fontSize: 14}}
        placeholderTextColor="#cccccc"
        leftIcon={icon}
        secureTextEntry={secureTextEntry}
        containerStyle={containerStyle}
        inputContainerStyle={{borderBottomWidth: 1}}
      />
    </View>
  );
};
Input.defaultProps = {
  secureTextEntry:false,
  containerStyle:{width: width * 0.9},
};
export {Input};
