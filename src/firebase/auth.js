// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
// eslint-disable-next-line import/no-unresolved
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
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

/* ---------- Firebase Auth ---------- */

const provider = new GoogleAuthProvider();
const auth = getAuth();

/* ---------- Firebase Auth - GoogleAuthProvider ---------- */

signInWithPopup(auth, provider)
  .then((result) => {
    // eslint-disable-next-line no-unused-vars
    const user = result.user;
  }).catch((error) => {
    // eslint-disable-next-line no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

/* ---------- Firebase Auth - createUserWithEmailAndPassword ---------- */

// eslint-disable-next-line max-len
export const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* ---------- Firebase Auth - signInWithEmailAndPassword ---------- */

// eslint-disable-next-line max-len
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* ---------- Firebase Auth - signOut ---------- */

export const signOutLogin = () => signOut(auth);
