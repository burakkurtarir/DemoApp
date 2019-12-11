import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {

    render(){
      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
              <View>
                  <Ionicons name="ios-disc" size={32} color="white" style={styles.iconSelf}/>
                  <Text style={styles.iconText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <View>
                  <Ionicons name="md-clock" size={32} color="white" style={styles.iconSelf}/>
                  <Text style={styles.iconText}>12:21</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <View>
                  <Ionicons name="ios-apps" size={32} color="white" style={styles.iconSelf}/>
                  <Text style={styles.iconText}>25 Sc</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <View>
                  <Ionicons name="md-notifications" size={32} color="white" style={styles.iconSelf}/>
                  <Text style={styles.iconText}>0</Text>
              </View>
            </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#B42830',
      flexDirection: 'row',
      alignItems:'center',
      elevation: 1
    },
    iconContainer:{
        flex:1,
        alignItems:'center'
    },
    iconText:{
        color: 'white',
        fontWeight:'bold',
        alignSelf: 'center'
    },
    iconSelf: {
      alignSelf:'center'
    }
  });
  
  /*
  <MyModal isModalVisible={this.state.isModalVisible} hideModal={() => { this.hideModal() }}/>
  */