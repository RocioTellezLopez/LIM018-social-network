// aqui exportaras las funciones que necesites
import { signOutLogin } from '../firebase/auth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function signOutUser() {
  return signOutLogin().then(() => {
    alert('Cerraste sesion');
    onNavigate('/');
  });
}
