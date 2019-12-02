import React from 'react';

import {
  PageContainer,
  UserPersonalInformation,
  ProfileImg,
  Header,
  Ticket,
  CompanyLogo,
  CardTicket,
  SharedContainer,
  BaseContainer,
  DisplayText,
  ResultText,
  SubContainer,
  AirplanImg,
  BarCodeImg,
} from './index.style';

class Profile extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#dbbdb4',
    },
  };

  render() {
    return (
      <PageContainer>
        <ProfileImg
          source={require('./../../../assets/images/profileImg.png')}
        />
        <UserPersonalInformation>Brianca Davis</UserPersonalInformation>
        <UserPersonalInformation>
          briancadavis@hotmail.com
        </UserPersonalInformation>
        <Header>Your Ticket </Header>
        <CardTicket>
          <CompanyLogo
            source={require('./../../../assets/images/PA-logo.gif')}
          />
          <Ticket source={require('./../../../assets/images/profile.png')} />
          <SharedContainer>
            <BaseContainer>
              <SubContainer>
                <DisplayText>From</DisplayText>
                <ResultText>PNA</ResultText>
              </SubContainer>
              <AirplanImg
                source={require('./../../../assets/images/plane.png')}
              />
              <SubContainer>
                <DisplayText>To</DisplayText>
                <ResultText>BNA</ResultText>
              </SubContainer>
            </BaseContainer>
          </SharedContainer>
          <SharedContainer>
            <BaseContainer>
              <SubContainer>
                <DisplayText>Departure</DisplayText>
                <ResultText>4:30 pm</ResultText>
              </SubContainer>
              <SubContainer>
                <DisplayText>Arrival</DisplayText>
                <ResultText>11:00 am</ResultText>
              </SubContainer>
            </BaseContainer>
          </SharedContainer>
          <SharedContainer>
            <BaseContainer>
              <SubContainer>
                <DisplayText>Class</DisplayText>
                <ResultText>Business</ResultText>
              </SubContainer>
              <SubContainer>
                <DisplayText>Seat</DisplayText>
                <ResultText>B4</ResultText>
              </SubContainer>
            </BaseContainer>
          </SharedContainer>
          <SharedContainer>
            <BaseContainer>
              <SubContainer>
                <DisplayText>Flight No</DisplayText>
                <ResultText>S65</ResultText>
              </SubContainer>
              <SubContainer>
                <DisplayText>Gate</DisplayText>
                <ResultText>10L</ResultText>
              </SubContainer>
            </BaseContainer>
          </SharedContainer>
          <BarCodeImg
            source={require('./../../../assets/images/barcode.png')}
          />
        </CardTicket>
      </PageContainer>
    );
  }
}
export default Profile;
