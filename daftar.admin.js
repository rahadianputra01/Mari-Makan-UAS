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
      nama : "",
      email :"",
      notelp : "",
      password : "",
      repassword : "",
    }
  }
  signUpAdmin=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
      var adminId = firebase.auth().currentUser.uid;
      var database = firebase.database().ref("admin").child(adminId);
      database.set({
        adminId : adminId,
        email : this.state.email,
        notelp : this.state.notelp,
        password : this.state.password,
        repassword : this.state.repassword,
    }).then(()=>{
      const { navigate } = this.props.navigation;
      alert("Pendaftaran Restaurant Berhasil");
      navigate('Admin');
    });
    }).catch((error)=>{
      alert(error)
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container>
        <Content>
          <Text style={{alignSelf:'center', color:'black', marginTop:'5%'}} >Daftar</Text>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>EMAIL</Label>
              <Input onChangeText={(email)=>this.setState({email})} placeholder="Masukkan alamat email restaurant" style={{fontSize:15}} />
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>Nomor Telepon</Label>
              <Input onChangeText={(notelp)=>this.setState({notelp})} placeholder="Masukkan nomor telepon aktif" style={{fontSize:15}}/>
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>PASSWORD</Label>
              <Input onChangeText={(password)=>this.setState({password})} placeholder="Minimal 8 karakter" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>CONFIRM PASSWORD</Label>
              <Input onChangeText={(repassword)=>this.setState({repassword})} placeholder="Ulangi masukkan password" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Button block light onPress={()=>this.signUpAdmin()} style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%', backgroundColor:'orange'}}>
            <Text style={{fontSize:20}}>Daftar</Text>
          </Button>
          <Text style={{alignSelf:'center', justifyContent:'center', marginLeft:'2%', fontSize:12, marginTop:'5%'}}>Dengan mengeklik Daftar, maka Anda setuju dengan Ketentuan kami dan bahwa Anda sudah membaca Kebijakan Data kami, termasuk Penggunaan cookie kami.</Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mm', () => mm);