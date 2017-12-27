import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './login.android';
import Signup from './daftar';
import Login2 from '/loginadmin';
import Daftar2 from './daftar.admin';
import Dashboard from './dashboard.android';
import Choose from './loginchoose.android';
import Choose2 from './Loginchoose.admin'
import Splash from './splash';
import RestoranInfo from './restoraninfo.android';
import Favorit from './favorit';
import History from './History';
import Profile from './Profile';
import Pengaturan from './Pengaturan';

export default class mm extends Component {
  static navigationOptions = {
      header : null
  };

  render() {
     const { navigation } = this.props;
     const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1,backgroundColor:'#e6e6e6'}}>
       
     <Splash navigation={ navigation }/>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: Splash},
  Signup :{screen: Signup},
  Dashboard :{screen:Dashboard},
  Login : {screen:Login},
  Login2 : {screen:Login2},
  Daftar2 : {screen:Daftar2},
  Choose : {screen:Choose},
  Choose2 : {screen:Choose2},
  RestoranInfo : {screen:RestoranInfo},
  Favorit : {screen:Favorit},
  History : {screen:History},
  Profile : {screen:Profile},
  Pengaturan : {screen:Pengaturan}
});


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mm', () => SimpleApp);
