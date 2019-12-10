import React from 'react';
import {ScrollView} from 'react-native';
import {
  PageContainer,
  UserPersonalInformation,
  ProfileImg,
  Header,
  Ticket,
  CompanyLogo,
  CardTicket,
  TicketInfoContainer,
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
      <>
        <ScrollView>
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
              <Ticket
                source={require('./../../../assets/images/profile.png')}
              />
              <TicketInfoContainer>
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
              </TicketInfoContainer>
              <BarCodeImg
                source={require('./../../../assets/images/barcode.png')}
              />
            </CardTicket>
          </PageContainer>
        </ScrollView>
      </>
    );
  }
}
export default Profile;
