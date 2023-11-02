import {
    Image,
    ImageBackground,
    StyleSheet,
    Platform,
    View,
    Text,
    Alert,
  } from 'react-native';
  import React, { useState } from 'react';
  import MyButton from '../components/MyButton';
  import MyTextInput from '../components/MyTextInput';
  import SocialMedia from '../components/SocialMedia';
  import auth from '@react-native-firebase/auth';
  
  const SignUpScreen = ({navigation}) => {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  
  
    const signUpTestFn = () => {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('User Created with those credentials Please Login');
          navigation.navigate("Login")
        })
        .catch(err => {
          console.log(err.nativeErrorMessage);
          Alert.alert(err.nativeErrorMessage)
        });
    };
  
  
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}>
          
  
  
          <View style={styles.inputsContainer}>
            {/* value, onChangeText */}
            <MyTextInput style={styles.texts} value={email} onChangeText={text => setEmail(text)} placeholderTextColor={'blue'} placeholder="Enter E-mail or User Name" />
            <MyTextInput style={styles.texts} value={password} onChangeText={text => setPassword(text)} placeholderTextColor={'blue'} placeholder="Password" secureTextEntry />
            <MyTextInput style={styles.texts} value={confirmPassword} onChangeText={text => setConfirmPassword(text)} placeholderTextColor={'blue'} placeholder="Confirm Password" secureTextEntry />
  
            <MyButton onPress={signUpTestFn} title={'Sign Up'} />
  
            <Text style={styles.orText}>OR</Text>
  
            <SocialMedia />
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default SignUpScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      height: '100%',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
  
    inputsContainer: {
        height: 350,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        color:'white',
        paddingHorizontal: 10,
        marginBottom:40,
      },
      texts:{
         backgroundColor: '#D9D9D9',
         opacity:0.7,
         color:'white',
        },
    textDontHave: {
      alignSelf: 'flex-end',
      marginRight: 10,
      color: 'white',
      marginBottom: 10,
      fontFamily: 'NovaFlat-Regular',
    },
    orText: {
      fontSize: 20,
      color: 'gray',
      marginTop: 10,
      fontFamily: 'Audiowide-Regular',
    },
  });

