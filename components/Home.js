/* eslint-disable import/no-cycle */
import {
  stateChangedUser, addPost, getPost, onGetPost, deletePost, auth, editPost,
} from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import setHeader from './Header.js';
import { signOutUser } from '../lib/index.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
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
          uid,
        }).then(() => {
          textPublication.value = '';
        });
      });
    } else {
      // User is signed out
      onNavigate('/');
    }
  });

  /* ----- Post ----- */
  const containerDivPost = document.createElement('div');
  containerDivPost.className = 'containerDivPost';
  onGetPost(() => {
    containerDivPost.innerHTML = '';
    getPost().then((post) => {
      post.forEach((doc) => {
        const postDescription = doc.data().description;
        const dateDescription = doc.data().dateDescription;
        const nameUser = doc.data().nameUser;
        const uidUserPost = doc.data().uid;
        const idPost = doc.id;

        const divPost = document.createElement('div');
        divPost.className = 'divPost';

        const divHeaderPost = document.createElement('div');
        divHeaderPost.className = 'divHeaderPost';
        const nameUserPost = document.createElement('p');
        nameUserPost.className = 'nameUserPost';

        const editPostDiv = document.createElement('div');
        editPostDiv.classList = 'editPost';
        // const editIcon = document.createElement('img');
        // editIcon.src = '../img/pencil.png';
        const deletePostDiv = document.createElement('div');
        deletePostDiv.className = 'deletePostDiv';
        // const deleteIcon = document.createElement('img');
        // deleteIcon.src = '../img/cross-circle.png';

        divHeaderPost.appendChild(nameUserPost);
        divHeaderPost.appendChild(editPostDiv);
        // editPostDiv.appendChild(editIcon);
        divHeaderPost.appendChild(deletePostDiv);
        // deletePostDiv.appendChild(deleteIcon);

        if (uidUserPost === auth.currentUser.uid) {
          deletePostDiv.style.display = 'block';
          editPostDiv.style.display = 'block';
        }

        const dateUserPost = document.createElement('p');
        dateUserPost.className = 'dateUserPost';
        const descriptionUserPostDiv = document.createElement('div');
        descriptionUserPostDiv.className = 'descriptionUserPostDiv';
        const descriptionUserPost = document.createElement('p');
        descriptionUserPost.className = 'descriptionUserPost';

        nameUserPost.textContent = nameUser;
        dateUserPost.textContent = `${dateDescription.toDate().toDateString()} - ${dateDescription.toDate().toLocaleTimeString()}`;
        descriptionUserPost.textContent = postDescription;

        deletePostDiv.addEventListener('click', () => {
          if (uidUserPost === auth.currentUser.uid) {
            deletePost(idPost);
          } else {
            // eslint-disable-next-line no-alert
            alert('No puedes eliminar este post, por que no te pertenece!😎');
          }
        });

        editPostDiv.addEventListener('click', () => {
          if (uidUserPost === auth.currentUser.uid) {
            const text = postDescription;
            // eslint-disable-next-line no-use-before-define
            editModal(containerDivPost, text, idPost);
          } else {
            alert('No puedes editar este post, por que no te pertenece!😢');
          }
        });

        divPost.appendChild(divHeaderPost);
        divPost.appendChild(dateUserPost);
        divPost.appendChild(descriptionUserPostDiv);

        descriptionUserPostDiv.appendChild(descriptionUserPost);
        containerDivPost.appendChild(divPost);
        principalContent.appendChild(containerDivPost);
      });
    });
  });
  /* ---------- */
  const navDiv = document.createElement('div');
  navDiv.className = 'navDiv';

  const homeIcon = document.createElement('div');
  homeIcon.className = 'homeIcon';
  // const homeIconImg = document.createElement('img');
  // homeIconImg.src = '../img/home-free.png';

  const publicationIcon = document.createElement('div');
  publicationIcon.className = 'publicationIcon';
  // const publicationIconImg = document.createElement('img');
  // publicationIconImg.src = '../img/edit-free-icon.png';

  const profileIcon = document.createElement('div');
  profileIcon.className = 'profileIcon';
  // const profileIconImg = document.createElement('img');
  // profileIconImg.src = '../img/user-white.png';

  // homeIcon.appendChild(homeIconImg);
  // publicationIcon.appendChild(publicationIconImg);
  // profileIcon.appendChild(profileIconImg);

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

function editModal(div, text, idPost) {
  const divBlock = document.createElement('div');
  divBlock.className = 'divBlock';
  const divPost = document.createElement('div');
  divPost.className = 'divPost divEditPost';
  const closeEditModal = document.createElement('div');
  closeEditModal.textContent = '❌';
  closeEditModal.className = 'closeEditModal';
  const textEdit = document.createElement('textarea');
  textEdit.className = 'textEdit';
  textEdit.value = text;
  const buttonSave = document.createElement('button');
  buttonSave.textContent = 'Guardar';
  buttonSave.id = 'buttonSave';

  closeEditModal.addEventListener('click', () => { divBlock.style.display = 'none'; });
  buttonSave.addEventListener('click', () => editPost(idPost, textEdit.value));

  divPost.appendChild(closeEditModal);
  divPost.appendChild(textEdit);
  divPost.appendChild(buttonSave);
  divBlock.appendChild(divPost);
  div.appendChild(divBlock);
}
