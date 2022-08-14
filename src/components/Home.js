/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';
  HomeDiv.classList = 'homeView';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'headerDiv';

  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const logoIcon = document.createElement('img');
  logoIcon.src = '../img/comida-sana-white.png';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'headerTitle';

  const logOut = document.createElement('div');
  logOut.className = 'logOut';
  const logOutIcon = document.createElement('img');
  logOutIcon.src = '../img/exit-free-icon.png';

  // buttonRegister.textContent = 'Registrate';
  // buttonLogin.textContent = 'Inicia sesion';

  // buttonRegister.addEventListener('click', () => onNavigate('/register'));
  // buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // HomeDiv.appendChild(buttonRegister);
  logoDiv.appendChild(logoIcon);
  headerDiv.appendChild(logoDiv);

  headerDiv.appendChild(titleLogo);

  logOut.appendChild(logOutIcon);
  headerDiv.appendChild(logOut);

  HomeDiv.appendChild(headerDiv);
  
  return HomeDiv;
};
