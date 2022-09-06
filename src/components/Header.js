export default function (div, callback) {
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  // const logoIcon = document.createElement('img');
  // logoIcon.src = '../img/comida-sana-white.png';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'headerTitle';

  const logOut = document.createElement('div');
  logOut.className = 'logOut';
  logOut.id = 'logOut';
  // const logOutIcon = document.createElement('img');
  // logOutIcon.src = '../img/exit-free-icon.png';

  logOut.addEventListener('click', callback);

  // logoDiv.appendChild(logoIcon);
  // logOut.appendChild(logOutIcon);
  div.appendChild(logoDiv);
  div.appendChild(titleLogo);
  div.appendChild(logOut);
}
