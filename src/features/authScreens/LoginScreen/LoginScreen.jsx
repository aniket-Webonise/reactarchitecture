import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppConstant from '../../../utility/app-constant';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{AppConstant.login_msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
