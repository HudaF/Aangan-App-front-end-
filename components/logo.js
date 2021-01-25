import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {
  return (
      <View >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  logo: { 
    width: 150, 
    height: 150, 
    resizeMode: 'cover',
    borderRadius: 150/2, 
    backgroundColor: 'white', 
    borderColor: 'green', 
    borderWidth: 2,
    marginTop: 5,
  },
});

export default Logo;