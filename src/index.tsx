import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { PayPalButtonProps, PayPalPaymentData } from './types';

const Button = paypal.Button.driver('react', { React, ReactDOM });

interface State {
  loaded: boolean;
  error: boolean;
}

class PayPalButton extends React.Component<PayPalButtonProps, State> {
  constructor(props: PayPalButtonProps) {
    super(props)
    this.onAuthorize = this.onAuthorize.bind(this);
    this.payment = this.payment.bind(this);

    this.state= {
      loaded: false,
      error: false
    }
  }

  async componentDidMount() {
    const paypalLoaded = !!(window as any).__pptmLoadedWithNoContent
    if(paypalLoaded){
      this.setState({loaded: true})
    }
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  payment(data, actions): void {
    if(this.props.onPaymentStart){
      this.props.onPaymentStart();
    }

    return actions.payment.create({
      transactions: [
        {
          amount: {
            total: this.props.amount,
            currency: this.props.currency
          }
        }
      ]
    })
    .catch(() => this.setState({error: true}));
  }

  onAuthorize(data, actions): void {
    return actions.payment.execute()
      .then((res: PayPalPaymentData) => {
        if (this.props.onPaymentSuccess) {
          this.props.onPaymentSuccess(res)
        }
      })
      .catch((e: any) => {
        if(this.props.onPaymentError){
          this.props.onPaymentError(e.message)
        } else {
          console.log(e.message)
        }
      })
  }

  render() {
    if(this.state.error){
      return null
    }
    return this.state.loaded && !this.state.error && (
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

export { PayPalButton, PayPalButtonProps, PayPalPaymentData }