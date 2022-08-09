// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Welcome = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';
  HomeDiv.id = 'welcome';

  const imgFood = document.createElement('img');
  imgFood.src = '../img/heather-food.jpg';
  imgFood.alt = 'Healthy food';

  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcomeDiv';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'buttonRegister';

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'buttonLogin';

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(imgFood);
  HomeDiv.appendChild(welcomeDiv);
  welcomeDiv.appendChild(titleLogo);
  buttonDiv.appendChild(buttonRegister);
  buttonDiv.appendChild(buttonLogin);
  welcomeDiv.appendChild(buttonDiv);

  return HomeDiv;
};
