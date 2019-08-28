import React from 'react';

import { usePaypalMethods, usePaypalScript, scriptLoadError } from './utils';
import { PayPalButtonProps } from './types';

function PayPalButtonBase(props: PayPalButtonProps) {
  const { loading, done } = usePaypalScript(props.paypalOptions);
  const methods = usePaypalMethods(props);

  React.useEffect(() => {
    const hasWindow = window !== undefined && window.paypal !== undefined;

    if(hasWindow) {// check to support SSR
      if(!loading && done){
        try {
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
            .render('#paypal-button');

        } catch (e){
          console.error(scriptLoadError)
        }
      }

    }
  },[ loading, done ])

  return <div id="paypal-button" />
}

export default PayPalButtonBase
