# React-Paypal-Button

<img src='paypalImage.png' width="200px" />

A button component to implement PayPal&#39;s Express Checkout in React

## Prerequisites

To use PayPal's Express Checkout you must have a PayPal Business account set up and verified. After this is done, you'll have access to your API credentials to use with this button.

Once you have your account set up you will have 2 different sets of credentials for sandbox mode and prouduction mode. Both will have a clientID, this is what you will use for the productionID prop or the sandboxID prop.

## Installation

```sh
$ npm install react-paypal-button --save
```

## Usage

```javascript
import { PayPalButton } from 'react-paypal-button'

export default class App extends Component {
  render(){
    return (
      <PayPalButton
        env='sandbox'
        sandboxID='abcdef123456'
        amount='0.01'
        currency='USD'
        onPaymentStart={() => console.log('payment started')}
        onPaymentSuccess={(res) => console.log('payment complete', res)}
        onPaymentError={(msg) => console.log('payment error', msg)}
        onShippingChange={(data) => {
          console.log('onShippingChange', data)
          const shippingAmount = 1.00
          // run code to calculate and update your shipping charges
          // this callback will also work as an async funciton
          // must return a number
          return shippingAmount
        }}
      />
    )
  }
}
```
When using button in Production mode, update the follow props ..

```javascript
import { PayPalButton } from 'react-paypal-button'

export default class App extends Component {
  render(){
    return (
      <PayPalButton
        env='production'
        productionID='abcdef123456'
      />
    )
  }
}
```
## Options

### Types
```typescript
export type PayPalButtonProps = {
  env: 'sandbox' | 'production';
  sandboxID?: string;
  productionID?: string;
  amount: number;
  currency: string;
  onPaymentError?: (msg: string) => void;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: PayPalPaymentData) => void;
  onShippingChange?: (data: OnShippingChangeData) => Promise<string> | string;
}
```

| option      | type  | description                              |
|--------------|-------|-------------------------------------------|
|`env`         | string|Declares the environment. Will either be set to 'production' for live or 'sandbox' for testing.|
|`sandboxID`    |string| This will be your clientID from your PayPal Sandbox API credentials found in your PayPal Business account info.|
|`productionID`|string| This will be your clientID from your PayPal Live API credentials found in your PayPal Business account info.|
|`amount`      |integer| The amount of the transaction. |
|`currency`     |string | The currency of the transaction. See PayPal docs for list of accepted currencies. |
|`onPaymentStart`     |fn | a callback function that runs when the user clicks on the checkout button as the modal loads. |
|`onPaymentSuccess`     |fn | a callback function that runs after a successful payment and includes the payment object from paypal as its argument. |
|`onPaymentError`     |fn | a callback function that runs if the payment execution or authorization process errors out, and includes the error message as its argument |
|`onShippingChange`     |fn | a callback function that runs before payment execution with the user's default shipping address. It Also runs when/if the user updates their shipping address during the interaction. If this prop is defined on the component you must return a number as a string that represents the shipping amount to be added to the order total|
## Development

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:8008](http://localhost:8008):

```
$ npm start
```

Generate UMD output in the `lib` folder (runs implicitly on `npm version`):

```
$ npm run build
```

## License

MIT
