
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppConstant from '../../../utility/app-constant';
import Colors from '../../../utility/colors-constant';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{AppConstant.signUp_msg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.containerColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
