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
  updateProfile,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js';

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

export function stateChangedUser(callback) { return onAuthStateChanged(auth, callback); }

export const db = getFirestore(app);

export function addPost(publicacion) { return addDoc(collection(db, 'post'), publicacion); }

/* ----- Update Profile */

export function updateProfileUser(userName, userId) {
  return updateProfile(auth.currentUser, {
    displayName: userName,
    uid: userId,
  });
}

export function getPost() { return getDocs(collection(db, 'post')); }