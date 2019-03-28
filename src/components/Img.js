import React, { Component } from 'react';
import { AppRegistry,View, Image ,StyleSheet } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/car_compact2.png'
    };
    return (
         <View style={styles.container}>
            <Image source={pic} style={styles.logo}/>
         </View>
    );
  }
}

 const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
   logo: {
     width: 193,
     height: 150,
   },
 });

export default Bananas;