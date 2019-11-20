import styled from 'styled-components';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 300px;
  margin-top: 40px;
`;

export const PageTitle = styled.Text`
  font-family: 'Ubuntu';
  font-size: 22px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const SignupInformationBoxes = styled.View`
  border: 1px solid #000000;
  border-radius: 7px;
  background: #ffffff;
  margin-top: 10px;
  margin-bottom: 17px;
  padding-left: 7px;
  padding-right: 15px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignupInformationText = styled.TextInput`
  font-family: 'Ubuntu';
  font-size: 15.3px;
  padding-left: 7px;
`;

export const AlreadyHaveAnAccountLinkWrapper = styled.TouchableOpacity`
  background: white;
  color: black;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AlreadyHaveAnAccountText = styled.Text`
  font-family: 'Signika';
  font-size: 10px;
  color: black;
  text-align: center;
`;
export const LoginText = styled.Text`
  font-family: 'Signika';
  font-size: 10px;
  color: blue;
  text-align: center;
`;
