import '@babel/polyfill'
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useAsyncScript } from './useAsyncScript';


/**
 * types
 */

export type OnCancelData = {
  billingID: string;
  cancelUrl: string;
  intent: string;
  paymentID: string;
  paymentToken: string;
}

export type OnShippingChangeData = {
  amount: {
    value: string,
    currency_code: string,
    breakdown: {}
  },
  orderID: string;
  paymentID: string;
  paymentToken: string;
  shipping_address: {
    city: string;
    country_code: string;
    postal_code: string;
    state: string;
  }
}

export type PayPalPaymentData = {
  cart: string;
  create_time: string;
  id: string;
  intent: 'sale' | 'purchase';
  payer: {
    payer_info: {
      country_code: string;
      email: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      payer_id: string;
      shipping_address: {
        city: string;
        country_code: string;
        line1: string;
        postal_code: string
        recipient_name: string;
        state: string;
      }
    };
    payment_method: string;
    status: 'UNVERIFIED' | 'VERIFIED';
  };
  state: string;
  transaction: any[];
}


type OnShippingChangeReturnType = Promise<number | void> | number | void;

export type PayPalButtonProps = {
  env: 'sandbox' | 'production';
  sandboxID?: string;
  productionID?: string;
  amount: number;
  currency: string;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: PayPalPaymentData) => void;
  onPaymentError?: (msg: string) => void;
  onPaymentCancel?: (data: OnCancelData) => void;
  onShippingChange?: (data: OnShippingChangeData) => OnShippingChangeReturnType;
}

/**
 * component
 */

import { PayPalButtonProps, PayPalPaymentData, OnShippingChangeData, OnCancelData } from '.';


export function PayPalButton(props: PayPalButtonProps){
  const url = `https://www.paypal.com/sdk/js?client-id=${props.sandboxID || props.productionID}`;
  const {loading, done} = useAsyncScript(url)

  const createOrder = useCallback((data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: props.amount
        }
      }]
    })
  }, []);

  const payment = useCallback((data: any, actions: any) => {
    return actions.payment.create({
      transactions: [
        {
          amount: {
            total: props.amount,
            currency: props.currency,
          }
        }
      ]
    })
  }, []);

  const onAuthorize = useCallback((data: any, actions: any) => {
    return actions.payment.execute()
      .then((res: PayPalPaymentData) => {
        if (props.onPaymentSuccess) {
          props.onPaymentSuccess(res)
        }
      })
      .catch((e: any) => {
        if(props.onPaymentError){
          props.onPaymentError(e.message)
        } else {
          console.warn({paypalOnAuthError: e.message})
        }
      })
  }, []);




  const onShippingChange = useCallback((data: OnShippingChangeData, actions) => {
    if(props.onShippingChange){
      Promise.resolve(props.onShippingChange(data))
      .then((rate) => {

        // early exit if user doesn't return a value
        if(!rate){
          return actions.resolve()
        }

        const baseOrderAmount = `${props.amount}`
        const shippingAmount = `${rate}`;
        const value = (parseFloat(baseOrderAmount) + parseFloat(shippingAmount)).toFixed(2);
        const currency_code = props.currency

        return actions.order.patch([
          {
            op: 'replace',
            path: '/purchase_units/@reference_id==\'default\'/amount',
            value: {
              currency_code,
              value,
              breakdown: {
                item_total: {
                  currency_code,
                  value: baseOrderAmount
                },
                shipping: {
                  currency_code,
                  value: shippingAmount
                }
              }
            }
          }
        ]);
      });
    } else {
      return actions.resolve()
    }
  }, []);

  const onCancel = useCallback((data: OnCancelData) => {
    if(props.onPaymentCancel){
      props.onPaymentCancel(data)
    }
  }, []);


  if((window === undefined) || (window as any).paypal === undefined){
    return null
  }
  const Button = (window as any).paypal.Buttons.driver('react', {React, ReactDOM});

  return (
    <>
      {done && !loading &&
        <Button
          env={props.env}
          amount={props.amount}
          client={{
            sandbox: props.sandboxID,
            production: props.productionID
          }}
          payment={payment}
          onAuthorize={onAuthorize}
          onShippingChange={onShippingChange}
          onCancel={onCancel}
          createOrder={createOrder}
        />
      }
    </>

  )
}
