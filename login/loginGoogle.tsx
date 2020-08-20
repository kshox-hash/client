import React from 'react';
import {View, TouchableOpacity, Button, StyleSheet} from 'react-native';

//firebase
import firebase from '../tool/firebase'
//google
import * as Google from 'expo-google-app-auth';

//interface profile
interface Props {}
interface State {}

export default class SignWithGoogle extends React.Component <Props,State> {
constructor(props : any){
    super(props);
    
    //bing
    this._signInWithGoogleAsync = this._signInWithGoogleAsync.bind(this)
}
//functions
//login
_signInWithGoogleAsync = async () => {
    try {
        //getting object
        const result  = await Google.logInAsync({
          androidClientId : '805202099126-43pbsgdm4babl999bdbfi1g5esehth25.apps.googleusercontent.com',
          scopes: ['profile', 'email'],  
        })
       
        if (result.type === 'success') {
           const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken , result.accessToken);
           firebase.auth().signInWithCredential(credential)
           .then(user => console.log(user))
        } 
      } //

    catch (e) {
        return { error: true };
      } 
}//

// handlelogin
render(){
    return(
     <TouchableOpacity>
      <View>
          <Button 
          title = 'Google'
          onPress={this._signInWithGoogleAsync} 
          color = '#b22222' /> 
      </View>
     </TouchableOpacity>
    )
  }
}

