import React, { Component } from 'react';
import PayPalButton from '../src/index';

export default class Example extends Component {
  render() {
    return (
      <div>
        <h1>paypal-button</h1>
        <PayPalButton
          env='production'
          productionID='AQASbJkKcBCYwas9-t22RNEtHNg_iDhuLD8uuBudCv1V04gsmnn2mMEEP4yrRXrpRyWDMNPtP6WWx77P'
          amount={0.01}
          currency='USD'
          commit={true}
        />
      </div>
    );
  }
}
