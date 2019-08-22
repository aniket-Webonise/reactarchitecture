import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import LoginScreen from '../Features/AuthScreens/LoginScreen/LoginScreen';
import SignUpScreen from '../Features/AuthScreens/SignUpScreen/SignUpScreen';

const AuthNavigator = createStackNavigator({
  SignIn: LoginScreen,
  SignUp: SignUpScreen,
});

const AuthenticationContainer = createAppContainer(AuthNavigator);

export default class AuthenticationNavigator extends React.Component {
  render() {
    return (
      <AuthenticationContainer />
    );
  }
};
