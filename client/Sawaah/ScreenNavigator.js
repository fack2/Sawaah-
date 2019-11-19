import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './src/Components/Layout/LandingPage';
import Destination from './src/Components/Layout/Destination';

const NavigationStack = createStackNavigator(
  {
    LandingPage: {screen: LandingPage},
    Destination: {screen: Destination},
  },
  {initialRouteName: 'LandingPage'},
  {
    navigationOptions: {
      headershown: false,
    },
  },
);

const ScreenNavigator = createAppContainer(NavigationStack);

export default ScreenNavigator;
