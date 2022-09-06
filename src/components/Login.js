/* eslint-disable import/no-cycle */
import { signInWithGoogle, signInWithEmail } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv imgLogo';
  // const imgLogo = document.createElement('img');
  // imgLogo.src = '../img/comida-sana-green.png';
  // imgLogo.id = 'imgLogo';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  /* ---------- */

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  /* ----- Boton para iniciar sesion con Google ----- */
  const buttonLoginGoogle = document.createElement('input');
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.value = 'Inicia sesion Google';
  buttonLoginGoogle.id = 'buttonLoginGoogle';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonLogin = document.createElement('input');
  buttonLogin.type = 'button';
  buttonLogin.value = 'Inicia sesion';
  buttonLogin.id = 'buttonLogin';

  const textRegister = document.createElement('p');
  textRegister.textContent = 'No tengo cuenta';
  textRegister.className = 'textRegister';
  const backRegister = document.createElement('a');
  backRegister.textContent = 'Regístrate';

  backRegister.addEventListener('click', () => onNavigate('/register'));

  buttonLoginGoogle.addEventListener('click', () => {
    signInWithGoogle()
      .then(() => {
        onNavigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  buttonLogin.addEventListener('click', () => {
    const email = inputMail.value;
    const password = inputPassword.value;

    signInWithEmail(email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        onNavigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  // imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  HomeDiv.appendChild(logoTitleDiv);

  formLogin.appendChild(buttonLoginGoogle);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  HomeDiv.appendChild(formLogin);
  formLogin.appendChild(buttonLogin);
  HomeDiv.appendChild(textRegister);
  textRegister.appendChild(backRegister);

  return HomeDiv;
};
