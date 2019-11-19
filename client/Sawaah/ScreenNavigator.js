import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './src/Components/Layout/LandingPage';
import Destination from './src/Components/Layout/Destination';
import SearchResult from './src/Components/SharedComponent/SearchResult';
import Login from './src/Components/Layout/Login';

const NavigationStack = createStackNavigator(
  {
    LandingPage: {screen: LandingPage},
    Destination: {screen: Destination},
    SearchResult: {screen: SearchResult},
    Login: {screen: Login},
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
