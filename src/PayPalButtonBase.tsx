import React, { useEffect } from 'react';

import { usePaypalMethods, usePaypalScript, scriptLoadError } from './utils';
import { PayPalButtonProps } from './types';

function PayPalButtonBase(props: PayPalButtonProps) {
  const { loading, done } = usePaypalScript(props.paypalOptions);
  const methods = usePaypalMethods(props);

  useEffect(() => {
    const hasWindow = window !== undefined && window.paypal !== undefined;

    if(hasWindow) {// check to support SSR
      if(!loading && done){
        try {
          window.paypal
            .Buttons({
              style: props.buttonStyles,
              amount: props.amount,
              createOrder: props.paypalOptions.vault
                ? null
                : methods.createOrder,
              createSubscription: props.paypalOptions.vault
                ? methods.createSubscription
                : null ,
              onApprove: methods.onApprove,
              onCancel: methods.onCancel,
              onError: methods.onError,
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
