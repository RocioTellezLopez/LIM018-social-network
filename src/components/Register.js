// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../main.js";
import { createUserWithEmail, updateProfileUser } from "../firebase/auth.js";

export const Register = () => {
  const HomeDiv = document.createElement("div");
  HomeDiv.className = "homeDiv";

  /* ---------- */
  const logoTitleDiv = document.createElement("div");
  logoTitleDiv.className = "logoTitleDiv";
  const imgLogoDiv = document.createElement("div");
  imgLogoDiv.className = "imgLogoDiv";
  const imgLogo = document.createElement("img");
  imgLogo.src = "../img/comida-sana-green.png";
  imgLogo.id = "imgLogo";

  const titleLogo = document.createElement("h1");
  titleLogo.textContent = "HEALTHY FOOD LOVERS";
  titleLogo.className = "titleLogo";

  /* ---------- */

  const formLogin = document.createElement("form");
  formLogin.className = "formLogin";

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "Ingresa tu nombre";

  const inputMail = document.createElement("input");
  inputMail.type = "email";
  inputMail.placeholder = "Ingresa tu correo";

  const inputPassword = document.createElement("input");
  inputPassword.type = "password";
  inputPassword.placeholder = "Ingresa tu contraseña";

  const buttonRegister = document.createElement("input");
  buttonRegister.type = "button";
  buttonRegister.value = "Registrarse";
  buttonRegister.id = "buttonRegister";

  const textLogin = document.createElement("p");
  textLogin.textContent = "Ya tengo una cuenta";
  textLogin.className = "textLogin";
  const backLogin = document.createElement("a");
  backLogin.textContent = "Inicia Sesión";

  const mensajeRegistro = document.createElement("p");
  mensajeRegistro.className = "mensajeRegistro";

  backLogin.addEventListener("click", () => onNavigate("/login"));

  buttonRegister.addEventListener("click", () => {
    const email = inputMail.value;
    const password = inputPassword.value;
    const nameUser = inputName.value;

    if (nameUser === "" || email === "" || password === "") {
      return (mensajeRegistro.innerHTML = "Ingresa los datos solicitados");
    }
    if (nameUser === "" && nameUser.length < 2) {
      return (mensajeRegistro.innerHTML = "Tu nombre es muy corto");
    }
    const emailRegValido =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "" && !emailRegValido.test(email)) {
      return (mensajeRegistro.innerHTML = "Email inválido");
    }

    if (password === "" && password.length < 6) {
      return (mensajeRegistro.innerHTML =
        "Password como mínimo con 6 caracteres");
    }

    createUserWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // user.displayName = nameUser;
        const uid = user.uid;
        // debugger;
        updateProfileUser(nameUser, uid).then(() => console.log('Nombre actualizado'));
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
  formLogin.appendChild(mensajeRegistro);
  HomeDiv.appendChild(formLogin);
  HomeDiv.appendChild(textLogin);
  textLogin.appendChild(backLogin);
  return HomeDiv;
};
