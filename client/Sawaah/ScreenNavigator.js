import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const NavigationStack = createStackNavigator();

const ScreenNavigator = createAppContainer(NavigationStack);

export default ScreenNavigator;
