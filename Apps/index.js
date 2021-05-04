// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// // screen
// import LoginScreen from "./Apps/Containers/LoginScreen/LoginScreen"
// import RegisterScreen from "./Apps/Containers/RegisterScreen/RegisterScreen"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <LoginScreen /> */}
//       <RegisterScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from "./Containers/LoginScreen/LoginScreen"
import RegisterScreen from "./Containers/RegisterScreen/RegisterScreen"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Redux
import { Provider } from 'react-redux';
import store from './Redux/Store/store'

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Provider   store={store}>
         <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
          </Tab.Navigator>
          </NavigationContainer>
    </Provider>
   
  );
}

export default App;