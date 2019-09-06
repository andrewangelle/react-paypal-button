import { PayPalButtonProps } from '../types';
import { usePaypalMethods } from '.';

export function usePaypalScriptOptions(props: PayPalButtonProps) {
  const { buttonStyles: style, amount } = props;
  const {
    createOrder, 
    createSubscription, 
    onApprove, 
    onCancel, 
    onError, 
    onShippingChange, 
    payment
  } = usePaypalMethods(props);
  
  return {
    style,
    amount,
    createOrder,
    createSubscription,
    onApprove,
    onCancel,
    onError,
    onShippingChange, 
    payment,
  }
}