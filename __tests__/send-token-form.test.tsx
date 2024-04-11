/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SendTokenForm from '@/components/send-token-form/send-token-form';

describe('SendTokenForm', () => {
  const mockBalance = {
    data: {
      formatted: '10',
      symbol: 'ETH',
    },
  };

  const mockOnSendTransaction = jest.fn();

  it('renders form elements correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <SendTokenForm
        balance={mockBalance}
        isTransactionProcessing={false}
        onSendTransaction={mockOnSendTransaction}
      />
    );

    expect(getByText('Send To')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter 0x address')).toBeInTheDocument();
    expect(getByText('Amount')).toBeInTheDocument();
    expect(getByPlaceholderText('0.01')).toBeInTheDocument();
  });

  it('disables button and shows processing text when isTransactionProcessing is true', () => {
    const { getByText } = render(
      <SendTokenForm
        balance={mockBalance}
        isTransactionProcessing={true}
        onSendTransaction={mockOnSendTransaction}
      />
    );

    expect(getByText('Processing...')).toBeInTheDocument();
  });

  it('calls onSendTransaction with form data on form submission', () => {
    const { getByText, getByPlaceholderText } = render(
      <SendTokenForm
        balance={mockBalance}
        isTransactionProcessing={false}
        onSendTransaction={mockOnSendTransaction}
      />
    );
  
    const addressInput = getByPlaceholderText('Enter 0x address');
    const amountInput = getByPlaceholderText('0.01');
    const sendButton = getByText(`Send ${mockBalance.data.symbol}`);
  
    fireEvent.change(addressInput, { target: { value: '0x1234567890' } });
    fireEvent.change(amountInput, { target: { value: '0.01' } });
    fireEvent.submit(sendButton);
  
    expect(mockOnSendTransaction).toHaveBeenCalledWith(
      expect.objectContaining({
        get: expect.any(Function),
      })
    );
  });
});
