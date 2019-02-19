import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const Button = paypal.Button.driver('react', { React, ReactDOM });

export interface PayPalButtonProps {
  env: string;
  sandboxID?: string;
  productionID?: string;
  amount: number;
  currency: string;
}

class PayPalButton extends React.Component<PayPalButtonProps, {}> {
  client: any;

  async componentDidMount() {
    this.client = await paypal
  }

  payment(data: any, actions: any) {
    return actions.payment.create({
      transactions: [
        {
          amount: {
            total: this.props.amount,
            currency: this.props.currency
          }
        }
      ]
    });
  }

  onAuthorize(data: any, actions: any) {
    return actions.payment.execute();
  }

  render() {
    return (
      <Button
        commit={true}
        env={this.props.env}
        client={{
          sandbox: this.props.sandboxID,
          production: this.props.productionID
        }}
        payment={(data: any, actions: any) => this.payment(data, actions)}
        onAuthorize={(data: any, actions: any) => this.onAuthorize(data, actions)}
        amount={this.props.amount}
      />
    );
  }
}

export { PayPalButton }