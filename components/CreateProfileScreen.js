import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

class CreateProfileScreen extends Component {
  state = {
    name: '',
    dob: '',
    gender: '',
    grade: '',
  };

  render() {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#024cbc',
            fontWeight: 'bold',
            fontSize: 28,
            marginTop: 5,
          }}>
          Create Child Profile
        </Text>

        <View style={styles.input}>
          <TextInput
            style={styles.txt}
            placeholder="Enter Child's Name"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <DropDownPicker
          items={[
            { label: 'Male', value: 0 },
            { label: 'Female', value: 1 },
            { label: 'Other', value: 2 },
          ]}
          defaultNull
          placeholder="Select Child's Gender"
          placeholderStyle={styles.txt}
          dropDownStyle={{ marginTop: 5, backgroundColor: '#fafafa' }}
          containerStyle={styles.input}
          onChangeItem={(item) => this.setState({ gender: item.value })}
        />
        <View style={styles.input}>
          <TextInput
            style={styles.txt}
            placeholder="Child's Date of Birth"
            placeholderTextColor="#465881"
            onChangeText={(text) => this.setState({ dob: text })}
          />
        </View>

        <DropDownPicker
          items={[
            { label: 'KG', value: 0 },
            { label: 'Nursery', value: 1 },
            { label: 'Montessori', value: 2 },
            { label: 'Grade 1', value: 3 },
            { label: 'Grade 2', value: 4 },
            { label: 'Other', value: 5 },
          ]}
          defaultNull
          placeholder="Select Child's Grade"
          placeholderStyle={styles.txt}
          dropDownStyle={{ marginTop: 2, backgroundColor: '#fafafa' }}
          labelStyle={{ fontSize: 14, color: '#000' }}
          showArrow="false"
          containerStyle={styles.input}
          onChangeItem={(item) => this.setState({ grade: item.value })}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log(this.state);
            this.props.navigation.navigate("Select Module")
          }}>
          <Text style={{ color: 'white' }}> Create Profile </Text>
        </TouchableOpacity>
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
    marginBottom: 10,
    marginTop: 10,
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
});

export default CreateProfileScreen;
