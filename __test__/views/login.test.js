import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../../src/views/Login';

describe('Login component', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    
    expect(getByText('Usuário')).toBeTruthy();
    expect(getByPlaceholderText('Digite o seu nome de usuário')).toBeTruthy();
    expect(getByText('Senha')).toBeTruthy();
    expect(getByPlaceholderText('********')).toBeTruthy();
    expect(getByText('Esqueceu sua senha?')).toBeTruthy();
    expect(getByText('Acessar')).toBeTruthy();
    expect(getByText('Primeiro acesso?')).toBeTruthy();
    expect(getByText('Crie sua conta agora!')).toBeTruthy();
  });

  test('handles sign in with correct credentials', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText, getByPlaceholderText } = render(<Login navigation={navigationMock} />);
    
    fireEvent.changeText(getByPlaceholderText('Digite o seu nome de usuário'), 'adm');
    fireEvent.changeText(getByPlaceholderText('********'), '123');
    fireEvent.press(getByText('Acessar'));

    expect(navigationMock.push).toHaveBeenCalledWith('HomeDrawer');
  });

  test('handles sign in with incorrect credentials', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText, getByPlaceholderText } = render(<Login navigation={navigationMock} />);
    
    fireEvent.changeText(getByPlaceholderText('Digite o seu nome de usuário'), 'user');
    fireEvent.changeText(getByPlaceholderText('********'), 'password');
    fireEvent.press(getByText('Acessar'));

    expect(navigationMock.push).not.toHaveBeenCalled();
  });

  test('navigates to sign up page', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText } = render(<Login navigation={navigationMock} />);
    
    fireEvent.press(getByText('Crie sua conta agora!'));

    expect(navigationMock.push).toHaveBeenCalledWith('Register');
  });

  test('navigates to forgot password page', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText } = render(<Login navigation={navigationMock} />);
    
    fireEvent.press(getByText('Esqueceu sua senha?'));

    expect(navigationMock.push).toHaveBeenCalledWith('ForgotPassword');
  });
});
