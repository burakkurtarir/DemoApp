import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import MyModal from './MyModal';

export default class ProfileScreen extends Component {

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
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.mainContainer}>
            <Text>This is Profile Screen</Text>
          </View>
          <MyModal isModalVisible={this.state.isModalVisible} hideModal={() => { this.hideModal() }}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
      flex: 1
    },
    mainContainer: {
      flex: 9
    }
  });
  