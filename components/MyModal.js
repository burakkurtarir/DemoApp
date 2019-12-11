import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image, Alert, 
TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieModalAnimation from './LottieModalAnimation';

export default class MyModal extends Component {

    state = {
        isAnimationEnabled: true,
        animationProgress: new Animated.Value(0)
    }

    componentDidMount(){
        //setTimeout(() => { this.setState({isAnimationEnabled: false}); }, 4000);
        this.playAnimation();
    }

    //Start animation for 4s
    playAnimation = () => {
        Animated.timing(this.state.animationProgress, {
            toValue: 1,
            duration: 4000,
          }).start(() => {
              this.setState({isAnimationEnabled: false, animationProgress: new Animated.Value(0)});
          });
    }

    share = () => {
        Alert.alert("Gösterişçi", "Ya bırak gösteriş yapmayı kardeşim, kullan hediyeni geç işte, ne çok seviyonuz sağda solda paylaşmayı");
    }

    getDetail = () => {
        Alert.alert("Meraklı", "Daha ne ayrıntısı istiyon kardeşim, ekranda yazıyo işte her şey, uzatma");
    }

    close = () => {
        this.props.hideModal();
    }

    render(){
      return (
        <Modal visible={this.props.isModalVisible} onRequestClose={() => { this.props.hideModal() }}
        animationType="fade" transparent={true}>
        <View style={styles.container}>
            <View style={{flex:1}}></View>
            <View style={styles.modalContainer}>
                <View style={{flex:4}}>
                    <Image style={styles.companyImage}
                        source={require('../images/restaurant.jpg')}
                    />
                </View>
                {!this.state.isAnimationEnabled ? <View style={{flex:6}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => { this.share() }}>
                            <Ionicons name="md-share" size={32} color="#B42830" style={{ alignSelf:'flex-end', marginRight:10, marginTop:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:8, justifyContent:'space-between', alignItems:'center', padding:10}}>
                        <Text style={{color: 'black', fontWeight:'bold'}}>TEBRİKLER</Text>
                        <Text>Uncle Sam's American Eatery & Patisserie'den</Text>
                        <Text style={{color: 'black', textAlign:'center', fontWeight:'bold'}}>1 adet yerli içecek {'\n'} + {'\n'} yaş pasta</Text>
                        <Text style={{color: 'black'}}>kazandınız</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => { this.getDetail() }} style={{flex:1}}>
                            <Text style={{color:'#B42830', marginLeft:10}}>Ayrıntılı bilgi edinin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.close() }} style={{flex:1}}>
                            <Text style={{color:'#B42830', marginRight:10, textAlign:'right'}}>Kapat</Text>
                        </TouchableOpacity>
                    </View>
                </View> : <View style={{flex:6, alignItems:'center', padding:10, marginRight:10, marginLeft:10}}>
                        <LottieModalAnimation animationProgress={this.state.animationProgress} />
                    </View>}
            </View>
            <View style={{flex:1}}></View>
        </View>
        </Modal>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex:8, 
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        borderWidth:2, borderColor:'#ED8A59',
        borderRadius: 5
    },
    companyImage: {
        width: '100%',
        height: '100%'
    }
});

/* 
<Text>Tebrikler</Text>
                        <Text>Uncle Sam's American Eatery & Patisserie'den</Text>
                        <Text style={{textAlign:'center'}}>1 adet yerli içecek {"\n"} + {"\n"} yaş pasta</Text>
                        <Text>kazandınız</Text>
*/