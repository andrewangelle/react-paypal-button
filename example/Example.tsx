import React from 'react';
import { PayPalButton } from '../src';

// tslint:disable-next-line: max-line-length
const paypalClientId = 'AWRtWwqJDhoCtUatTvQDdGLyknKIXhaIozn0IrZxAY8d2hkyaLWn_hCydMBjvwRPiHiVIAwkSuv9DQaJ';

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
        sandboxID={paypalClientId}
        currency="USD"
        onPaymentStart={() => console.log('onPaymentStart')}
        onPaymentSuccess={data => console.log('onPaymentSuccess', data)}
        onPaymentError={msg => console.log('payment error', msg)}
        onPaymentCancel={data => console.log(data)}
        onShippingChange={data => console.log('onShippingChange', data)}
        onApprove={(data, authId) => console.log('onApprove', data, authId)}
      />
    </div>
  );
}
