import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { FC } from 'react';

const SocialMedia :FC<{onGooglePress?: () =>void}> = ({onGooglePress}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SocialMediaIcons/facebook.png')}
        style={styles.image}
      />
      <Image
        source={require('../assets/SocialMediaIcons/twitter.png')}
        style={styles.twitterIcon}
      />
      <TouchableOpacity onPress={onGooglePress}>
        <Image
          source={require('../assets/SocialMediaIcons/google.png')}
          style={styles.image}
          />
        </TouchableOpacity>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    padding:15,
    borderRadius:50,
    backgroundColor: 'red',
  },
  twitterIcon: {
    height: 30,
    width: 30,
    padding:15,
    borderRadius:50,
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
});