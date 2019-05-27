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
          sandboxID={process.env.paypalSandboxOrProductionId} // <- replace with an actual id
          currency="USD"
          onSuccess={(res) =>
            console.log({ paymentData: res })
          }
        />
      </div>
    );
  }
}

export { Example }
