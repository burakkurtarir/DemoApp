import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GiftData from '../fakeDatas/Gifts';
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

function Item({ name, detail, endTime, statusCode, imageUrl }){

  let statusColor = '#2b8a3e';
  if(statusCode == 2){ //Hediye kullanıldı
    statusColor = '#ff8c00';
  } 
  else if(statusCode == 3){ //Hediyenin süresi bitti
    statusColor = '#9E4624';
  }

    return(
        <TouchableOpacity activeOpacity={.5}>
            <View style={styles.itemContainer}>
                <Image style={styles.itemImage}
                    source={imageUrl}
                />
                <View style={{justifyContent:'center'}}>
                    <Text>{name}</Text>
                    <Text>{endTime}'a kadar geçerlidir</Text>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <View style={{width:14, height:14, borderRadius:7, 
                    backgroundColor: statusColor, 
                    marginRight:2, 
                    alignSelf:'flex-end'}}></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default class GiftsList extends Component {
    render(){
      return (
        <View style={styles.container}>
          <FlatList data={GiftData} 
          renderItem={({ item }) => (
              <Item name={item.name} imageUrl={item.imageUrl} endTime={item.endTime} statusCode={item.statusCode}/>
          )} 
          keyExtractor={item => item.id.toString()}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    itemImage: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        marginRight: 4
    },
    itemContainer: {
        flexDirection:'row', 
        paddingLeft:8, 
        paddingRight:8, 
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#e5e9f0'
    }
  });
  
  /*
  
  <Image style={styles.itemImage}
                source={require(imageUrl)}
                />*/