import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
import APIKit, {setClientToken} from './APIKIT.js';



import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const loginURL = 'http://aangan.pythonanywhere.com/api/auth/login';


class LoginScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.loginEvent = this.loginEvent.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }
  

  loginEvent = async () => {
    console.log('got here');
    console.log(this.state.email);
    console.log(this.state.password);
    console.log('got here2');
    let data = {
          password: this.state.password,
          email: this.state.email
      }
    console.log(loginURL);
    return axios.post(loginURL, data)
      .then((result) => {
          console.log(result.data);
          if (result.status == 200)
          {
            //setClientToken(result.data['auth_token']);
            this.props.navigation.navigate("Select Child Profile");
          }
        })
        .catch((error) => {
          
          if (error.response)
          {
            console.log(error.response);
            console.log(error.response.data);
            this.setState({errors:error.response.data});
            this.getErrors();
          }
          else{
            console.log(error);
          }
        });
  };

  getErrors()
  {
    console.log(this.state.errors);
    if (this.state.errors)
    {
      Alert.alert(
          'Login Error',
          JSON.stringify(this.state.errors),
          [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#024cbc',
            fontWeight: 'bold',
            fontSize: 36,
            marginTop: 5,
          }}>
          Sign in
        </Text>
        <Text
          style={{
            marginBottom: 10,
            textAlign: 'center',
            color: '#024cbc',
            fontSize: 12,
          }}>
          Parents Sign in here
        </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.txt}
            placeholder="Enter Email"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry
            style={styles.txt}
            placeholder="Enter Password"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('forget password');
          }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.loginEvent}>
          <Text style={{ color: 'white' }}> Sign In </Text>
        </TouchableOpacity>
        <View style={{ alignSelf: 'center' }}>
          <Text>
            Don't have an account?
            <TouchableOpacity
              onPress={() => {
                console.log('register');
                this.props.navigation.navigate("Sign Up")
              }}>
              <Text style={styles.secondaryBtn}> Signup</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 20,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
    justifyContent: 'center',
    padding: 20,
  },
  txt: {
    height: 20,
    color: '#465881',
  },
  forgot: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
    marginTop: 10,
    height: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: '40%',
    backgroundColor: '#ff5f3d',
    borderRadius: 25,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  secondaryBtn: {
    color: '#ff5f3d',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
