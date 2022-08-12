import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVjOmTbyHy0FjnMVVfcrk4oU6OEs9OKh8',
  authDomain: 'red-social-6bee5.firebaseapp.com',
  projectId: 'red-social-6bee5',
  storageBucket: 'red-social-6bee5.appspot.com',
  messagingSenderId: '385355317169',
  appId: '1:385355317169:web:79765dc3d541db35264790',
  measurementId: 'G-T3NSZCCGQG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* ---------- Firebase Auth ---------- */

const provider = new GoogleAuthProvider();
const auth = getAuth();

/* ---------- Firebase Auth - GoogleAuthProvider ---------- */

signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

/* ---------- Firebase Auth - createUserWithEmailAndPassword ---------- */

// const email = 'beatrizlaborato@gmail';
// const password = '23456789';

// console.log(auth);

export const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    console.log('registrado con exito');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

/* ---------- Firebase Auth - signInWithEmailAndPassword ---------- */

export const signInWithEmail = (email, password) =>  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log('Iniciaste sesión');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('error de correo');
  });

// signInWithEmail('rociolaboratoria@gmai.com', '12345678');