// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { createUserWithEmail, updateProfileUser } from '../firebase/auth.js';

// Función validación de email, inputMail
const validateEmail = (inputMail, error) => {
  // debugger;
  const messageRegister = error;
  const validateEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (!validateEmailReg.test(inputMail)) {
    messageRegister.innerHTML = 'El email debería tener las siguientes características: email@ejemplo.algo';
    messageRegister.classList.add('show-messageError');
  } else {
    messageRegister.innerHTML = '';
    messageRegister.classList.remove('show-messageError');
  }
};

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv';
  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/comida-sana-green.png';
  imgLogo.id = 'imgLogo';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  /* ---------- */

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Ingresa tu nombre';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonRegister = document.createElement('input');
  buttonRegister.type = 'button';
  buttonRegister.value = 'Registrarse';
  buttonRegister.id = 'buttonRegister';

  const textLogin = document.createElement('p');
  textLogin.textContent = 'Ya tengo una cuenta';
  textLogin.className = 'textLogin';
  const backLogin = document.createElement('a');
  backLogin.textContent = 'Inicia Sesión';

  const messageRegister = document.createElement('p');
  messageRegister.className = 'mensajeRegistro';

  backLogin.addEventListener('click', () => onNavigate('/login'));

  // const email = inputMail.value;
  // const password = inputPassword.value;
  // const nameUser = inputName.value;

  // Llamado de la función validatorEmail
  inputMail.addEventListener('change', () => {
    validateEmail(inputMail.value, messageRegister);
  });

  buttonRegister.addEventListener('click', () => {
    if (inputName.value === '' || inputMail.value === '' || inputPassword.value === '') {
      return (messageRegister.innerHTML = 'Ingresa los datos solicitados');
    }
    if (inputName.value.length < 3) {
      return (messageRegister.innerHTML = 'Tu nombre es muy corto: al menos 3 caracteres');
    }

    if (inputPassword.value.length < 6) {
      return (messageRegister.innerHTML = 'Password como mínimo con 6 caracteres');
    }

    createUserWithEmail(inputMail.value, inputPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // user.displayName = nameUser;
        const uid = user.uid;
        // debugger;
        updateProfileUser(inputName.value, uid)
          .then(() => console.log('Nombre actualizado'));
        console.log(user);
        console.log('Registro exitoso');
      });
    onNavigate('/login');
    // setTimeout(() => onNavigate('/login'), 1000);
  });

  imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  HomeDiv.appendChild(logoTitleDiv);

  formLogin.appendChild(inputName);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(buttonRegister);
  formLogin.appendChild(messageRegister);
  HomeDiv.appendChild(formLogin);
  HomeDiv.appendChild(textLogin);
  textLogin.appendChild(backLogin);
  return HomeDiv;
};
