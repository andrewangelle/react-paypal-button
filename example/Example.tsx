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
// tslint:disable-next-line: max-line-length
          sandboxID="AWi1Yk1c7jzFlcNifMMiTAUHu7zEZelJodUVYfArCE3GxhprdwAbXZREQLzeKGPmPgI2pL6UUGWshiRB" //   {process.env.paypalSandboxOrProductionId} // <- replace with an actual id
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
