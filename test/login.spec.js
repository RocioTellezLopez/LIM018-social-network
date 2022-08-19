/**
 * @jest-environment jsdom
 */

import { Login } from '../src/components/Login.js';

jest.mock('../src/firebase/auth');

// document.body.innerHTML = `<div id='root'></div>`

describe('Login', () => {
  it('deberia de tener un boton de google a', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Login());
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    // buttonGoogle.click();
    expect(buttonGoogle instanceof HTMLElement).toBe(true);
  });
});

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
