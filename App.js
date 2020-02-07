import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/components/SearchBar';

const navigator = createStackNavigator({
  Search:  SearchScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'business search'
  }
}
);
export default createAppContainer(navigator);