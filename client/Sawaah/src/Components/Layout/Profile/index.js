import React from 'react';
import {
  PageContainer,
  TextName,
  UserPersonalInformation,
  ProfileImg,
  Header,
  Ticket,
  CompanyLogo,
  CardTicket,
  FromToContainer,
  FromText,
  FromAirport,
  TextAirportFrom,
  AirplanImg,
  TextAirportTo,
  ToText,
  ToAirport,
  DepartureArrivalContainer,
  DepartureTimeContainer,
  DepartureText,
  DepartureTime,
  ArrivalTimeContainer,
  ArrivalText,
  ArrivalTime,
  ClassSeatContainer,
  ClassTypeContainer,
  ClassText,
  ClassTypeText,
  SeatNumberContainer,
  SeatText,
  PositionText,
  BarCodeImg,
  FlightNoGateContainer,
  FlightNoContainer,
  FlightNoText,
  FlightNumber,
  GateNoContainer,
  GateText,
  GateNumber,
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

        <TextName>Brianca Davis</TextName>

        <UserPersonalInformation>
          briancadavis@hotmail.com
        </UserPersonalInformation>

        <Header>Your Ticket </Header>

        <CardTicket>
          <CompanyLogo
            source={require('./../../../assets/images/PA-logo.gif')}
          />

          <Ticket source={require('./../../../assets/images/profile.png')} />

          <FromToContainer>
            <TextAirportFrom>
              <FromText>From</FromText>
              <FromAirport>PNA</FromAirport>
            </TextAirportFrom>

            <AirplanImg
              source={require('./../../../assets/images/plane.png')}
            />

            <TextAirportTo>
              <ToText>To</ToText>
              <ToAirport>BNA</ToAirport>
            </TextAirportTo>
          </FromToContainer>

          <DepartureArrivalContainer>
            <DepartureTimeContainer>
              <DepartureText>Departure</DepartureText>
              <DepartureTime>4:30 pm</DepartureTime>
            </DepartureTimeContainer>

            <ArrivalTimeContainer>
              <ArrivalText>Arrival</ArrivalText>
              <ArrivalTime>11:00 am</ArrivalTime>
            </ArrivalTimeContainer>
          </DepartureArrivalContainer>

          <ClassSeatContainer>
            <ClassTypeContainer>
              <ClassText>Class</ClassText>
              <ClassTypeText>Business</ClassTypeText>
            </ClassTypeContainer>

            <SeatNumberContainer>
              <SeatText>Seat</SeatText>
              <PositionText>B4</PositionText>
            </SeatNumberContainer>
          </ClassSeatContainer>

          <FlightNoGateContainer>
            <FlightNoContainer>
              <FlightNoText>Flight No</FlightNoText>
              <FlightNumber>S65</FlightNumber>
            </FlightNoContainer>

            <GateNoContainer>
              <GateText>Gate</GateText>
              <GateNumber>10L</GateNumber>
            </GateNoContainer>
          </FlightNoGateContainer>

          <BarCodeImg
            source={require('./../../../assets/images/barcode.png')}
          />
        </CardTicket>
      </PageContainer>
    );
  }
}
export default Profile;
