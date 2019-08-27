import React from 'react';
import { PayPalButton } from '../src';

const wrapperStyles = {
  textAlign: 'center',
  padding: '5rem',
  width: '30%',
  margin: '5rem auto'
}

const paypalOptions = {
  clientId: '123456',
  intent:'capture',
  currency:'USD'
};

const buttonStyles = {
  layout: 'vertical',
  shape: 'rect'
}
export function JSExample() {
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
