import React, { Component } from 'react';
import PayPalButton from '../src/index';

const buttonStyles = {
  textAlign: 'center',
  padding: '1rem',
  margin: '1rem'
}

export default class Example extends Component {
  render() {
    return (
      <div style={buttonStyles}>
        <h3>Try me out</h3>
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
