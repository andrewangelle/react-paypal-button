import React from 'react';
import { PayPalButton, PaypalOptions, ButtonStylingOptions } from '../src';

const testSubId = 'P-2UF78835G6983425GLSM44MA';

const wrapperStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '5rem',
  width: '30%',
  margin: '5rem auto'
}

const paypalOptions: PaypalOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID,
  intent:'capture',
  currency:'USD',
  vault: true
};

const buttonStyles: ButtonStylingOptions = {
  layout: 'vertical',
  shape: 'rect',
  label: 'installment',
  tagline: false
}

export function Example() {
  return (
    <div style={wrapperStyles}>
      <PayPalButton
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={1.00}
        subsciptionPlanId={testSubId}
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
