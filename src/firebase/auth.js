// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js';

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

export const signInWithGoogle = () => signInWithPopup(auth, provider);

/* ---------- Firebase Auth - createUserWithEmailAndPassword ---------- */

// eslint-disable-next-line max-len
export const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* ---------- Firebase Auth - signInWithEmailAndPassword ---------- */

// eslint-disable-next-line max-len
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* ---------- Firebase Auth - signOut ---------- */

export const signOutLogin = () => signOut(auth);

/* ----- FireStore ----- */

export const stateChangedUser = (user) => onAuthStateChanged(auth, user);

export const db = getFirestore(app);

export const docRef = (publicacion) => await addDoc(collection(db, 'publication'), publicacion);
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Annita",
//     middle: "Mat",
//     last: "Tur",
//     born: 1999,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

function saludo (name) {console.log('hola' + name)};

saludo('rocio');
console.log(saludo('rocio'));
saludo('beatriz');
saludo('annita');

export function callbackpublication (uidUser, date, nameUser, description) {
  return {
    uidUser: uidUser,
    date: date,
    nameUser: nameUser,
    description: description,
  }
};

const postPrueba = callbackpublication('12345678', '25/08/22','Pepito','hola este es un post de pepito');

console.log(postPrueba);