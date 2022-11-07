/**
 * @jest-environment jsdom
 */

import { Login } from '../src/components/Login.js';

jest.mock('../src/firebase/auth.js');

describe('Login', () => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  rootDiv.appendChild(Login());
  it('deberia de tener un boton de google', () => {
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    expect(buttonGoogle instanceof HTMLElement).toBe(true);
  });
  it('Al dar click al boton de google deberia de cambiar de vista a home', () => {
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    buttonGoogle.click();
    setTimeout(() => {
      expect(window.location.pathname).toBe('/home');
    }, 1000);
  });
});

describe('buttonLogin', () => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  rootDiv.appendChild(Login());
  it('deberia de tener un boton para iniciar sesión', () => {
    const btnLogin = document.getElementById('buttonLogin');
    expect(btnLogin instanceof HTMLElement).toBe(true);
  });
  it('deberia de cambia de vista a home cuando de click al boton Login', () => {
    const btnLogin = document.getElementById('buttonLogin');
    btnLogin.click();
    setTimeout(() => {
      expect(window.location.pathname).toBe('/home');
    }, 1000);
  });
});
