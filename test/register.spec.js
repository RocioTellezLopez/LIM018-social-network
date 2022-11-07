import { Register } from '../src/components/Register.js';

jest.mock('../src/firebase/auth.js');

describe('Register', () => {
  document.body.appendChild(Register());
  const btnRegister = document.getElementById('buttonRegister');
  it('deberia de tener un boton de registro', () => {
    expect(btnRegister instanceof HTMLElement).toBe(true);
  });
});
