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
  currency:'USD',
  vault: true // required
};

const buttonStyles: ButtonStylingOptions = {
  label: 'installment',
}

export function SubscriptionExample() {
  return (
    <div style={wrapperStyles}>
      <PayPalButton
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={1.00}
        subsciptionPlanId="P-2UF78835G6983425GLSM44MA" // required
        onPaymentSuccess={(data) => console.log('onPaymentSuccess', data)}
      />
    </div>
  );
}
