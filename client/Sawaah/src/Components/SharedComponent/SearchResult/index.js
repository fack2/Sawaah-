import React from 'react';
import {View} from 'react-native';
import {
  Header,
  Container,
  TicketCard,
  TicketImag,
  DepartureText,
  ArraivalText,
  FromToCountryText,
  DeparturelArrivalTimeImg,
  DeparturelTimeImg,
  ArraivalTimeImg,
} from './index.style';

class SearchResult extends React.Component {
  render() {
    return (
      <View>
        <Header>The available tickets:</Header>
        <Container>
          <TicketCard>
            <DeparturelArrivalTimeImg>
              <DeparturelTimeImg>
                <TicketImag
                  source={require('./../../../assets/images/arrive.png')}
                />
                <DepartureText>4:30 PM</DepartureText>
              </DeparturelTimeImg>
              <ArraivalTimeImg>
                <TicketImag
                  source={require('./../../../assets/images/departure.png')}
                />
                <ArraivalText>11:00 AM</ArraivalText>
              </ArraivalTimeImg>
            </DeparturelArrivalTimeImg>
            <FromToCountryText>Palestine to Barcelona</FromToCountryText>
          </TicketCard>
        </Container>
      </View>
    );
  }
}

export default SearchResult;
