// aqui exportaras las funciones que necesites
import { signOutLogin } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export function signOutLoginFirestore() {
  signOutLogin().then((result) => {
    console.log('cerraste sesion');
    onNavigate('/');
  });
}
