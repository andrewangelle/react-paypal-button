import '@babel/polyfill'
import React from 'react';

import { Button } from './Button'
import { PayPalButtonProps, PaymentObject } from 'types';

class PayPalButton extends React.Component<PayPalButtonProps, {loaded: boolean}> {
  constructor(props: PayPalButtonProps) {
    super(props)
    this.onAuthorize = this.onAuthorize.bind(this);
    this.payment = this.payment.bind(this);

    this.state= {
      loaded: false
    }
  }

  async componentDidMount() {
    const paypalLoaded = !!(window as any).__pptmLoadedWithNoContent
    if(paypalLoaded){
      this.setState({loaded: true})
    }
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
    return this.state.loaded && (
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