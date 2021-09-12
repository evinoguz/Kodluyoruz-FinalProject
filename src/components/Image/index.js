import React from 'react';
import {View, Dimensions, Image as RNImage} from 'react-native';
import {theme} from '../../constants/Theme';
const {width} = Dimensions.get('screen');

const Image = props => {
  const { source, style} = props;
  return (
    <View>
      <RNImage source={source} style={[
          {width: width*0.9, height: 200}, style,
        ]} />
    </View>
  );
};
Image.defaultProps = {
};
export {Image};
