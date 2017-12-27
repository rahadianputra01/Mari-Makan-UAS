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
import Swiper from 'react-native-swiper';
var{width,height}=Dimensions.get('window');
var swiper = React.createClass;

export default class mari extends Component {
  static navigationOptions = {
      header : null
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Text onPress={()=>navigate('Dashboard')} style={{position:'absolute', zIndex:1, color:'orange', marginLeft:'2%', marginTop:'1%', fontWeight:'bold'}} >Skip Login</Text>
         <View style={{height:height}}>
          <View>      
            <Image style={{width:width, height:height}} source={require('./swiper2.jpg')}/>
            <View style={{width:width, height:height, position:'absolute'}}>
              <Button light onPress={()=>navigate('Choose')} style={{marginTop:'20%', alignItems:'center', alignSelf:'center'}} >
                <Text style={{color:'orange', fontSize:20}} >          Login User          </Text>
              </Button>
              <Button warning onPress={()=>navigate('Choose2')} style={{marginTop:'5%', widht:50, alignItems:'center', alignSelf:'center'}}>
              <Text style={{color:'white', fontSize:20, alignSelf:'center'}} >          Login Admin          </Text>
              </Button>
         </View>
        </View>
      </View>
      </Container>

    );
  }
}
var styles = StyleSheet.create({
  wrapper: {
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems:'center'
  }
})

AppRegistry.registerComponent('mm', () => mm);
