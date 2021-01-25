//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';

import Logo from '../components/logo.js';
import RegisterScreen from '../components/RegisterScreen.js';


const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <RegisterScreen navigation = {navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbf09',
  },
});


export default Register;
