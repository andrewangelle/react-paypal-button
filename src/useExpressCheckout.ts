import { useEffect } from 'react';
import { PayPalButtonProps } from 'types';
import usePaypalScript from './usePaypalScript';
import usePaypalMethods from './usePaypalMethods';

type Props = {
  loading: boolean;
  error: boolean;
  done: boolean
}

function useExpressCheckout(
  elementId?: string | PayPalButtonProps | undefined,
  config?: PayPalButtonProps
): Props
function useExpressCheckout(
  arg1: string | PayPalButtonProps,
  arg2: PayPalButtonProps
): Props {
  const props = typeof arg1 === 'string' ? arg2 : arg1
  const state = usePaypalScript(props);
  const methods = usePaypalMethods(props)

  useEffect(() => {
    if(!state.loading && state.done && typeof arg1 === 'string'){

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
      }).render(arg1)
    }
  },[state.loading, state.done, arg1])

  return state
}

export default useExpressCheckout