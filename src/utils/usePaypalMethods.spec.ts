import { renderHook } from '@testing-library/react-hooks';
import { usePaypalMethods } from './usePaypalMethods';
import { PayPalButtonProps } from '..';

const props: PayPalButtonProps = {
  amount: 1.00,
  paypalOptions: {
    clientId: '12345',
    intent: 'capture'
  },
  onPaymentStart: jest.fn()
}

describe('usePaypalMethods', () => {
  it('returns an object with methods for paypal lib', () => {
    const { result }= renderHook(() => usePaypalMethods(props))
    expect(result.current).toMatchSnapshot()
  })
})