import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './src/screens/Feed';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/screens/Login';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {

  const [isSignedIn, setIsSignedIn] = React.useState(false)
  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      ) : (
        <Login/>
      )}
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
