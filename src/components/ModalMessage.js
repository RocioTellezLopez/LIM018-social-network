function ModalMessage(div, string) {
  const divModal = document.createElement('div');
  divModal.className = 'div-modal';

  const divContent = document.createElement('div');
  divContent.className = 'div-content';

  const message = document.createElement('p');
  message.className = 'message-modal';
  message.textContent = string;

  const button = document.createElement('button');
  button.className = 'button-modal';
  button.textContent = 'Aceptar';

  button.addEventListener('click', () => {
    divModal.style.display = 'none';
  });

  divContent.appendChild(message);
  divContent.appendChild(button);
  divModal.appendChild(divContent);
  div.appendChild(divModal);
}

export default ModalMessage;
