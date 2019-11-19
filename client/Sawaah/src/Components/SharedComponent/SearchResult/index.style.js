import styled from 'styled-components';

export const Header = styled.Text`
  font-family: 'Signika';
  font-size: 18px;
  margin: 20px 0 0 30px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  align-self: center;
  justify-content: center;
  margin: 20px 0 0 0;
`;

export const TicketCard = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 345px;
  height: 70px;
  align-items: center;
  border: 1px solid #d9868a;
  border-radius: 5px;
`;
export const DeparturelArrivalTimeImg = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;

export const DeparturelTimeImg = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArraivalTimeImg = styled.View`
  display: flex;
  flex-direction: row;
  width: 90px;
  justify-content: space-between;
`;

export const TicketImag = styled.Image`
  width: 36.42px;
  height: 19px;
`;
export const DepartureText = styled.Text`
  font-family: Signika;
  font-size: 10px;
`;
export const ArraivalText = styled.Text`
  font-family: Signika;
  font-size: 10px;
`;

export const FromToCountryText = styled.Text`
  justify-content: center;
  font-family: 'Signika';
  font-size: 13px;
  color: rgba(0, 0, 0, 0.65);
`;
