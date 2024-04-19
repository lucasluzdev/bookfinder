import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../../src/views/Login';

describe('Login component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Digite o seu nome de usuário');
    const passwordInput = getByPlaceholderText('********');
    const forgotPasswordLink = getByText('Esqueceu sua senha?');
    const accessButton = getByText('Acessar');
    const signUpLink = getByText('Crie sua conta agora!');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(forgotPasswordLink).toBeTruthy();
    expect(accessButton).toBeTruthy();
    expect(signUpLink).toBeTruthy();
  });

  test('handles sign in correctly', () => {
    const navigationMock = { push: jest.fn() };
    const { getByPlaceholderText, getByText } = render(<Login navigation={navigationMock} />);
    const usernameInput = getByPlaceholderText('Digite o seu nome de usuário');
    const passwordInput = getByPlaceholderText('********');
    const accessButton = getByText('Acessar');

    fireEvent.changeText(usernameInput, 'adm');
    fireEvent.changeText(passwordInput, '123');
    fireEvent.press(accessButton);

    expect(navigationMock.push).toHaveBeenCalledWith('HomeDrawer');
  });

  test('handles sign up correctly', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText } = render(<Login navigation={navigationMock} />);
    const signUpLink = getByText('Crie sua conta agora!');

    fireEvent.press(signUpLink);

    expect(navigationMock.push).toHaveBeenCalledWith('Register');
  });

  test('handles forgot password correctly', () => {
    const navigationMock = { push: jest.fn() };
    const { getByText } = render(<Login navigation={navigationMock} />);
    const forgotPasswordLink = getByText('Esqueceu sua senha?');

    fireEvent.press(forgotPasswordLink);

    expect(navigationMock.push).toHaveBeenCalledWith('ForgotPassword');
  });
});
