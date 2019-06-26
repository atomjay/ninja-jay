import firebase from 'firebase'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA95KlT43E0i8WFtP7XUww6wuA8nBRdT_M",
    authDomain: "ninjia-jay.firebaseapp.com",
    databaseURL: "https://ninjia-jay.firebaseio.com",
    projectId: "ninjia-jay",
    storageBucket: "ninjia-jay.appspot.com",
    messagingSenderId: "751767656208",
    appId: "1:751767656208:web:9014748301c38620"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // @firebase/firestore: Firestore (6.2.3): 
  // The timestampsInSnapshots setting now defaults to true and you no
  // longer need to explicitly set it. In a future release, the setting
  // will be removed entirely and so it is recommended that you remove it
  // from your firestore.settings() call now.

  //firebaseApp.firestore().settings({ timestampsInSnapshots: true})
  

  //export firebase database
  export default firebaseApp.firestore()