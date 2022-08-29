// aqui exportaras las funciones que necesites
import { signOutLogin, getPost, stateChangedUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export function signOutUser() {
  return signOutLogin().then(() => {
    alert('Cerraste sesion');
    onNavigate('/');
  })
};