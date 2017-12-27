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
      email :"",
      password : "",
    }
  }
  login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
      var userId = firebase.auth().currentUser.uid;
      var database = firebase.database().ref("users").child(userId);
      database.once('value', (snapshot)=>{
        AsyncStorage.multiSet([
          ["email", this.state.email],
          ["password", this.state.password],
          ["userId", userId],
          ["nama", snapshot.val().nama],
          ["notelp", snapshot.val().notelp],
          ]);
          alert("t")
      });
     const { navigate } = this.props.navigation;
     navigate('Dashboard');
      alert("Login Berhasil");
    }).catch((error)=>{
      alert(error);
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container>
        <Content>
          <Text style={{alignSelf:'center', color:'black', marginTop:'5%'}} >Login</Text>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>EMAIL</Label>
              <Input onChangeText={(email)=>this.setState({email})} placeholder="Masukkan alamat email kamu" style={{fontSize:15}} />
            </Item>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>PASSWORD</Label>
              <Input onChangeText={(password)=>this.setState({password})} placeholder="Masukkan password kamu" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Button block light onPress={()=>this.login() } style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%', backgroundColor:'orange'}} >
            <Text style={{fontSize:20}}>Masuk</Text>
          </Button>
          <Text style={{alignSelf:'center', marginTop:'5%'}}>atau</Text>
          <Text style={{alignSelf:'center', marginTop:'5%', color:'orange'}}>Lupa Password?</Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);