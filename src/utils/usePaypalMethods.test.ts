import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { usePaypalMethods } from './usePaypalMethods';
import { PayPalButtonProps } from '../types';

const baseProps: PayPalButtonProps = {
  amount: 1.00,
  paypalOptions: {
    clientId: '12345',
    intent: 'capture'
  },
  onPaymentStart: jest.fn()
}

describe('usePaypalMethods', () => {
  afterEach(cleanup)
  it('returns an object with methods for paypal lib', () => {
    const { result } = renderHook(() => usePaypalMethods(baseProps))
    expect(result.current).toMatchSnapshot()
  });

  it('returns null for createSubscription if vault prop is false', () => {
    const { result } = renderHook(() => usePaypalMethods(baseProps))
    expect(result.current.createSubscription).toBeNull()
  })

  it('returns null for createOrder if vault prop is true', () => {
    const props = {
      ...baseProps,
      paypalOptions: {
        ...baseProps.paypalOptions,
        vault: true
      }
    }
    const { result } = renderHook(() => usePaypalMethods(props))
    expect(result.current.createOrder).toBeNull()
  })
})
