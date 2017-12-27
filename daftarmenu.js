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
  ListView,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';
var{width,height}=Dimensions.get('window');

export default class mari extends Component {
  constructor(props){
    super(props);
    this.state=({
      alert : false,
      dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 != row2 }),
    })
  }
  componentWillMount(){
    var database = firebase.database().ref("datarest/");
    database.on("child_added", (dataSnapshot)=>{
      this.data.push({namarest : dataSnapshot.val().namarest, jenisrest : dataSnapshot.val().jenisrest, alamatrest : dataSnapshot.val().alamatrest })
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
           <ListItem >
           <Text style={{marginLeft:'30%', fontSize:20, fontWeight:'bold'}} >Daftar Menu</Text>
           </ListItem>
        <Content>
        <ListItem onPress={()=>this.setState({alert:true}) }>
          <Thumbnail style={{ marginRight:'2%'}} source={require('./fotomakanan1.png')}/>
          <Body style={{marginRight:'2%'}}>
            <Text style={{fontWeight:'bold', fontSize:18}} >Mie Setan Cabe 5 - 25</Text>
            <Text note>10k</Text>
          </Body>
        </ListItem>
        </Content>
        </Container>
    );
  }
}


AppRegistry.registerComponent('mari', () => mari);
