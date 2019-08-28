import React from 'react';
import { PayPalButton, PaypalOptions, ButtonStylingOptions } from '../src';

const wrapperStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '5rem',
  width: '30%',
  margin: '5rem auto'
}

const paypalOptions: PaypalOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID,
  intent:'authorize',
  currency:'USD',
};

const buttonStyles: ButtonStylingOptions = {
  layout: 'vertical',
  shape: 'rect',
  label: 'checkout',
  tagline: false
}

export function Example() {
  return (
    <div style={wrapperStyles}>
      <PayPalButton
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={1.00}
        onApprove={(data, authId) => console.log('onApprove', data, authId)}
        onPaymentStart={() => console.log('onPaymentStart')}
        onPaymentSuccess={data => console.log('onPaymentSuccess', data)}
        onPaymentError={msg => console.log('payment error', msg)}
        onPaymentCancel={data => console.log(data)}
        onShippingChange={data => console.log('onShippingChange', data)}
      />
    </div>
  );
}
