import React from 'react';

import PayPalButtonBase from './PayPalButtonBase';
import ErrorBoundary from './ErrorBoundary';
import { PayPalButtonProps } from './types';


function PayPalButton(props: PayPalButtonProps){
  return (
    <ErrorBoundary>
      <PayPalButtonBase {...props} />
    </ErrorBoundary>
  )
}

export default PayPalButton
