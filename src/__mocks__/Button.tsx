import React from 'react';
import { PaymentObject } from 'types';

window.matchMedia = jest.fn()

const paypal = {
  actions: {
    payment: {
      create: jest.fn(),
      execute: jest.fn().mockReturnValue({} as PaymentObject)
    }
  }
}

export const Button = (props: any) => (<button onClick={() => paypal}/>)