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
          <View style={{width : width, height : 200, backgroundColor:'#e6e6e6'}}>
          <Image source={require('./sizz.jpg')} style={{width:width, height:200}} />
          </View>
        <Content>
        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>SizzleWraps</Text>
          <Text note>Mexican, Cafe, Fast Food, Vegetarian</Text>
          </Body>
        </ListItem>

        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>Informasi Restoran</Text>
          <View style={{flexDirection:'row'}} >
            <Icon name='md-time' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >10.00 - 23.00 Wita</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-call' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2.5%'}} >081237874469</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-navigate' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >Jalan Raya Tanah Lot Munggu, Mengwi</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='md-mail' style={{color:'orange'}} />          
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >sizzlewraps.rest.co.id</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-pricetags' style={{color:'orange'}} />          
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >10k - 120k</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-book' style={{color:'orange'}} onPress={()=>navigate('DaftarMenu') } />          
            <Text onPress={()=>navigate('DaftarMenu') } style={{fontSize:15, marginTop:'1%', marginLeft:'2%', color:'orange'}} >Daftar Menu</Text>
          </View>
          </Body>
        </ListItem>
        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>Ulasan Restoran</Text>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-create-outline' style={{color:'orange'}} onPress={()=>navigate('Ulasan')} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%', color:'orange'}} onPress={()=>navigate('Ulasan')} >Buat Ulasan</Text>
          </View>
          </Body>
        </ListItem>
        <ListItem onPress={()=>this.setState({alert:true}) }>
          <Body style={{marginRight:'2%'}}>
            <Text style={{fontWeight:'bold', fontSize:16}} >Masakan Enak, Harga Murah</Text>
            <Text note>Agung Rahadian Putra</Text>
            <Text note>Makanannya enak, harga terjangkau</Text>
          </Body>
        </ListItem>

        </Content>
        
        </Container>
    );
  }
}


AppRegistry.registerComponent('mari', () => mari);
