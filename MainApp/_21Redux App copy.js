import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home Title',
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
