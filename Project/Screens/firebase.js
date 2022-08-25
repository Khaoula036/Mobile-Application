// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkkIZQ2pgvL-im2BU428dxXe89g4aC79A",
  authDomain: "fir-auth-6013a.firebaseapp.com",
  projectId: "fir-auth-6013a",
  storageBucket: "fir-auth-6013a.appspot.com",
  messagingSenderId: "814830862891",
  appId: "1:814830862891:web:765f8777aaf19707c4606e",
  measurementId: "G-6NSE5CV49S"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
