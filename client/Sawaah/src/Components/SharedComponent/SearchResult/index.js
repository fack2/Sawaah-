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
import NavBar from './../NavBar';
import Button from './../Button';

class SearchResult extends React.Component {
  onPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('BuyTicket');
  };

  render() {
    return (
      <View>
        <NavBar />
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
        <Button onButtonPress={this.onPress} ButtonTextValue='Book flight' />
      </View>
    );
  }
}

export default SearchResult;
