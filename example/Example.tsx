import React from 'react';
import {
  PayPalButton,
  OnCancelData,
  OnShippingChangeData,
  PayPalPaymentData
} from '../src';

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
        // tslint:disable-next-line: max-line-length
        sandboxID="AWRtWwqJDhoCtUatTvQDdGLyknKIXhaIozn0IrZxAY8d2hkyaLWn_hCydMBjvwRPiHiVIAwkSuv9DQaJ" // <- replace with an actual id
        currency="USD"
        onPaymentStart={() => console.log('payment started')}
        onPaymentSuccess={(res: PayPalPaymentData) => console.log('payment complete', res)}
        onPaymentError={(msg: string) => console.log('payment error', msg)}
        onPaymentCancel={(data: OnCancelData) => console.log(data)}
        onShippingChange={(data: OnShippingChangeData) => console.log('onShippingChange', data)}
      />
    </div>
  );
}
