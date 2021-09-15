import React from 'react';
import {
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HomeTab,
  NetworkTab,
  PostTab,
  NotificationTab,
  JobPostingsTab
} from '_/screens';
import { TabBar } from './TabBar';
const Tab = createBottomTabNavigator();
const Main = () => {
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <Tab.Navigator tabBar={TabBar} initialRouteName={'HomeTab'}>
        <Tab.Screen
          name={'HomeTab'}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'NetworkTab'}
          component={NetworkTab}
          options={{headerTitle: 'Ağım'}}
        />
        <Tab.Screen
          name={'PostTab'}
          component={PostTab}
          options={{headerTitle: 'Gönderiyi Paylaş'}}
        />
        <Tab.Screen
          name={'NotificationTab'}
          component={NotificationTab}
          options={{headerTitle: 'Bildirimler'}}
        />
        <Tab.Screen
          name={'JobPostingsTab'}
          component={JobPostingsTab}
          options={{headerTitle: 'İş İlanları'}}
        />
      </Tab.Navigator>
    </View>
  );
};
export {Main};

