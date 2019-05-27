import React from 'react';
import {shallow} from './setupTests';
import { PayPalButton } from './index';
import { PayPalButtonProps } from 'types';

it('renders', () => {
  const props: PayPalButtonProps = {
    env: 'sandbox',
    amount: 1.00,
    sandboxID:'123423',
    currency:'USD',
    onSuccess:jest.fn()
  }
  const wrapper = shallow(<PayPalButton {...props} />);
  expect(wrapper).toMatchSnapshot();
})