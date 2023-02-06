import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import Signin from "./Signin"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Stack = createNativeStackNavigator();

export default function App() {

  //Object to manage info about current user
  //Expected to be populated by Signin
  //TODO: handle uid
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    profilePicture: "",
    uid: 0
  });

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="signup"
          component={signupButton}
          options={{title: "Welcome"}}
        />
        <Stack.Screen
          name="login"
          component={loginScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const signupButton = ({navigation}) => {
  return (
    <Button
      title="Sign up"
      onPress={() =>
        navigation.navigate('login')
      }
    />
  );
}

const loginScreen = ({navigation, route}) => {
  return(
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Signin userDetails = {userDetails} setUserDetails = {setUserDetails}/>
        <Text>
          Username: {userDetails.userName} {"\n"}
          Email: {userDetails.email}
        </Text>
        <Image style = {styles.profilePicture} source = {{uri: userDetails.profilePicture}}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePicture: {
    width: 50,
    height: 50,
  }
});
