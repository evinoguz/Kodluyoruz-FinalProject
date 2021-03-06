import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Main,
  Login, 
  Message,
  Splash,
  SignUp,
} from '_screens/';

const STACK1 = createStackNavigator();

const Navigation = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <STACK1.Navigator>
        <STACK1.Screen
          name={showSplash ? 'Splash' : 'Login'}
          component={showSplash ? Splash : Login}
          options={{
            headerTitleAlign: 'center',
            headerTitle: showSplash ? '' : 'Giriş Yapın',
            headerTintColor: showSplash ? '#ffffff' : '#000000',
            headerLeft: () => {
              return null;
            },
           
          }}
        />
        <STACK1.Screen
          options={{headerShown: false}}
          name={'Main'}
          component={Main}
        />
        <STACK1.Screen
          options={{headerTitle: 'Kaydol'}}
          name={'SignUp'}
          component={SignUp}
        />
        <STACK1.Screen
          options={{headerTitle: 'Mesajlar'}}
          name={'Message'}
          component={Message}
        />
      </STACK1.Navigator>
    </NavigationContainer>
  );
};
export {Navigation};
