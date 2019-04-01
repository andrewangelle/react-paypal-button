import '@babel/polyfill'
import React from 'react';
import paypal from 'paypal-checkout';
import ReactDOM from 'react-dom';

const Button = paypal.Button.driver('react', { React, ReactDOM });

/** Types */
export type EnvString = 'sandbox' | 'production'

export type PaymentObject = {
  cart: string;
  create_time: string;
  id: string;
  intent: 'sale' | 'purchase';
  payer: {
    payer_info: {
      country_code: string;
      email: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      payer_id: string;
      shipping_address: {
        city: string;
        country_code: string;
        line1: string;
        postal_code: string
        recipient_name: string;
        state: string;
      }
    };
    payment_method: string;
    status: 'UNVERIFIED' | 'VERIFIED';
  };
  state: string;
  transaction: any[];
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

  async componentDidMount() {
    // attempt to wait until paypal lib is loaded
    await paypal
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