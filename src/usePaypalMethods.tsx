import { useCallback } from 'react';
import { PayPalButtonProps, PayPalPaymentData, OnShippingChangeData, OnCancelData } from 'types';

export default function usePaypalMethods (props: PayPalButtonProps){
  const onApprove = useCallback((data: any, actions: any) => {
    actions.order.authorize().then(auth => {
      const id = auth.purchase_units[0].payments.authorizations[0].id;
      if(props.onApprove !== undefined){
        props.onApprove(id);
      }
    })
  }, [])

  const createOrder = useCallback((data: any, actions: any) => {
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

  return {
    onApprove,
    onAuthorize,
    onCancel,
    onShippingChange,
    createOrder,
    payment
  }

}