import React from 'react';
import { View, Button } from 'react-native';

//facebook
import  * as Facebook from 'expo-facebook'
//firebase
import firebase from '../tool/firebase'

interface props{}
interface state {}

export default class SignWithFacebook extends React.Component <props,state>{
    constructor(props : any){
        super(props);
    //bind
    this._signWithFacebookAsync = this._signWithFacebookAsync.bind(this)
    }
   
    _signWithFacebookAsync = async () => {
        try {
            await Facebook.initializeAsync('2582955108607922');
            const Result = await Facebook.logInWithReadPermissionsAsync({
              permissions: ["email", "public_profile"], 
            })
            console.log(Result)
            
            if (Result.type === 'success') {
                
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${Result.token}`);
    
              // get credentials
              const credential = firebase.auth.FacebookAuthProvider.credential(Result.token);
              //create facebook user
              const facebookProfileData = await firebase.auth().signInWithCredential(credential);
              console.log(facebookProfileData)
              
            } else {
              // type === 'cancel'
            
            }
          } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
          }
    }

    render(){
        return(
            <View>
              <Button 
                title = 'facebook'
                 onPress={this._signWithFacebookAsync} 
                color = '#00008b' /> 
            </View>
        )
    }
}

          
