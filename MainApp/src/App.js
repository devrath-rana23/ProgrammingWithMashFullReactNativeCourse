import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

//Tab navigation creates tabs at bottom of the screen for navigation and can also give images to thos tab screen navigation button

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Tab.Screen
          name='Screen_A'
          component={ScreenA}
        />
        <Tab.Screen
          name='Screen_B'
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
