import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './src/Components/Layout/LandingPage';
import Signup from './src/Components/Layout/Signup';
import Destination from './src/Components/Layout/Destination';
import SearchResult from './src/Components/SharedComponent/SearchResult';
import Profile from './src/Components/Layout/Profile';

const NavigationStack = createStackNavigator(
  {
    LandingPage: {screen: LandingPage},
    Signup: {screen: Signup},
    Destination: {screen: Destination},
    SearchResult: {screen: SearchResult},
    Profile: {screen: Profile},
  },
  {
    initialRouteName: 'LandingPage',
  },
);

const ScreenNavigator = createAppContainer(NavigationStack);

export default ScreenNavigator;
