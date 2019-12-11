import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class LottieModalAnimation extends React.Component {

  componentDidMount() {
    //setTimeout(() => { this.animation.play(); }, 1);
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
    //setTimeout(() => { this.animation.stop(); }, 2000);
    //setTimeout(() => { this.setState({isAnimationEnabled: true}); }, 1);
    //setTimeout(() => { this.setState({isAnimationEnabled: false}); }, 2000);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };


  render() {
    return (
      <View>
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: '#fff',
              }}
              source={require('../assets/happy-birthday.json')}
              // Animation playing according to progress value
              progress={this.props.animationProgress}
          />
        </View>
    );
  }
}