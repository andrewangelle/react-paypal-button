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
          onPaymentSuccess={(res) => console.log('payment complete', res)}
          onPaymentError={(msg: string) => console.log('payment error', msg)}
          onShippingChange={(data) => {
            console.log('onShippingChange', data)
            if(data.shipping_address.state === 'OH'){
              return 2.00
            }
            return 1.00
          }}
        />
      </div>
    );
  }
}

export { Example }
