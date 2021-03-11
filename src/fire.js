import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyCwvwQAfHEa6EKyknGCQS7_6dwAuhvYINQ",
//     authDomain: "assignment-645c2.firebaseapp.com",
//     projectId: "assignment-645c2",
//     storageBucket: "assignment-645c2.appspot.com",
//     messagingSenderId: "310302682079",
//     appId: "1:310302682079:web:db53730a6223382463726a"
//   };


var firebaseConfig = {
    apiKey: "AIzaSyCKN9WD_1YmAK3BtiPhRJ3DE9T6F5_sVoc",
    authDomain: "apptech-d2f50.firebaseapp.com",
    databaseURL: "https://apptech-d2f50-default-rtdb.firebaseio.com",
    projectId: "apptech-d2f50",
    storageBucket: "apptech-d2f50.appspot.com",
    messagingSenderId: "286177390201",
    appId: "1:286177390201:web:e0a608634f33dc733beea8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);



  // Initialize Firebase
//    firebase.initializeApp(firebaseConfig);

  export default fire;