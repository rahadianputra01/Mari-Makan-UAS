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
import * as firebase from 'firebase';

export default class mari extends Component {
constructor(props){
    super(props);
    this.state={
      judul :"",
      nama : "",
      ulasan :"",
    }
  }
  ulasan=()=>{
      var database = firebase.database().ref("ulasan");
      database.push({
        judul : this.state.judul,
        nama : this.state.nama,
        ulasan : this.state.ulasan,
    }).then(()=>{
      const { navigate } = this.props.navigation;
      alert("Ulasan Berhasil Ditambahkan");
      navigate('Dashboard');
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container style={{backgroundColor:'white'}}>
        <Content>
        <ListItem >
        <Text style={{marginLeft:'30%', fontSize:20, fontWeight:'bold'}} >Ulasan Anda</Text>
        </ListItem>
          <Item regular>
            <Input onChangeText={(judul)=>this.setState({judul})} placeholder='Judul' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(nama)=>this.setState({nama})} placeholder='Nama' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(ulasan)=>this.setState({ulasan})} placeholder='Ulasan' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <View style={{alignItems:'center', marginTop:'2%', marginBottom:'1%'}}>
                <Text style={{color:'orange', fontSize:20}} onPress={()=>this.ulasan()} >Kirim Ulasan</Text>
         </View>     
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);