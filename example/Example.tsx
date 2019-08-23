import React from 'react';
import { PayPalButton } from '../src';

export function Example() {
  const buttonStyles = {
    textAlign: 'center',
    padding: '5rem',
    width: '30%',
    margin: '5rem auto'
  }
  return (
    <div style={buttonStyles as any}>
      <h3>Try me out</h3>
      <PayPalButton
        env="sandbox"
        intent="capture"
        amount={1.00}
        // tslint:disable-next-line: max-line-length
        sandboxID="AWRtWwqJDhoCtUatTvQDdGLyknKIXhaIozn0IrZxAY8d2hkyaLWn_hCydMBjvwRPiHiVIAwkSuv9DQaJ" // <- replace with an actual id
        currency="USD"
        onPaymentStart={() => console.log('payment started')}
        onPaymentError={msg => console.log('payment error', msg)}
        onPaymentCancel={data => console.log(data)}
        onShippingChange={data => console.log('onShippingChange', data)}
        onApprove={(data, authId) => console.log('onApprove', data, authId)}
      />
    </div>
  );
}
