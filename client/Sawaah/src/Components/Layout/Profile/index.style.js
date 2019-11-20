import styled from 'styled-components';

// this is a whole Container for profile page
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

// this is a Container for ticket
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

//this container for From to city
export const FromToContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 240px;
  align-items: center;
  justify-content: space-around;
  margin: 110px 0 0 0;
`;

//this is View include the From text and the airport for when the airplan it's go
export const TextAirportFrom = styled.View`
  display: flex;
  flex-direction: column;
`;

export const FromText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.75);
`;

export const FromAirport = styled.Text`
  font-family: 'Signika';
  font-size: 16px;
  line-height: 18px;
`;

export const AirplanImg = styled.Image`
  width: 24px;
  height: 24px;
  transform: rotate(90.3deg);
`;

//this is View include the To text and the airport for when the airplane it's arrive
export const TextAirportTo = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ToText = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.75);
`;

export const ToAirport = styled.Text`
  font-family: 'Signika';
  font-size: 16px;
  line-height: 18px;
`;

//this is View Containe Departure and Arraival Information
export const DepartureArrivalContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 240px;
  align-items: center;
  justify-content: space-around;
  margin: 170px 0 0 0;
`;

// this is View for Departure information and it's include departure text and departure time
export const DepartureTimeContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const DepartureText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.75);
`;

export const DepartureTime = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 4px;
`;

// this is View for arraivel information and it's include arraival text and arraival time
export const ArrivalTimeContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 45px;
`;

export const ArrivalText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 0 8px;
  color: rgba(0, 0, 0, 0.75);
`;

export const ArrivalTime = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
`;

export const ClassSeatContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 275px;
  align-items: center;
  justify-content: space-around;
  margin: 240px 0 0 0;
`;
export const ClassTypeContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 80px;

  align-items: center;
  justify-content: space-around;
`;
export const ClassText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 0 -10px;
  color: rgba(0, 0, 0, 0.75);
`;
export const ClassTypeText = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
`;

export const SeatNumberContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 80px;
  margin: 0 0 0 10px;
  align-items: center;
  justify-content: space-around;
`;
export const SeatText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 0 -5px;
  color: rgba(0, 0, 0, 0.75);
`;
export const PositionText = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 -5px;
`;

export const FlightNoGateContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 275px;
  align-items: center;
  justify-content: space-around;
  margin: 310px 0 0 0;
`;
export const FlightNoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
`;
export const FlightNoText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 0 -10px;
  color: rgba(0, 0, 0, 0.75);
`;
export const FlightNumber = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
`;

export const GateNoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
`;
export const GateText = styled.Text`
  font-family: 'Signika';
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 0 -10px;
  color: rgba(0, 0, 0, 0.75);
`;
export const GateNumber = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 -5px;
`;

export const BarCodeImg = styled.Image`
  width: 190px;
  height: 55px;
  margin: -63px 0 0 7px;
`;
