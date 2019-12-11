import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import WheelOfFortune from './WheelOfFortune';
import Header from './Header';
import MyModal from './MyModal';

export default class SpinScreen extends Component {

  state = {
    isModalVisible: false
  };

  componentDidMount(){
    this.showModal();
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  }

  hideModal = () => {
    this.setState({ isModalVisible: false });
  }


    render(){
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.mainContainer}>
            <WheelOfFortune />
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
    headerContainer: {
      flex: 1
    },
    mainContainer: {
      flex: 9
    }
  });
  