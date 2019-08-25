import '@babel/polyfill'
import React, { useEffect }  from 'react';

import usePaypalScript from './usePaypalScript';
import usePaypalMethods from './usePaypalMethods';
import { PayPalButtonProps } from './types';

function PayPalButton(props: PayPalButtonProps) {
  const { loading, done } = usePaypalScript(props);
  const methods = usePaypalMethods(props);

  useEffect(() => {
    if(!loading && done){
      window.paypal.Buttons({
        amount:props.amount,
        client: {
          sandbox: props.sandboxID,
          production: props.productionID
        },
        env:props.env,
        createOrder:methods.createOrder,
        onApprove:methods.onApprove,
        onCancel:methods.onCancel,
        onShippingChange:methods.onShippingChange,
        payment:methods.payment,
      }).render('#paypal-button')
    }
  },[loading, done])

  return (
    <div id="paypal-button" />
  )
}


export default PayPalButton