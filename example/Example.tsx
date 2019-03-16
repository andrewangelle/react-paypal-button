import React, { Component } from 'react';
import { PayPalButton, PaymentObject } from '../src';

class Example extends Component<{}, {}> {
  render() {
    const buttonStyles = {
      textAlign: 'center',
      padding: '1rem',
      margin: '1rem'
    }
    return (
      <div style={buttonStyles as any}>
        <h3>Try me out</h3>
        <PayPalButton
          env='sandbox'
          amount={1.00}
          sandboxID='AWi1Yk1c7jzFlcNifMMiTAUHu7zEZelJodUVYfArCE3GxhprdwAbXZREQLzeKGPmPgI2pL6UUGWshiRB'
          currency='USD'
          onSuccess={(res: PaymentObject) =>
            console.log({ paymentData: res })
          }
        />
      </div>
    );
  }
}

export { Example }
