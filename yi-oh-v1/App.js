import React from 'react';


import { StatusBar } from 'react-native';

import { MenuProvider} from 'react-native-popup-menu';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import feeds from './src/screens/Feeds'
import Details from './src/screens/Details'

const Navigator = createStackNavigator(
  {
    Feeds: {screen : feeds},
    Details: {screen : Details}
  },
  {
    //headerMode : 'none'
  }

)

const Container = createAppContainer(Navigator);

export default function APP() {
    return (
      <MenuProvider>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"}></StatusBar>
        <Container></Container>
   
      </MenuProvider>
    )
}