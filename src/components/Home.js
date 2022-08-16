/* eslint-disable import/no-cycle */
import { signOutLogin } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  // HomeDiv.classList = 'homeDiv';
  HomeDiv.classList = 'homeDiv homeView';

  /* ---------- */
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

  /* ---------- */
  const principalContent = document.createElement('div');
  principalContent.className = 'principalContent';

  const publicationDiv = document.createElement('div');
  publicationDiv.className = 'publicationDiv';
  const textPublication = document.createElement('textarea');
  textPublication.placeholder = '¿Qué estás pensando?';
  const buttonPublication = document.createElement('button');
  buttonPublication.textContent = 'Publicar';
  buttonPublication.id = 'buttonPublication';

  /* post example */
  const post = document.createElement('div');
  post.className = 'postExample';

  for (let i = 0; i < 5; i++) {
    const post2 = document.createElement('div');
    post2.className = 'postExample';
    post.appendChild(post2);
  }

  /* ---------- */
  const navDiv = document.createElement('div');
  navDiv.className = 'navDiv';

  const homeIcon = document.createElement('div');
  homeIcon.className = 'homeIcon';
  const homeIconImg = document.createElement('img');
  homeIconImg.src = '../img/home-free.png';

  const publicationIcon = document.createElement('div');
  publicationIcon.className = 'publicationIcon';
  const publicationIconImg = document.createElement('img');
  publicationIconImg.src = '../img/edit-free-icon.png';

  const profileIcon = document.createElement('div');
  profileIcon.className = 'profileIcon';
  const profileIconImg = document.createElement('img');
  profileIconImg.src = '../img/user-white.png';

  logOut.addEventListener('click', () => {
    signOutLogin()
      .then((result) => {
        console.log('cerraste sesion');
        onNavigate('/');
      })
  });

  homeIcon.appendChild(homeIconImg);
  publicationIcon.appendChild(publicationIconImg);
  profileIcon.appendChild(profileIconImg);

  navDiv.appendChild(homeIcon);
  navDiv.appendChild(publicationIcon);
  navDiv.appendChild(profileIcon);

  logoDiv.appendChild(logoIcon);
  headerDiv.appendChild(logoDiv);
  headerDiv.appendChild(titleLogo);
  logOut.appendChild(logOutIcon);
  headerDiv.appendChild(logOut);

  principalContent.appendChild(publicationDiv);
  principalContent.appendChild(post);
  publicationDiv.appendChild(textPublication);
  publicationDiv.appendChild(buttonPublication);
  HomeDiv.appendChild(headerDiv);
  HomeDiv.appendChild(principalContent);
  // HomeDiv.appendChild(post);
  HomeDiv.appendChild(navDiv);

  return HomeDiv;
};
