import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ScrollView} from 'react-native';

import {
  PageContainer,
  SignupInformationBoxes,
  SignupInformationText,
  PageTitle,
  AlreadyHaveAnAccountLinkWrapper,
  AlreadyHaveAnAccountText,
  LoginText,
} from './index.style';
import Button from './../../SharedComponent/Button';

import {
  signupNameChange,
  signupEmailChange,
  signupPasswordChange,
  signupConfirmPasswordChange,
} from './../../../actions/signupLoginActions';

class Signup extends Component {
  static navigationOptions = {
    header: null,
  };

  handleNameInputChange = payload => {
    this.props.signupNameChange(payload);
  };

  handleEmailInputChange = payload => {
    this.props.signupEmailChange(payload);
  };

  handlePasswordInputChange = payload => {
    this.props.signupPasswordChange(payload);
  };

  handleConfirmPasswordInputChange = payload => {
    this.props.signupConfirmPasswordChange(payload);
  };

  onButtonPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('Destination');
  };

  AlreadyHaveAnAccountPressHandle = () => {
    const {navigate} = this.props.navigation;
    return navigate('Destination');
  };

  render() {
    const {userName, userEmail, userPassword, userConfirmPassword} = this.props;
    return (
      <ScrollView>
        <PageContainer>
          <PageTitle>Create an account:</PageTitle>
          <SignupInformationBoxes>
            <SignupInformationText
              placeholder="Name"
              onChangeText={this.handleNameInputChange}
              value={userName}
            />
          </SignupInformationBoxes>
          <SignupInformationBoxes>
            <SignupInformationText
              placeholder="Email"
              onChangeText={this.handleEmailInputChange}
              value={userEmail}
            />
          </SignupInformationBoxes>
          <SignupInformationBoxes>
            <SignupInformationText
              placeholder="Password"
              onChangeText={this.handlePasswordInputChange}
              value={userPassword}
            />
          </SignupInformationBoxes>
          <SignupInformationBoxes>
            <SignupInformationText
              placeholder="Confirm Password"
              onChangeText={this.handleConfirmPasswordInputChange}
              value={userConfirmPassword}
            />
          </SignupInformationBoxes>
          <Button
            ButtonTextValue="Sign up"
            onButtonPress={this.onButtonPress}
          />

          <AlreadyHaveAnAccountLinkWrapper
            onPress={this.AlreadyHaveAnAccountPressHandle}>
            <AlreadyHaveAnAccountText>
              Already have an account?
            </AlreadyHaveAnAccountText>
            <LoginText> Log in</LoginText>
          </AlreadyHaveAnAccountLinkWrapper>
        </PageContainer>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
  } = state.signupLoginReducer;

  return {
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
    userConfirmPassword: userConfirmPassword,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signupNameChange,
      signupEmailChange,
      signupPasswordChange,
      signupConfirmPasswordChange,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
