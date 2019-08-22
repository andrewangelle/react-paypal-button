import '@babel/polyfill'
import React  from 'react';
import ReactDOM from 'react-dom';
import useAsyncScript from './useAsyncScript';
import usePaypalMethods from './usePaypalMethods';
import { PayPalButtonProps } from 'types';

const createUrl = (props: any) => {
  const baseUrl = 'https://www.paypal.com/sdk/js?client-id=';
  return `${baseUrl}${props.sandboxID || props.productionID}&intent=authorize`;
}

export const PayPalButton = (props: PayPalButtonProps) => {
  const{ sandboxID, productionID } = props;

  const { done } = useAsyncScript(
    createUrl({sandboxID, productionID})
  );
  const methods = usePaypalMethods(props)

  if((window === undefined) || window.paypal === undefined){
    return null
  }
  const Button = window.paypal.Buttons.driver('react', {React, ReactDOM});

  return (
    <>
      {done &&
        <Button
          env={props.env}
          amount={props.amount}
          client={{
            sandbox: sandboxID,
            production: productionID
          }}
          payment={methods.payment}
          onAuthorize={methods.onAuthorize}
          onShippingChange={methods.onShippingChange}
          onCancel={methods.onCancel}
          createOrder={methods.createOrder}
          onApprove={methods.onApprove}
        />
      }
    </>

  )
}
