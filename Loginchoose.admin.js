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
  StatusBar,
  Dimensions,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');

export default class mari extends Component {
  static navigationOptions = {
      header : null
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <Container style={{backgroundColor:'#e6e6e6'}} >
      <View style={{width:width, height:height, position:'absolute'}}>
        <Image style={{alignSelf:'center', marginTop:'15%'}} source={require('./profile.png')}/>
        <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold', color:'white' }} >Admin Restaurant</Text>
      <View style={{flexDirection: 'row', marginTop:'85%', marginBottom:'1%'}}>
        <Button light onPress={()=>navigate('Daftar2')} style={{marginLeft:'7%'}} >
        <Text style={{color:'orange', fontSize:20}} >          Daftar          </Text>
        </Button>
        <Button warning onPress={()=>navigate('Login2')} style={{marginLeft:'1%', widht:50, marginRight:'2%'}}>
        <Text style={{color:'white', fontSize:20, alignSelf:'center'}} >          Log In          </Text>
        </Button>
      </View>
      </View>

    </Container>
    );
  }
}

AppRegistry.registerComponent('mm', () => mm);
