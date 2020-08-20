import React from 'react';
import {Image, View,Text,StyleSheet,Button, ImageBackground, } from 'react-native';
import  * as logo from '../assets/images/logo.png'


//botones de login
interface Props {}
interface State {}
export default class Login extends React.Component <Props,State>{
    constructor(props : any){
        super(props)
    }
render(){
    return(
       <View style={{ flex:1}}>
          
           <Image source={{logo}} />
          

           
       </View>     
     )
   }
}




