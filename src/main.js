// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { Welcome } from './components/Welcome.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  /* route github pages */
  '/LIM018-social-network/src': Welcome,
  '/LIM018-social-network/src/register': Register,
  '/LIM018-social-network/src/login': Login,
  '/LIM018-social-network/src/home': Home,
  /* route localhost */
  '/': Welcome,
  '/register': Register,
  '/login': Login,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

// console.log(window.location.pathname);
console.log(window.location);

console.log(component);
console.log(component());
window.onpopstate = () => {
  rootDiv.appendChild(component());
};
console.log(component);
rootDiv.appendChild(component());
