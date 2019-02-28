import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSHR8D4Gs7CpBCKJjjUGL9hiopGpfkEgE",
    authDomain: "thoconcattuong.firebaseapp.com",
    databaseURL: "https://thoconcattuong.firebaseio.com/",
    projectId: "thoconcattuong",
    storageBucket: "thoconcattuong.appspot.com",
    messagingSenderId: "431054909948"
};
firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;