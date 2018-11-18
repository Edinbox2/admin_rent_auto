import firebase from 'firebase/app'; 
import 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth'; 

const config={
    apiKey: "AIzaSyA14dDnNeK8niqLK4xA1LKKxwvTXyVxmxI",
    authDomain: "rentadmin-8034e.firebaseapp.com",
    databaseURL: "https://rentadmin-8034e.firebaseio.com",
    projectId: "rentadmin-8034e",
    storageBucket: "rentadmin-8034e.appspot.com",
    messagingSenderId: "470383057131"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export {
    firebase, 
    firebaseDB
}