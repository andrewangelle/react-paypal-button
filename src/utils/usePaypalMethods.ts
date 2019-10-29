import { useCallback } from 'react';

import {
  OnShippingChangeData,
  OnCancelData,
  OnCaptureData,
  OnApproveData,
  PayPalButtonProps,
} from '../types';
import { authError, captureError } from './constants';

export function usePaypalMethods (props: PayPalButtonProps){

  const onError = useCallback((data) => {
    if(props.onPaymentError){
      props.onPaymentError(data.message)
    }
  }, []);

  const createOrder = props.paypalOptions.vault ? null : 
    useCallback((data: any, actions: any) => {
      if(props.onPaymentStart){
        props.onPaymentStart()
      }

      return actions.order.create({
        purchase_units: [{
          amount: {
            value: props.amount
          }
        }]
      })
    }, [ props.amount ]);

  const createSubscription = !props.paypalOptions.vault ? null : 
    useCallback((data: any, actions: any) => {
      if(props.paypalOptions.vault && props.subscriptionPlanId){
        return actions.subscription.create({
          plan_id: props.subscriptionPlanId
        })
      }
    }, []);

  const onApprove = useCallback((
    data: OnApproveData | OnCaptureData,
    actions: any
  ) => {
    if(props.paypalOptions.vault && props.subscriptionPlanId){
      if(props.onPaymentSuccess){
        props.onPaymentSuccess(data as any)
      }
    }

    if(props.paypalOptions.intent === 'capture') {
      return actions.order.capture()
      .then((details: OnCaptureData) => {
        if (props.onPaymentSuccess) {
          props.onPaymentSuccess(details)
        }
      })
      .catch(e => {
        if(props.onPaymentError){
          props.onPaymentError(e)
        }
        console.error(captureError, `
          Original error message: ${e.message}
        ` )
      })
    }

    if(props.paypalOptions.intent === 'authorize'){
      actions.order.authorize()
      .then(auth => {
        const id = auth.purchase_units[0].payments.authorizations[0].id;
        if(props.onApprove !== undefined){
          props.onApprove(data as OnApproveData, id);
        }
      })
      .catch(e => {
        if(props.onPaymentError){
          props.onPaymentError(e)
        }
        console.error(authError, `
          Original error message: ${e.message}
        `)
      })
    }

  }, [])



  const payment = useCallback((data: any, actions: any) => {
    return actions.payment.create({
      transactions: [
        {
          amount: {
            total: props.amount,
            currency: props.paypalOptions.currency,
          }
        }
      ]
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

        // otherwise tell paypal to update the total
        const baseOrderAmount = `${props.amount}`
        const shippingAmount = `${rate}`;
        const value = (parseFloat(baseOrderAmount) + parseFloat(shippingAmount)).toFixed(2);
        const currency_code = props.paypalOptions.currency

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

  return {
    createOrder,
    createSubscription,
    onApprove,
    onCancel,
    onError,
    onShippingChange,
    payment
  }

}
