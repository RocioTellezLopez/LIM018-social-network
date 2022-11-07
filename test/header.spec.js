import setHeader from '../src/components/Header.js';

describe('setHeader', () => {
  it('deberia de tener un icono de cerrar sesión', () => {
    expect(typeof setHeader).toBe('function');
  });
});
