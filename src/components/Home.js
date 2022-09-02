/* eslint-disable import/no-cycle */
import { stateChangedUser, addPost, getPost, onGetPost } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import setHeader from './Header.js';
import { signOutUser } from '../lib/index.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  // HomeDiv.classList = 'homeDiv';
  HomeDiv.classList = 'homeDiv homeView';

  /* ---------- */
  const headerDiv = document.createElement('div');
  headerDiv.className = 'headerDiv';

  setHeader(headerDiv, signOutUser);

  /* ---------- */
  const principalContent = document.createElement('div');
  principalContent.className = 'principalContent';

  const publicationDiv = document.createElement('div');
  publicationDiv.className = 'publicationDiv';

  const userDiv = document.createElement('div');
  publicationDiv.appendChild(userDiv);

  const textPublication = document.createElement('textarea');
  textPublication.placeholder = '¿Qué estás pensando?';
  const buttonPublication = document.createElement('button');
  buttonPublication.textContent = 'Publicar';
  buttonPublication.id = 'buttonPublication';

  // buttonPublication.addEventListener('click', () => {
  //   addPost({
  //     nameUser: displayName;
  //     description: textPublication.value,
  //     dateDescription: new Date(),
  //   }).then(() => {
  //     textPublication.value = '';
  //   });
  // });

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
      buttonPublication.addEventListener('click', () => {
        addPost({
          nameUser: displayName,
          description: textPublication.value,
          dateDescription: new Date(),
        }).then(() => {
          textPublication.value = '';
        });
      });
    } else {
      // User is signed out
      console.log('el usuario no inicio sesion');

      // onNavigate('/');
    }
  });

  /* ----- Post ----- */
  const containerDivPost = document.createElement('div');
  onGetPost(() => {
    containerDivPost.innerHTML = '';
  getPost().then((post) => {
    post.forEach((doc) => {
    
      const postDescription = doc.data().description;
      const dateDescription = doc.data().dateDescription;
      const nameUser = doc.data().nameUser;

      containerDivPost.className = 'containerDivPost'
      const divPost = document.createElement('div');
      divPost.className = 'divPost';
      const nameUserPost = document.createElement('p');
      nameUserPost.className = 'nameUserPost';
      const dateUserPost = document.createElement('p');
      dateUserPost.className = 'dateUserPost';
      const descriptionUserPostDiv = document.createElement('div')
      descriptionUserPostDiv.className = 'descriptionUserPostDiv';
      const descriptionUserPost = document.createElement('p');
      descriptionUserPost.className = 'descriptionUserPost';

      nameUserPost.textContent = nameUser;
      dateUserPost.textContent = `${dateDescription.toDate().toDateString()} - ${dateDescription.toDate().toLocaleTimeString()}`;
      descriptionUserPost.textContent = postDescription;

      divPost.appendChild(nameUserPost);
      divPost.appendChild(dateUserPost);
      divPost.appendChild(descriptionUserPostDiv);
      
      descriptionUserPostDiv.appendChild(descriptionUserPost);
      containerDivPost.appendChild(divPost);
      principalContent.appendChild(containerDivPost);
    });
  });
  });
  
  /*onGetPost((snapshot) => { 
    //while (divPost.firstChild) {
      //divPost.removeChild(divPost.firstChild);
    //}
    //const divPost = document.createElement('div');
      //  divPost.className = 'divPost';
    //divPost.innerHTML = '';
      //console.log('trayendo todos los posts')
      
      //while (principalContent.firstChild) {
        //principalContent.removeChild(principalContent.firstChild)
      //}
      snapshot.forEach((doc) => {
      
        const postDescription = doc.data().description;
        const dateDescription = doc.data().dateDescription;
        const nameUser = doc.data().nameUser;

        const divPost = document.createElement('div');
        divPost.className = 'divPost';
        const nameUserPost = document.createElement('p');
        nameUserPost.className = 'nameUserPost';
        const dateUserPost = document.createElement('p');
        dateUserPost.className = 'dateUserPost';
        const descriptionUserPostDiv = document.createElement('div')
        descriptionUserPostDiv.className = 'descriptionUserPostDiv';
        const descriptionUserPost = document.createElement('p');
        descriptionUserPost.className = 'descriptionUserPost';
  
        nameUserPost.textContent = nameUser;
        dateUserPost.textContent = `${dateDescription.toDate().toDateString()} - ${dateDescription.toDate().toLocaleTimeString()}`;
        descriptionUserPost.textContent = postDescription;
  
        divPost.appendChild(nameUserPost);
        divPost.appendChild(dateUserPost);
        divPost.appendChild(descriptionUserPostDiv);
        descriptionUserPostDiv.appendChild(descriptionUserPost);
  
        principalContent.appendChild(divPost);
      });
    });*/

 

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
