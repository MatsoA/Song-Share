import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainPage = ({userDetails, navigation, route}) => {


  console.log(userDetails)

  return(
    <View style={styles.container}>
        <StatusBar style="auto" />
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


export default MainPage