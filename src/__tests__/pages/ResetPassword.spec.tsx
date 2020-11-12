import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import ResetPassword from '../../pages/ResetPassword';

import api from '../../services/api';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();
const mockedToken = '123';
const apiMock = new MockAdapter(api);

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useLocation: () => ({ search: mockedToken }),
  };
});

describe('Forgot Password Page', () => {
  beforeEach(() => {
    mockedAddToast.mockClear();
    mockedHistoryPush.mockClear();
  });

  it('should be able to reset password', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    apiMock.onPost('/password/reset').reply(200);

    const passwordField = getByPlaceholderText('Nova senha');
    const newPasswordField = getByPlaceholderText('Confirmação da senha');

    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.change(newPasswordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('should not be able to reset password with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const newPasswordField = getByPlaceholderText('Confirmação da senha');

    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.change(newPasswordField, { target: { value: '654321' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if reset password fails', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    apiMock.onPost('/password/reset').reply(400);

    const passwordField = getByPlaceholderText('Nova senha');
    const newPasswordField = getByPlaceholderText('Confirmação da senha');

    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.change(newPasswordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });

  // it('should not reset password without the token', async () => {
  //   const { getByPlaceholderText, getByText } = render(<ResetPassword />);

  //   apiMock.onPost('/password/reset').reply(200);

  //   const passwordField = getByPlaceholderText('Nova senha');
  //   const newPasswordField = getByPlaceholderText('Confirmação da senha');

  //   const buttonElement = getByText('Alterar senha');

  //   fireEvent.change(passwordField, { target: { value: '123456' } });
  //   fireEvent.change(newPasswordField, { target: { value: '123456' } });

  //   fireEvent.click(buttonElement);

  //   await waitFor(() => {
  //     expect(mockedAddToast).toHaveBeenCalledWith(
  //       expect.objectContaining({ type: 'error' }),
  //     );
  //   });
  // });
});
