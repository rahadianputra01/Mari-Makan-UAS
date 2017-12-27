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
      namarest :"",
      jenisrest : "",
      jambukarest :"",
      notelprest :"",
      alamatrest :"",
      emailrest :"",
      hargarest:"",
    }
  }
  ulasan=()=>{
      var database = firebase.database().ref("datarest");
      database.push({
        namarest : this.state.namarest,
        jenisrest : this.state.jenisrest,
        jambukarest : this.state.jambukarest,
        notelprest : this.state.notelprest,
        alamatrest : this.state.alamatrest,
        emailrest : this.state.emailrest,
        hargarest : this.state.hargarest,
    }).then(()=>{
      const { navigate } = this.props.navigation;
      alert("Informasi Berhasil Ditambahkan");
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container style={{backgroundColor:'white'}}>
        <Content>
        <ListItem >
        <Text style={{marginLeft:'20%', fontSize:20, fontWeight:'bold'}} >Informasi Restaurant</Text>
        </ListItem>
          <Item regular>
            <Input onChangeText={(namarest)=>this.setState({namarest})} placeholder='Nama Restaurant' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(jenisrest)=>this.setState({jenisrest})} placeholder='Jenis Restaurant' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(jambukarest)=>this.setState({jambukarest})} placeholder='Jam Buka Restaurant (ex. 10.00am - 22.00pm)' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(notelprest)=>this.setState({notelprest})} placeholder='Nomor Telepon Restaurant' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(alamatrest)=>this.setState({alamatrest})} placeholder='Alamat Restaurant' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(emailrest)=>this.setState({emailrest})} placeholder='Email Aktif Restaurant' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input onChangeText={(hargarest)=>this.setState({hargarest})} placeholder='Rentang Harga (ex. 10k - 50k)' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <View style={{alignItems:'center', marginTop:'2%', marginBottom:'1%'}}>
                <Text style={{color:'orange', fontSize:20}} onPress={()=>this.ulasan()} >Kirim Informasi</Text>
         </View>     
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);