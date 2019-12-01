import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  emailInputChange,
  passwordInputChange,
} from './../../../actions/signupLoginActions';
import {
  PageContainer,
  WelcomeStatement,
  EnterStatement,
  EmailPasswordContainer,
  Email,
  Password,
} from './index.style';
import Button from '../../SharedComponent/Button';
import {ScrollView} from 'react-native';
class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('Destination');
  };

  render() {
    const {
      emailInput,
      passwordInput,
      emailInputChange,
      passwordInputChange,
    } = this.props;
    return (
      <>
        <ScrollView>
          <PageContainer>
            <WelcomeStatement>Welcome Back!</WelcomeStatement>
            <EnterStatement>
              Please fill your personal information to log in
            </EnterStatement>
            <EmailPasswordContainer>
              <Email
                placeholder="Email"
                value={emailInput}
                onChangeText={emailInputChange}
              />
              <Password
                placeholder="Password"
                value={passwordInput}
                onChangeText={passwordInputChange}
              />
            </EmailPasswordContainer>
            <Button ButtonTextValue="LogIn" onButtonPress={this.onPress} />
          </PageContainer>
        </ScrollView>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      emailInputChange,
      passwordInputChange,
    },
    dispatch,
  );
};

const mapStateToProps = ({signupLoginReducer: {emailInput, passwordInput}}) => {
  return {
    emailInput,
    passwordInput,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
