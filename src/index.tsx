import '@babel/polyfill'
import React from 'react';
import paypal from 'paypal-checkout';
import ReactDOM from 'react-dom';

const Button = paypal.Button.driver('react', { React, ReactDOM });

/** Types */
export type Obj = { [key: string]: string | number | boolean | any[] }
export type EnvString = 'sandbox' | 'production'
export type IntentString = 'sale' | 'purchase';
export type StateString = 'approved' | 'declined';
export interface PaymentObject {
  cart: string;
  create_time: string;
  id: string;
  intent: IntentString;
  payer: Obj;
  state: StateString;

}
export interface PayPalButtonProps {
  env: EnvString;
  sandboxID?: string;
  productionID?: string;
  amount: number;
  currency: string;
  onSuccess?: (response: PaymentObject) => void;
}


/** Component */
class PayPalButton extends React.Component<PayPalButtonProps> {
  constructor(props: PayPalButtonProps) {
    super(props)
    this.onAuthorize = this.onAuthorize.bind(this);
    this.payment = this.payment.bind(this);
  }

  payment(data: any, actions: any): void {
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

  onAuthorize(data: PaymentObject, actions: any): void {
    if (this.props.onSuccess) {
      this.props.onSuccess(data)
    }
    return actions.payment.execute()
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
        payment={this.payment}
        onAuthorize={this.onAuthorize}
        amount={this.props.amount}
      />
    );
  }
}

export { PayPalButton }