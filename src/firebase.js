import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-NXQUCi8CX-DKc2zTakx8qNNssoX0_os",
    authDomain: "fir-react-app-f79f1.firebaseapp.com",
    databaseURL: "https://fir-react-app-f79f1.firebaseio.com",
    projectId: "fir-react-app-f79f1",
    storageBucket: "fir-react-app-f79f1.appspot.com",
    messagingSenderId: "790189774716",
    appId: "1:790189774716:web:4e0341c3fd7658c680b6f9",
    measurementId: "G-QWLS5L3QNK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase