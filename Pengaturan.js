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
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');

export default class mm extends Component {
  static navigationOptions = {
      header : null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
        <Content>
        <ListItem>
          <Text>Ubah Password</Text>
        </ListItem>
        <ListItem onPress={()=>navigate('Choose')}>
          <Text onPress={()=>navigate('Choose')}>Daftar / Login Pengguna </Text>
        </ListItem>
        <ListItem onPress={()=>navigate('Choose2')}>
          <Text onPress={()=>navigate('Choose2')}>Daftar / Login Admin </Text>
        </ListItem>

        </Content>
        </Container>
    );
  }
}
AppRegistry.registerComponent('mm', () => mm);
