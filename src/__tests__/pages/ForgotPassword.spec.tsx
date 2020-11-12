import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import ForgotPassword from '../../pages/ForgotPassword';

import api from '../../services/api';

const mockedAddToast = jest.fn();
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
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Forgot Password Page', () => {
  beforeEach(() => {
    mockedAddToast.mockClear();
  });

  it('should be able to recover password', async () => {
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    apiMock.onPost('/password/forgot').reply(200);

    const emailField = getByPlaceholderText('E-mail');
    const buttonElement = getByText('Recuperar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'success' }),
      );
    });
  });

  it('should not be able to recover password with invalid email', async () => {
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    const emailField = getByPlaceholderText('E-mail');
    const buttonElement = getByText('Recuperar');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).not.toHaveBeenCalled();
    });
  });

  it('should display an error if recover password fails', async () => {
    apiMock.onPost('/password/forgot').reply(400);

    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    const emailField = getByPlaceholderText('E-mail');
    const buttonElement = getByText('Recuperar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });
});
