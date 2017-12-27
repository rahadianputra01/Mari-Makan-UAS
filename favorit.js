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
  Modal,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');

export default class mm extends Component {
  static navigationOptions = {
      header : null
  };
  constructor(props){
    super(props);
    this.state=({
      alert : false
    })
  }

  next = () =>{
    this.setState({
      alert : false
    });
    const { navigate } = this.props.navigation;
    navigate('RestoranInfo')
  }
  berhasil = () =>{
      alert("Berhasil Dihapus dari Favorit")
      this.setState({
        alert : false
      });
    }
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
        <Content>
        <ListItem>
        <Text style={{marginLeft:'40%', fontSize:20, fontWeight:'bold'}} >Favorit</Text>
        </ListItem>
        <ListItem onPress={()=>this.setState({alert:true}) }>
          <Thumbnail style={{ marginRight:'2%'}} source={require('./fotomakanan1.png')}/>
          <Body style={{marginRight:'2%'}}>
            <Text style={{fontWeight:'bold', fontSize:18}} >Kober Mie Setan</Text>
            <Text note>1997 Reviews</Text>
            <Text note>Jalan Bedugul No. 37, Denpasar 80224, Indonesia</Text>
          </Body>
        </ListItem>
        

       
        </Content>
        
        
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>navigate('Dashboard') }>
              <Image source={require('./logofoot.png')}/>
              <Text style={{color:'#F07F09'}}>Home</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Favorit')} style={{backgroundColor:'#e6e6e6'}}  >
              <Icon name='ios-restaurant-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>Favorit</Text>
            </Button>
            <Button vertical onPress={()=>navigate('History')}>
              <Icon name='ios-list-box-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>History</Text>
            </Button>
            <Button vertical onPress={()=>navigate('LoginPilih') } >
              <Icon name='ios-person-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>

        <Modal animationType = {"fade"} transparent   = {true} visible  = {this.state.alert} onRequestClose ={()=>this.setState({alert : false})}>
          <TouchableWithoutFeedback onPress={()=>this.setState({alert : false})}>
            <View style={{height : height, width : width, backgroundColor : 'rgba(51,44,43,0.5)'}}>
              <TouchableWithoutFeedback>
                <View style={{backgroundColor : 'white', height : height/3.5, width : width-100, borderRadius : 5, alignSelf : 'center', marginTop : height/2.5}}>
                  <View style={{height : 35, width : width-100, backgroundColor : 'orange', borderTopLeftRadius : 5, borderTopRightRadius : 5 }}>
                    <Text style={{color : 'white', fontSize : 18, textAlign : 'center', marginTop : 5}}>Nama Restoran</Text>
                  </View>
                  <Button full style={{backgroundColor:'white'}} onPress={()=>this.next()} >
                  <Text>Lihat Informasi Restoran</Text>
                  </Button>
                  <Button full style={{backgroundColor:'white'}} onPress={()=>this.berhasil()} >
                  <Text>Hapus dari Favorit</Text>
                  </Button>
                  <Button full style={{backgroundColor:'white'}} onPress={()=>this.setState({alert : false})} >
                  <Text onPress={()=>this.setState({alert : false})} >Batal</Text>
                  </Button>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        </Container>
    );
  }
}

AppRegistry.registerComponent('mm', () => mm);
