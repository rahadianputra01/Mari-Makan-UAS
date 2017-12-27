import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';

export default class mari extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container>
        <Content>
          <Text style={{alignSelf:'center', color:'black', marginTop:'5%'}} >Login</Text>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>EMAIL</Label>
              <Input placeholder="Masukkan alamat email restaurant" style={{fontSize:15}} />
            </Item>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>PASSWORD</Label>
              <Input placeholder="Masukkan password restaurant" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Button block light onPress={()=>navigate('Admin')} style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%', backgroundColor:'orange'}} >
            <Text style={{fontSize:20}} >Masuk</Text>
          </Button>
          <Text style={{alignSelf:'center', marginTop:'5%'}}>atau</Text>
          <Text style={{alignSelf:'center', marginTop:'5%', color:'orange'}}>Lupa Password?</Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);