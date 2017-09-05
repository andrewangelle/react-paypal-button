import React from 'react';
import paypal from 'paypal-checkout';
import renderer from 'react-test-renderer';
import PayPalButton from '../src/index';
import {
  mount,
  shallow,
  render
} from 'enzyme';
