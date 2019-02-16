import React, { Component } from 'react';
import { PayPalButton } from '../src/index';

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
          sandboxID={process.env.PAYPAL_CLIENT_ID} // or clientID
          currency='USD'
        />
      </div>
    );
  }
}

export { Example }
