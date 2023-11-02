import {
    Image,
    ImageBackground,
    StyleSheet,
    Platform,
    ScrollView,
    View,
    Text,
    Alert,
    Button,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import MyButton from '../components/MyButton';
  import MyTextInput from '../components/MyTextInput';
  import SocialMedia from '../components/SocialMedia';
  import auth from '@react-native-firebase/auth';
  import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { ScrollView } from 'react-native-gesture-handler';
  
  const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '526520353599-3dr98tlduevjslgtki0km4b11j5eo2qd.apps.googleusercontent.com',
    });
  },[])
  
  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
  
      console.log(user);
      // Alert.alert('Success login');
      navigation.navigate('HomeScreen');
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }
  
    const loginWithEmailAndPass = () => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          Alert.alert('Success: Logged In');
          navigation.navigate('HomeScreen');
        })
        .catch(err => {
          console.log(err);
          Alert.alert(err.nativeErrorMessage);
        });
    };
  
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}>
          <Image
            source={require('../assets/login.png')}
            style={styles.loginImage}
          />
          <View style={styles.inputsContainer}>
            <MyTextInput style={styles.texts}
              value={email}
              placeholderTextColor={'blue'}
              onChangeText={text => setEmail(text)}
              placeholder="Enter E-mail or User Name"
            />
            <MyTextInput style={styles.texts}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              placeholderTextColor={'blue'}
              secureTextEntry
            />
  
            <Text style={styles.textDontHave} onPress={() => navigation.navigate("SignUp")}>
              Don't Have An Account Yet?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Sign Up</Text>
            </Text>
            <MyButton title={'Login'} onPress={loginWithEmailAndPass} />
  
  
            <Text style={styles.orText}>OR</Text>
  
            <SocialMedia onGooglePress={onGoogleButtonPress} />
          </View>
        </ImageBackground>
      </ScrollView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      height: '100%',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    loginImage: {
      height: 90,
      width: 90,
      marginTop: 5,
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
     color:'blue',
     fontFamily:"Lato-BoldItalic"
    },
    textDontHave: {
      alignSelf: 'flex-end',
      marginRight: 10,
      color: 'white',
      marginBottom: 10,
      // fontFamily:"Langar-Regular"
    },
    orText: {
      fontSize: 20,
      color: 'gray',
      marginTop: 10,
      fontFamily: 'lato',
    },
  });