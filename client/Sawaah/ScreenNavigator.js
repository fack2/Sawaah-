import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './src/Components/Layout/LandingPage';
import Destination from './src/Components/Layout/Destination';
import SearchResult from './src/Components/SharedComponent/SearchResult';

const NavigationStack = createStackNavigator(
  {
    LandingPage: {screen: LandingPage},
    Destination: {screen: Destination},
    SearchResult: {screen: SearchResult},
  },
  {initialRouteName: 'LandingPage'},
);

const ScreenNavigator = createAppContainer(NavigationStack);

export default ScreenNavigator;
