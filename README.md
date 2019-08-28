# React-Paypal-Button

<img src='paypalImage.png' width="400px" />

A button component to implement PayPal&#39;s Express Checkout in React

## Prerequisites

* To use PayPal's Express Checkout you must have a PayPal Business account set up and verified. After this is done, you'll have access to your API credentials to use with this button. Once you have your account set up you will have 2 different sets of credentials for sandbox mode and prouduction mode. Both will have a clientID, this is what you will use to pass to `paypalOptions`.

* Because the internal implementation of this library uses hooks, version `4.x.x` and above of `react-paypal-button` requires a peer dependency of  `react` `v16.8.x`  `react-dom` `v16.8.x`.

## Installation

```sh
$ npm install react-paypal-button --save
```

## Usage

```javascript
import { PayPalButton } from 'react-paypal-button'

export default function App() {
  const paypalOptions = {
    clientId: '12345',
    intent: 'capture'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  return (
    <PayPalButton
      paypalOptions={paypalOptions}
      buttonStyles={buttonStyles}
      amount={1.00}
    />
  )
}
```

### Types

```typescript

type PayPalButtonProps = {
  paypalOptions: PaypalOptions;
  buttonStyles: ButtonStylingOptions;
  amount: number;
  onApprove?: (data, authId) => void;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: OnCaptureData) => void;
  onPaymentError?: (msg: string) => void;
  onPaymentCancel?: (data: OnCancelData) => void;
  onShippingChange?: (data: OnShippingChangeData) =>
    Promise<void | string | number> |
    string |
    number |
    void;
}

```

* See [list and documentation on styling options](https://developer.paypal.com/docs/checkout/integration-features/customize-button/#color) that are to be passed to `buttonStyles` prop

* See [list and documentation on values](https://developer.paypal.com/docs/checkout/reference/customize-sdk/#query-parameters) that are to be passed to `paypalOptions`prop

* See examples folder for more examples

## Development

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:8008](http://localhost:8008):

```
$ npm start
```

Generate UMD output in the `bin` folder:

```
$ npm run build
```

Run tests in watch mode:

```
$ npm test
```

Perform a single run of tests:

```
$ npm run test:once
```

## License

MIT
