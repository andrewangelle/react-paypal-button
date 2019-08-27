
declare global {
  interface Window {
    paypal: any
  }
}

export type OnCancelData = {
  billingID: string;
  cancelUrl: string;
  intent: string;
  paymentID: string;
  paymentToken: string;
}

export type OnShippingChangeData = {
  amount: {
    value: string,
    currency_code: string,
    breakdown: {}
  },
  orderID: string;
  paymentID: string;
  paymentToken: string;
  shipping_address: {
    city: string;
    country_code: string;
    postal_code: string;
    state: string;
  }
}

export type OnApproveData = {
  orderID: string,
  payerID: string
};

export type OnCaptureData = {
  create_time: string;
  id: string;
  intent: String;
  links: Array<{href: string; method: string; rel: string; title: string;}>
  payer: {
    address: {country_code: string}
    email_address: string;
    name: {
      given_name: string; // first name
      surname: string; // last name
    },
    payer_id: string;
  };
  purchase_units: Array<object>;
  status: string;
  update_time: string;
}


type OnShippingChangeReturnType =
  Promise<number | void | string> |
  number |
  string |
  void;

export type PaypalOptions = {
  clientId: string;
  merchantId?: string;
  currency?: number | string;
  intent: 'capture' | 'authorize';
  commit?: boolean;
  vault?: boolean;
  components?: string;
  disableFunding?: Array<'card' | 'credit' | 'bancontact'>;
  disableCard?: Array<'amex' | 'discover' | 'visa' | 'mastercard'>;
  integrationDate?: string;
  locale?: string;
  buyerCountry?: string;
  debug?: boolean|string;
}

export type ButtonStylingOptions = {
  layout?:  'vertical' | 'horizontal';
  color?:   'blue' | 'gold' | 'silver' | 'white' | 'black';
  shape?:   'rect' | 'pill';
  label?:   'paypal' | 'checkout' | 'buynow' | 'pay' | 'installment';
  tagline?: boolean;
}

export type PayPalButtonProps = {
  paypalOptions: PaypalOptions;
  buttonStyles?: ButtonStylingOptions,
  amount: number | string;
  onApprove?: (data: OnApproveData, authId: string) => void;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: OnCaptureData) => void;
  onPaymentError?: (msg: string) => void;
  onPaymentCancel?: (data: OnCancelData) => void;
  onShippingChange?: (data: OnShippingChangeData) => OnShippingChangeReturnType;
}

