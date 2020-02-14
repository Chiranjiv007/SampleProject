/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';

import { createStackNavigator} from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import SplashScreen from 'react-native-splash-screen';

import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantList from 'components/RestaurantList'

import RestaurantInfo from 'components/RestaurantInfo'

import About from 'components/About';

import AddReview from 'components/AddReview';

const List = createStackNavigator({
  Home: { screen : RestaurantList },
  Info: { screen : RestaurantInfo } 
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066CC',
      color : '#FFF' 
  },
  headerTintColor : '#FFF',
  headerTitleStyle : {
      color : '#FFF'
  }
  }
}
);


// const App = createAppContainer(AppNavigator)

// export default App

const Tabs = createBottomTabNavigator({
  List : {screen : List},
  About : {screen : About},
},{

  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        console.log(tintColor)
        const route = navigation.state.routeName
        const name = {
          'List' : 'list',
          'About' : 'info-circle'
        }[route]
        return <Icon name={name} color={tintColor} size={22} />
      },
      tabBarOptions: {
        activeBackgroundColor: '#E6F0FA'
      }
    }

  }
}
)


const AppNavigator = createStackNavigator({
  Tabs: { screen : Tabs },
  AddReview: { screen : AddReview }
},{
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: false
  }
})

const App = createAppContainer(AppNavigator)



export default class Application extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return(
      <App />
    )
  }
}


// export default App;
