import React from 'react';
import { PayPalButton } from '../src';

export function Example() {
  const buttonStyles = {
    textAlign: 'center',
    padding: '1rem',
    margin: '1rem'
  }
  return (
    <div style={buttonStyles as any}>
      <h3>Try me out</h3>
      <PayPalButton
        env="sandbox"
        amount={1.00}
        sandboxID="12345" // <- replace with an actual id
        currency="USD"
        onPaymentStart={() => console.log('payment started')}
        onPaymentSuccess={(res) => console.log('payment complete', res)}
        onPaymentError={(msg: string) => console.log('payment error', msg)}
        onPaymentCancel={(data: any) => console.log(data)}
        onShippingChange={(data) => console.log('onShippingChange', data)}
      />
    </div>
  );
}
