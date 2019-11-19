import React from 'react';
import {Container, LandingPageImg, Describtion} from './index.style';
import NavBar from '../../SharedComponent/NavBar';
import Button from '../../SharedComponent/Button';

class LandingPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('Destination');
  };

  render() {
    return (
      <>
        <NavBar />
        <Container>
          <LandingPageImg
            source={require('./../../../assets/images/LandinPageImg.png')}
          />
          <Describtion>
            Welcome To Sawahh App Our app is an online booking ticket airplane .
            It provides some services for user how need to booking the ticket.
            These services include searching about the airplane travels in
            addition if a user see the appropriate ticket he/she can booking and
            pay it.
          </Describtion>
        </Container>
        <Button ButtonTextValue='Get Started' onButtonPress={this.onPress} />
      </>
    );
  }
}

export default LandingPage;
