/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Picker, Spinner, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');


export default class mm extends Component {
  static navigationOptions = {
      header : null
  };
  constructor(props){
    super(props);
    const { navigate } = this.props.navigation;
    
    navigate('Dashboard');
  }
  render() {
    return (      
       <Container style={{backgroundColor:'orange'}}>
        <View>
          <Image source={require('./logo33.png')} style={{marginTop:'55%', alignSelf:'center'}}/>

          
        </View>
          <Spinner style={{marginTop:'20%'}} color='white' />

        </Container>
    );
  }
}

AppRegistry.registerComponent('mm', () => mm);
