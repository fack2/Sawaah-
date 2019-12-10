import styled from 'styled-components';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  background: #dbbdb4;
  align-items: center;
  padding-top: 35px;
  height: 750px;
`;
export const ProfileImg = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const UserPersonalInformation = styled.Text`
  padding-top: 15px;
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
  position: absolute;
  margin-top: 5%;
  border-radius: 10px;
`;

export const CompanyLogo = styled.Image`
  position: absolute;
  z-index: 1;
  width: 255px;
  height: 30px;
  justify-content: center;
  margin-top: 8%;
`;
export const TicketInfoContainer = styled.View`
  margin: 21% 0 4% 0;
`;
export const BaseContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  width: 298px;
  height: 70px;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DisplayText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  color: rgba(0, 0, 0, 0.75);
`;

export const ResultText = styled.Text`
  font-family: 'Signika';
  font-size: 16px;
`;

export const AirplanImg = styled.Image`
  width: 24px;
  height: 24px;
  transform: rotate(90.3deg);
  align-self: center;
`;

export const BarCodeImg = styled.Image`
  width: 190px;
  height: 50px;
  z-index: 1;
`;
