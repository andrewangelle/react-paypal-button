import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const Button = paypal.Button.driver('react', { React, ReactDOM });
export {Button}