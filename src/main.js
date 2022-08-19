// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { Welcome } from './components/Welcome.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

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
  const rootDiv = document.getElementById('root');
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
// const component = routes[window.location.pathname];

window.onpopstate = () => {
  const rootDiv = document.getElementById('root');
  // rootDiv.appendChild(component());
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('init', () => {
  const rootDiv = document.getElementById('root');
  rootDiv.appendChild(routes[window.location.pathname]());
});

// Que la funcion onNavegate sea independiente de roodDiv
