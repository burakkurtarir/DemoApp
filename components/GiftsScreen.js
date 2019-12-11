import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import MyModal from './MyModal';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../fakeDatas/Bio';
import GiftsList from './GiftsList';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


const { width, height } = Dimensions.get('screen');

export default class GiftsScreen extends Component {
    
  state = {
    isModalVisible: false,
    imageUrl: null
  };

  componentDidMount(){
    this.showModal();
    this.getPermissionAsync();
    console.log('hi');
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  }

  hideModal = () => {
    this.setState({ isModalVisible: false });
  }

  //Permissions for camera
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  //Pick image from gallery
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ imageUrl: result.uri });
    }
  }

  //Circle image for profile picture
  renderCircleImage = () => {
    let imageSize = width * 0.3; //(width / 10) * 3;
    let radiusSize = imageSize / 2;
    let imageUrl = this.state.imageUrl;
    if(imageUrl == null){
      return <TouchableOpacity onPress={() => { this._pickImage() }}>
          <Image style={{width: imageSize, height: imageSize, borderRadius: radiusSize}}
          source={DATA.imageUrl}
          />
      </TouchableOpacity>
    }
    return <TouchableOpacity onPress={() => { this._pickImage()}}>
        <Image style={{width: imageSize, height: imageSize, borderRadius: radiusSize}}
        source={{uri: imageUrl}}
        />
    </TouchableOpacity>
  }

  render(){
      return (
        <View style={styles.container}>
          <Header />
          <View style={{flex:9}}>
            <View style={styles.bioContainer}>
              <Ionicons name="ios-add-circle" size={32} color="white" style={{ alignSelf:'flex-end', marginRight:10, marginTop:10}}/>
              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex: 4, justifyContent:'center', alignItems:'center', paddingBottom: 10}}>
                  {this.renderCircleImage()}
                </View>
                <View style={{flex: 6, paddingBottom:10}}>
                  <Text style={styles.bioText}>{DATA.name}</Text>
                  <Text style={{color:'white', textAlign:'center', width:'80%', fontSize:12}}>{DATA.status}</Text>
                  <View style={{flex:1, justifyContent:'flex-end'}}>
                    <Text style={styles.bioText}>HEDİYE KUTUM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.listContainer}>
              <View style={{flexDirection:'row', alignItems:'center', paddingBottom:10, paddingTop:10}}>
                <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
                  <View style={{width:14, height:14, borderRadius:7, backgroundColor:'#2b8a3e', marginRight:2}}></View>
                  <Text style={{marginLeft:2}}>Bekliyor</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
                  <View style={{width:14, height:14, borderRadius:7, backgroundColor:'#ff8c00', marginRight:2}}></View>
                  <Text style={{marginLeft:2}}>Kullanıldı</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
                  <View style={{width:14, height:14, borderRadius:7, backgroundColor:'#9E4624', marginRight:2}}></View>
                  <Text style={{marginLeft:2}}>Süresi geçti</Text>
                </View>
              </View>
              <GiftsList />
            </View>
          </View>
          <MyModal isModalVisible={this.state.isModalVisible} hideModal={() => { this.hideModal() }}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bioContainer: {
      flex: 3,
      backgroundColor: '#B42830',
      paddingBottom: 10
    },
    listContainer: {
      flex: 7,
      backgroundColor: 'white',
    },
    profileImage:{
      width: '85%',
      height: '85%',
      borderRadius: 100
    },
    bioText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '80%',
      fontSize: 16
    }
  });
  
  /* 
  
  <Image style={styles.profileImage}
                          source={{uri:DATA.imageUrl}}
                  />
  */