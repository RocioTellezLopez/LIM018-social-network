/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al login';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonLogin = document.createElement('input');
  buttonLogin.type = 'button';
  buttonLogin.value = 'Inicia sesion';//publi-home
  buttonLogin.id = 'buttonLogin';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al home';



  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);
  HomeDiv.appendChild(titleLogo);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  HomeDiv.appendChild(formLogin);
  formLogin.appendChild(buttonLogin);
  
  return HomeDiv;
};
