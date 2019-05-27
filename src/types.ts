export type EnvString = 'sandbox' | 'production'

export type PayPalPaymentData = {
  cart: string;
  create_time: string;
  id: string;
  intent: 'sale' | 'purchase';
  payer: {
    payer_info: {
      country_code: string;
      email: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      payer_id: string;
      shipping_address: {
        city: string;
        country_code: string;
        line1: string;
        postal_code: string
        recipient_name: string;
        state: string;
      }
    };
    payment_method: string;
    status: 'UNVERIFIED' | 'VERIFIED';
  };
  state: string;
  transaction: any[];
}

export type PayPalButtonProps = {
  env: 'sandbox' | 'production';
  sandboxID?: string;
  productionID?: string;
  amount: number;
  currency: string;
  onPaymentError?: (msg: string) => void;
  onPaymentStart?: () => void;
  onPaymentSuccess?: (response: PayPalPaymentData) => void;
}

