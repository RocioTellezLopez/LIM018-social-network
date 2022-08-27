/* eslint-disable import/no-cycle */
import {
  signOutLogin, stateChangedUser, addPost, getPost,
} from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import setHeader from './Header.js';
import { signOutLoginFirestore } from '../lib/index.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  // HomeDiv.classList = 'homeDiv';
  HomeDiv.classList = 'homeDiv homeView';

  /* ---------- */
  const headerDiv = document.createElement('div');
  headerDiv.className = 'headerDiv';

  // const logoDiv = document.createElement('div');
  // logoDiv.className = 'logoDiv';
  // const logoIcon = document.createElement('img');
  // logoIcon.src = '../img/comida-sana-white.png';

  // const titleLogo = document.createElement('h1');
  // titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  // titleLogo.className = 'headerTitle';

  // const logOut = document.createElement('div');
  // logOut.className = 'logOut';
  // const logOutIcon = document.createElement('img');
  // logOutIcon.src = '../img/exit-free-icon.png';

  /* ---------- */
  const principalContent = document.createElement('div');
  principalContent.className = 'principalContent';

  const publicationDiv = document.createElement('div');
  publicationDiv.className = 'publicationDiv';
  // debugger
  const userDiv = document.createElement('div');
  publicationDiv.appendChild(userDiv);

  const textPublication = document.createElement('textarea');
  textPublication.placeholder = '¿Qué estás pensando?';
  const buttonPublication = document.createElement('button');
  buttonPublication.textContent = 'Publicar';
  buttonPublication.id = 'buttonPublication';

  buttonPublication.addEventListener('click', () => {
    addPost({
      description: textPublication.value,
      dateDescription: new Date(),
    }).then(() => {
      textPublication.value = '';
    });
  });

  stateChangedUser((user) => {
    const userName = document.createElement('p');
    if (user) {
      const uid = user.uid;
      const displayName = user.displayName;
      userName.textContent = displayName;
      while (userDiv.firstChild) {
        userDiv.removeChild(userDiv.firstChild);
      }
      userDiv.appendChild(userName);
    } else {
      // User is signed out
      console.log('el usuario no inicio sesion');

      onNavigate('/');
    }
  });

  /* ----- Post ----- */
  getPost().then((post) => post.forEach((doc) => {
    const postDescription = doc.data().description;
    const dateDescription = doc.data().dateDescription;

    const divPost = document.createElement('div');
    const nameUserPost = document.createElement('p');
    const dateUserPost = document.createElement('p');
    const descriptionUserPost = document.createElement('p');

    nameUserPost.textContent = 'collection';
    dateUserPost.textContent = `${dateDescription.toDate().toDateString()} - ${dateDescription.toDate().toLocaleTimeString()}`;
    descriptionUserPost.textContent = postDescription;

    divPost.appendChild(nameUserPost);
    divPost.appendChild(dateUserPost);
    divPost.appendChild(descriptionUserPost);

    principalContent.appendChild(divPost);
  }));

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

  // logOut.addEventListener('click', () => {
  //   signOutLogin()
  //     .then((result) => {
  //       // eslint-disable-next-line no-console
  //       console.log('cerraste sesion');
  //       onNavigate('/');
  //     });
  // });

  homeIcon.appendChild(homeIconImg);
  publicationIcon.appendChild(publicationIconImg);
  profileIcon.appendChild(profileIconImg);

  navDiv.appendChild(homeIcon);
  navDiv.appendChild(publicationIcon);
  navDiv.appendChild(profileIcon);

  setHeader(headerDiv);
  const botonLogOut = document.getElementsByClassName('logOut');
  botonLogOut.addEventListener('click', signOutLoginFirestore());

  principalContent.appendChild(publicationDiv);
  // principalContent.appendChild(post);
  publicationDiv.appendChild(textPublication);
  publicationDiv.appendChild(buttonPublication);
  HomeDiv.appendChild(headerDiv);
  HomeDiv.appendChild(principalContent);
  // HomeDiv.appendChild(post);
  HomeDiv.appendChild(navDiv);

  return HomeDiv;
};

// function allPost(nameUser = 'collection', dateDescription, description) {
//   const divPost = document.createElement('div');
//   const nameUserPost = document.createElement('p');
//   const dateUserPost = document.createElement('p');
//   const descriptionUserPost = document.createComment('p');

//   nameUserPost.textContent = nameUser;
//   dateUserPost.textContent = dateDescription;
//   descriptionUserPost.textContent = description;

//   divPost.appendChild(nameUserPost);
//   divPost.appendChild(dateUserPost);
//   divPost.appendChild(descriptionUserPost);

//   return divPost;
// }
