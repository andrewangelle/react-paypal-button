import React, {useState} from 'react';
import { PayPalButton, PaypalOptions, ButtonStylingOptions } from '../src';

const wrapperStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '5rem',
  width: '30%',
  margin: '5rem auto'
}

const paypalOptions: PaypalOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID!,
  intent:'capture',
  currency:'USD',
};

const buttonStyles: ButtonStylingOptions = {
  layout: 'vertical',
  shape: 'rect',
  label: 'checkout',
  tagline: false
}

export const Example = () => {
  const [value, setValue] = useState(1);
  console.log(value);

  function handleClick() {
    console.log('clicked button');
    const valueArr = [2,3,4,7,8,9,10,11,12];
    const newValue = valueArr[Math.floor(Math.random() * valueArr.length)];
    setValue(newValue)
  }

  return (
    <>
      <button onClick={handleClick}>Change price</button>
      <span>Current price: {value}</span>
      <div style={wrapperStyles}>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={value}
          onApprove={(data, authId) => console.log('onApprove', data, authId)}
          onPaymentStart={() => console.log('onPaymentStart')}
          onPaymentSuccess={data => console.log('onPaymentSuccess', data)}
          onPaymentError={msg => console.log('payment error', msg)}
          onPaymentCancel={data => console.log(data)}
          onShippingChange={data => console.log('onShippingChange', data)}
        />
      </div>
    </>
  );
}
