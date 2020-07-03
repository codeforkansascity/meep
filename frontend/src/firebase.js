import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
