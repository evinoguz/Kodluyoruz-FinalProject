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
          options={{
            headerTitle: 'Anasayfa',
          }}
        />
        <Tab.Screen name={'NetworkTab'} component={NetworkTab} />
        <Tab.Screen name={'PostTab'} component={PostTab} />
        <Tab.Screen name={'NotificationTab'} component={NotificationTab} />
        <Tab.Screen name={'JobPostingsTab'} component={JobPostingsTab} />
      </Tab.Navigator>
    </View>
  );
};
export {Main};

