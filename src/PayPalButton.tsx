import React, { useEffect }  from 'react';

import { usePaypalMethods, usePaypalScript } from './utils';
import { PayPalButtonProps } from './types';

function PayPalButton(props: PayPalButtonProps) {
  const { loading, done } = usePaypalScript(props.paypalOptions);
  const methods = usePaypalMethods(props);

  useEffect(() => {
    // check for window to support SSR
    if(window !== undefined) {
      if(!loading && done){
        window.paypal
          .Buttons({
            style: props.buttonStyles,
            amount: props.amount,
            createOrder: methods.createOrder,
            onApprove: methods.onApprove,
            onCancel: methods.onCancel,
            onShippingChange: methods.onShippingChange,
            payment: methods.payment,
          })
          .render('#paypal-button')
      }
    }
  },[ loading, done ])

  return <div id="paypal-button" />
}

export default PayPalButton
