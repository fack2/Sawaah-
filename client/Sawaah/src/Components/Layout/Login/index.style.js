import styled from 'styled-components';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 365px;
  height: 250px;
  padding: 20px 10px 0 10px;
  margin: 100px 0 0 20px;
`;

export const WelcomeStatement = styled.Text`
  font-family: 'Ubuntu';
  font-size: 19px;
  line-height: 22px;
  margin: 0 0 30px 0;
`;

export const EnterStatement = styled.Text`
  font-family: 'Ubuntu';
  font-size: 15px;
  line-height: 14px;
  height: 60px;
  margin: 5px 0 20px 0;
  padding: 15px 20px 0 47px;
`;

export const EmailPasswordContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 150px;
`;
export const Email = styled.TextInput`
  border: 0.5px solid black;
  height: 40px;
  width: 250px;
  border-radius: 10px;
  margin: 0 0 30px 0;
  padding: 0 0 0 18px;
`;
export const Password = styled.TextInput`
  border: 0.5px solid black;
  height: 40px;
  width: 250px;
  border-radius: 10px;
  margin: 0 0 30px 0;
  padding: 0 0 0 18px;
`;
export const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 50px;
  background: #2e5d6a;
  border-radius: 10px;
`;

export const LogInButton = styled.Text`
  font-family: 'Signika';
  font-size: 17px;
  color: #ffffff;
`;
