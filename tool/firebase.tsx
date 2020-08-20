import * as firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCUxL8ipMGdZQloeL8i7yPW9akoD4yfnxs",
  authDomain: "loginapp-357b2.firebaseapp.com",
  databaseURL: "https://loginapp-357b2.firebaseio.com",
  projectId: "loginapp-357b2",
  storageBucket: "loginapp-357b2.appspot.com",
  messagingSenderId: "705283870426",
  appId: "1:705283870426:web:ee16f66aaa66cd202c5fe3",
  measurementId: "G-PFXTJSTLT5"
  };

   if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig) 
   }

   export default firebase