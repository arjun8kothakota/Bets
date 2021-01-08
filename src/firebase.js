import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA0_r0w6iQyc3OqVNyUyGuD2im3X3vrpnk",
    authDomain: "who-ended-it.firebaseapp.com",
    projectId: "who-ended-it",
    storageBucket: "who-ended-it.appspot.com",
    messagingSenderId: "675649022701",
    appId: "1:675649022701:web:90c4b9767a529f4ab3bae4",
    measurementId: "G-81KQ85TYZY"
}
const app = firebase.initializeApp(config)
export const db = app.database()

export default firebase
