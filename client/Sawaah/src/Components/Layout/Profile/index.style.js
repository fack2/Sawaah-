import styled from 'styled-components';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  background: #dbbdb4;
  align-items: center;
  padding: 35px 0 0 0;
  height: 800px;
`;
export const ProfileImg = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const UserPersonalInformation = styled.Text`
  padding: 15px 0 0 0;
  font-family: 'Signika';
`;

export const Header = styled.Text`
  display: flex;
  font-family: 'Signika';
  align-self: flex-start;
  margin: 40px 0 0 55px;
`;

export const CardTicket = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ticket = styled.Image`
  width: 298px;
  height: 420px;
  align-self: center;
  margin: 20px 0 0 0;
  border-radius: 10px;
`;

export const CompanyLogo = styled.Image`
  position: absolute;
  z-index: 1;
  width: 216px;
  height: 38px;
  justify-content: center;
  margin: 34px 0 0 0;
`;
export const SharedContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 298px;
  height: 500px;
  margin: -420px 0 0 0;
  /* background: red; */
  /* padding: 0 0 -50px 0; */
`;
export const BaseContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 240px;
  align-items: center;
  justify-content: space-around;
  margin: 110px 0 0 0;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const DisplayText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.75);
`;

export const ResultText = styled.Text`
  font-family: 'Signika';
  font-size: 16px;
  line-height: 18px;
`;

export const AirplanImg = styled.Image`
  width: 24px;
  height: 24px;
  transform: rotate(90.3deg);
`;

export const BarCodeImg = styled.Image`
  width: 190px;
  height: 55px;
  margin: -63px 0 0 7px;
`;
