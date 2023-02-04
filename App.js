import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import Signin from "./Signin"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function App() {

  //Object to manage info about current user
  //Expected to be populated by Signin
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    profilePicture: ""
  });

  return (
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
