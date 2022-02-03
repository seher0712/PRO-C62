 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBzVoMeIGP4HOVNGqL8IVX-LiUJYJA1rk0",
  authDomain: "schoolattendanceapp-d2bc5.firebaseapp.com",
  projectId: "schoolattendanceapp-d2bc5",
  storageBucket: "schoolattendanceapp-d2bc5.appspot.com",
  messagingSenderId: "1063872347471",
  appId: "1:1063872347471:web:8ea9e156707abcffd2d93a"
};
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
  export default firebase.database()
 
 

  