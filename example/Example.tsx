import React, { Component } from 'react';
import { PayPalButton } from '../src';

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
          env="sandbox"
          amount={1.00}
          sandboxID="12345" // <- replace with an actual id
          currency="USD"
          onPaymentStart={() => console.log('payment started')}
          onPaymentSuccess={(res) => console.log('payment complete', { paymentData: res })}
          onPaymentError={(msg: string) => console.log(msg)}
        />
      </div>
    );
  }
}

export { Example }
