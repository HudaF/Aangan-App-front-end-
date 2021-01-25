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
  Alert,
} from 'react-native';

const registerURL = 'http://aangan.pythonanywhere.com/api/auth/register';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmP: '',
      errors: {},
    };
    this.registerEvent = this.registerEvent.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://aangan.pythonanywhere.com/admin')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  registerEvent = async () => {
    console.log('got here');
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.confirmP);
    console.log('got here2');
    let data = {
          first_name: this.state.name,
          password: this.state.password,
          last_name: '',
          email: this.state.email
      }
    console.log(registerURL);
    if (this.state.password === this.state.confirmP) {
      return axios.post(registerURL, data)
      .then((result) => {
          console.log(result.data);
          if (result.status == 201)
          {
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
    } else {
      this.setState({errors: 
      {
        "pw match error" : "Password do not Match"
      }})
      this.getErrors();
      console.log('password do not match');
    }
  };

  getErrors()
  {
    console.log(this.state.errors);
    if (this.state.errors)
    {
      Alert.alert(
          'Register Error',
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
          {' '}
          Getting Started{' '}
        </Text>
        <Text
          style={{
            marginBottom: 10,
            textAlign: 'center',
            color: '#024cbc',
            fontSize: 12,
            paddingTop: 5,
          }}>
          {' '}
          Account Signup for parents{' '}
        </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.txt}
            placeholder="Enter Name"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
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
        <View style={styles.input}>
          <TextInput
            secureTextEntry
            style={styles.txt}
            placeholder="Confirm Password"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ confirmP: text })}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.registerEvent}>
          <Text style={{ color: 'white' }}> Sign Up </Text>
        </TouchableOpacity>
        <View style={{ alignSelf: 'center' }}>
          <Text styles={{ textAlign: 'center' }}>
            Already have an account?
            <TouchableOpacity
              onPress={() => {
                console.log('signin');
                this.props.navigation.navigate('Sign In');
              }}>
              <Text style={styles.secondaryBtn}> Sign in</Text>
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
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  txt: {
    height: 20,
    color: '#465881',
  },
  btn: {
    width: '60%',
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

export default RegisterScreen;