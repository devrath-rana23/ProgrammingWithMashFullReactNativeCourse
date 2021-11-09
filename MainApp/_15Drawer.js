import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Screen_A'
        drawerPosition='left'
        drawerType='front'
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 150,
        }}
        screenOptions={{
          headerShown:true,
          swipeEnabled:false,
          gestureEnabled:true,
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle:
{
  fontSize:25,
  fontWeight: 'bold',
}
        }}
      >
        <Drawer.Screen
          name='Screen_A'
          component={ScreenA}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name='autoprefixer'
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Screen_B'
          component={ScreenB}
          options={{
            title: 'Screen_B Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name='btc'
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
