import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyACN8ZjRaJQ3FisInfgAezkpBTMIGvCeY8",
    authDomain: "barter-system-76-84.firebaseapp.com",
    databaseURL: "https://barter-system-76-84.firebaseio.com",
    projectId: "barter-system-76-84",
    storageBucket: "barter-system-76-84.appspot.com",
    messagingSenderId: "577013725739",
    appId: "1:577013725739:web:4d6c80fcde0e5ebfe3086e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();