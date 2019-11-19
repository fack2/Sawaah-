import React from 'react';
import {
  PageContainer,
  BackButton,
  TextName,
  TextEmail,
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
  // static navigationOptions = {
  //   header: null,
  // };
  onPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('LandingPage');
  };

  render() {
    return (
      <PageContainer>
        <BackButton
          onButtonPress={this.onPress}
          source={require('./../../../assets/images/left-arrow.svg')}
        />
        <ProfileImg
          source={require('./../../../assets/images/profileImg.png')}
        />

        <TextName>Brianca Davis</TextName>

        <TextEmail>briancadavis@hotmail.com</TextEmail>

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
