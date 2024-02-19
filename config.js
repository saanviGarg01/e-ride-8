import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA17SLIOnZVtSDu_ShAxvxKA-7gVdivDHQ",
  authDomain: "e-ride-cycle.firebaseapp.com",
  projectId: "e-ride-cycle",
  storageBucket: "e-ride-cycle.appspot.com",
  messagingSenderId: "53096234986",
  appId: "1:53096234986:web:438891ebf08622970bbc93"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
