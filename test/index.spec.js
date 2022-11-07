// importamos la funcion que vamos a testear
import { signOutUser } from '../src/lib/index';

jest.mock('../src/firebase/auth.js');

describe('signOutUser', () => {
  it('debería ser una función', () => {
    expect(typeof signOutUser).toBe('function');
  });
});
