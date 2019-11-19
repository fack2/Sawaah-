import React from 'react';
import {
  PageContainer,
  WelcomeStatement,
  EnterStatement,
  EmailPasswordContainer,
  Email,
  Password,
  ButtonWrapper,
  LogInButton,
} from './index.style';

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <>
        <PageContainer>
          <WelcomeStatement>Welcome Back!</WelcomeStatement>
          <EnterStatement>
            Please fill your personal information to log in
          </EnterStatement>
          <EmailPasswordContainer>
            <Email placeholder='Email' />
            <Password placeholder='Password' />
          </EmailPasswordContainer>
          <ButtonWrapper>
            <LogInButton>Login</LogInButton>
          </ButtonWrapper>
        </PageContainer>
      </>
    );
  }
}

export default Login;
