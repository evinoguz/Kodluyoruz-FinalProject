import React from 'react';
import {View, Text, StyleSheet, Dimensions,ScrollView} from 'react-native';
const {width} = Dimensions.get('screen');
import {Card} from '_components';

const JobPostingsTab = () => {
  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
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
        <Card
          color={'red'}
          name="Patika.dev"
          content="React Developer"
          imageUrl="_assets/image/patika.png"
          source={require('_assets/image/patika.png')}
        />
        <Card
          color={'brown'}
          name="Patika.dev"
          content="React Developer"
          imageUrl="_assets/image/patika.png"
          source={require('_assets/image/patika.png')}
        />
        <Card
          color={'green'}
          name="Patika.dev"
          content="React Developer"
          imageUrl="_assets/image/patika.png"
          source={require('_assets/image/patika.png')}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
    width: width * 1,
    backgroundColor: '#ffffff',
    width: width *1,
  },
});
export {JobPostingsTab};
