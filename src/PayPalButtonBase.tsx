import React, { useEffect } from 'react';

import { usePaypalScriptOptions, usePaypalScript, scriptLoadError } from './utils';
import { PayPalButtonProps } from './types';

function PayPalButtonBase(props: PayPalButtonProps) {
  const { loading, done } = usePaypalScript(props.paypalOptions);
  const options = usePaypalScriptOptions(props);

  useEffect(() => {
    const hasWindow = window !== undefined && window.paypal !== undefined;
    const paypalButtonElem = document.querySelector('.paypal-buttons');

    if(hasWindow) {// check to support SSR
      if(!loading && done){
        if (paypalButtonElem) {
          paypalButtonElem.parentElement?.removeChild(paypalButtonElem);
        }
        try {
          window.paypal.Buttons(options).render('#paypal-button');
        } catch (e){
          console.error(scriptLoadError)
        }
      }

    }
  },[ loading, done, options ])

  return <div id="paypal-button" />
}

export default PayPalButtonBase
