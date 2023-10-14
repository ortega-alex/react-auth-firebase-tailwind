// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDA64ytsgAeUhs8xnIMy8iTltT6DiZDz1E',
    authDomain: 'react-fb-auth-e8113.firebaseapp.com',
    projectId: 'react-fb-auth-e8113',
    storageBucket: 'react-fb-auth-e8113.appspot.com',
    messagingSenderId: '78153236954',
    appId: '1:78153236954:web:140382cd4388e2ad6e00e3'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
