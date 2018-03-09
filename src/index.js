import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import PropTypes from 'prop-types';

const Button = paypal.Button.driver('react', { React, ReactDOM });

export default class PayPalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      env: this.props.env,
      client: {
        sandbox: this.props.sandboxID,
        production: this.props.productionID
      },
      amount: this.props.amount,
      currency: this.props.currency,
      commit: this.props.commit
    };
  }

  payment(data, actions) {
    return actions.payment.create({
      transactions: [
        {
          amount: { total: this.state.amount, currency: this.state.currency }
        }
      ]
    });
  }

  onAuthorize(data, actions) {
    return actions.payment.execute();
  }

  render() {
    return (
      <Button
        commit={ this.state.commit }
        env={ this.state.env }
        client={ this.state.client }
        payment={ (data, actions) => this.payment(data, actions) }
        onAuthorize={ (data, actions) => this.onAuthorize(data, actions) }
        {...this.props}
      />
    );
  }
}

PayPalButton.propTypes = {
  env: PropTypes.string.isRequired,
  sandboxID: PropTypes.string,
  productionID: PropTypes.string,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  commit: PropTypes.bool.isRequired
};
