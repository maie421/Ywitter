import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDCtMxK4mw8R7tLzk9CVj65vqlKTkVsAOY",
    authDomain: "ywitter-152a2.firebaseapp.com",
    databaseURL: "https://ywitter-152a2.firebaseio.com",
    projectId: "ywitter-152a2",
    storageBucket: "ywitter-152a2.appspot.com",
    messagingSenderId: "980764053191",
    appId: "1:980764053191:web:b000b762d5ea0db78df8e2",
    measurementId: "G-C2SNHFE8GN"
  };

export default firebase.initializeApp(firebaseConfig);