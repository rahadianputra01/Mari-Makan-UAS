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
  Modal,
  TouchableWithoutFeedback,
  ListView,
} from 'react-native';
import * as firebase from 'firebase';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import Swiper from 'react-native-swiper';
var{width,height}=Dimensions.get('window');
var swiper = React.createClass;

var config = {
    apiKey: "AIzaSyBaU5g-QjvSM22CPwRMamwncPxGbm_bg1c",
    authDomain: "mari-makan-b1229.firebaseapp.com",
    databaseURL: "https://mari-makan-b1229.firebaseio.com",
    projectId: "mari-makan-b1229",
    storageBucket: "mari-makan-b1229.appspot.com",
    messagingSenderId: "1060192370052"
  };
const firebaseApp = firebase.initializeApp(config);


export default class mm extends Component {
  static navigationOptions = {
      header : null
  };
  constructor(props){
    super(props);
    this.state=({
      alert : false,
      dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2 }),
    });
  this.arrayrest=[];
  }

  next = () =>{
    this.setState({
      alert : false
    });
    const { navigate } = this.props.navigation;
    navigate('RestoranInfo')
  }
  berhasil = () =>{
    alert("Berhasil Ditambahkan ke Favorit")
    this.setState({
      alert : false
    });
  }
  berhasil2 = () =>{
    alert("Restoran Telah Dikunjungi")
    this.setState({
      alert : false
    });
  }

  componentWillMount(){
    var database = firebase.database().ref("datarest");
    database.on("child_added", (dataSnapshot)=>{
      this.arrayrest.push({id:dataSnapshot.key, namarest : dataSnapshot.val().namarest, jenisrest : dataSnapshot.val().jenisrest, alamatrest : dataSnapshot.val().alamatrest });
      this.setState({
        dataSource : this.state.dataSource.cloneWithRows(this.arrayrest),
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
        <View style={{height:150}} >
         <Swiper style={styles.wrapper} autoplay={true}  >
          <View>
            <Image source={require('./sizz.jpg')} style={{width:width, height:150}} />
            <View style={{position:'absolute', zIndex:1, alignItems:'center'}}>
              <Text style={{marginTop:'12%', marginLeft:'20%', fontWeight:'bold', fontSize:20, color:'#fff'}}>SizzleWraps Restaurant</Text>
            </View>
          </View>
          <View>
            <Image source={require('./Inside-Restaurant.jpg')} style={{width:width, height:150}} />
            <View style={{position:'absolute', zIndex:1, alignItems:'center'}}>
              <Text style={{marginTop:'12%', marginLeft:'20%', fontWeight:'bold', fontSize:20, color:'#fff'}} >Tsavo Lion Restaurant</Text>
              </View>
          </View>
          <View>
            <Image source={require('./dsc.jpg')} style={{width:width, height:150}} />
            <View style={{position:'absolute', zIndex:1, alignItems:'center'}}>
              <Text style={{marginTop:'12%', marginLeft:'20%', fontWeight:'bold', fontSize:20, color:'#fff'}} >Dinning Corner Restaurant</Text>
              </View>
          </View>
        </Swiper>
        </View>
        <Item rounded style={{alignSelf:"center", height:40, width:"95%", color:'black', marginTop:'2%'}}>
          <Icon name='ios-search' style={{color:'grey'}} />
          <Input placeholder="Tentukan makananmu..." style={{color:'grey'}} placeholderTextColor='grey' />
        </Item>
        <Content>
        <ListItem>
        <Text>Semua Restoran</Text>
        </ListItem>
        
        <ListView dataSource = {this.state.dataSource} renderRow={(rowData)=>
          <ListItem onPress={()=>this.setState({alert:true})}>
            <Thumbnail style={{ marginRight:'2%'}} source={require('./fotomakanan1.png')}/>
            <Body style={{marginRight:'2%'}}>
              <Text style={{fontWeight:'bold', fontSize:18}} >{rowData.namarest}</Text>
              <Text note>{rowData.jenisrest}</Text>
              <Text note>{rowData.alamatrest}</Text>
            </Body>
          </ListItem>
        }/>

        </Content>
        
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>navigate('Dashboard') } style={{backgroundColor:'#e6e6e6'}} >
              <Image source={require('./logofoot.png')}/>
              <Text style={{color:'#F07F09'}}>Home</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Favorit')} >
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
                <View style={{backgroundColor : 'white', height : height/2.8, width : width-100, borderRadius : 5, alignSelf : 'center', marginTop : height/2.5}}>
                  <View style={{height : 35, width : width-100, alignItems:'center', backgroundColor : 'orange', borderTopLeftRadius : 5, borderTopRightRadius : 5 }}>
                    <Text style={{color : 'white', fontSize : 18, textAlign : 'center', marginTop : 5}}>Mari Makan</Text>
                  </View>
                  <Button full style={{backgroundColor:'white'}}  onPress={()=>this.next()} >
                  <Text>Lihat Informasi Restoran</Text>
                  </Button>
                  <Button full style={{backgroundColor:'white'}}  onPress={()=>this.berhasil()} >
                  <Text>Tambahkan ke Favorit</Text>
                  </Button>
                  <Button full style={{backgroundColor:'white'}}  onPress={()=>this.berhasil2()} >
                  <Text>Dikunjungi</Text>
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

AppRegistry.registerComponent('uas2', () => mm);
