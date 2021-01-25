//import React in our code
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';

import Logo from './components/logo.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import CreateProfile from './components/CreateProfile.js';
import Module from "./Module";
import Submodule from "./Submodule";
import Profileselect from "./Profileselect";
import WordIdentification from "./WordIdentification";
import ObjectIDent from "./ObjectIDent";

import Drawing from "./components/Drawing";
import Tracing from "./components/Tracing";
import Redo from "./components/Redo";
import Submitted from "./components/Submitted";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen name="Sign In" component={Login} />
        <Stack.Screen name="Sign Up" component={Register} />
        <Stack.Screen name="Select Child Profile" component={Profileselect} />
        <Stack.Screen name="Create Child Profile" component={CreateProfile} />
        <Stack.Screen name="Select Module" component={Module} />
        <Stack.Screen name="Select Sub Module" component={Submodule} />
        <Stack.Screen name="Urdu Tracing" component={Tracing} />
        <Stack.Screen name="Urdu Tracing - Correct" component={Submitted} />
        <Stack.Screen name="Urdu Tracing - Retry" component={Redo} />
        <Stack.Screen name="Object Identification" component={ObjectIDent} />
        <Stack.Screen name="Word Identification" component={WordIdentification} />
        
        <Stack.Screen name="Drawing" component={Drawing} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbf09',
  },
});

export default App;
