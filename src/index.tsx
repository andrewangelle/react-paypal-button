import '@babel/polyfill'
import React from 'react';
import paypal from 'paypal-checkout';
import ReactDOM from 'react-dom';

const Button = paypal.Button.driver('react', { React, ReactDOM });

/** Types */
export type EnvString = 'sandbox' | 'production'
export type IntentString = 'sale' | 'purchase';
export type StateString = 'approved' | 'declined';
export type PayerStatus = 'UNVERIFIED' | 'VERIFIED';
export type PaymentMethod = 'paypal' | 'credit' | 'debit';

export interface ShippingAddress {
  city: string;
  country_code: string;
  line1: string;
  postal_code: string
  recipient_name: string;
  state: string;
}
export interface PayerInfo {
  country_code: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  payer_id: string;
  shipping_address: ShippingAddress;
}

export interface Payer {
  payer_info: PayerInfo;
  payment_method: PaymentMethod;
  status: PayerStatus;
}

export interface PaymentObject {
  cart: string;
  create_time: string;
  id: string;
  intent: IntentString;
  payer: Payer;
  state: StateString;
  transactions: any[];
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

  payment(data, actions): void {
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

  onAuthorize(data, actions): void {
    return actions.payment.execute()
      .then((res: PaymentObject) => {
        if (this.props.onSuccess) {
          this.props.onSuccess(res)
        }
      })
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