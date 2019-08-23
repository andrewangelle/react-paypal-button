declare global {
    interface Window {
        paypal: any;
    }
}
export declare type OnCancelData = {
    billingID: string;
    cancelUrl: string;
    intent: string;
    paymentID: string;
    paymentToken: string;
};
export declare type OnShippingChangeData = {
    amount: {
        value: string;
        currency_code: string;
        breakdown: {};
    };
    orderID: string;
    paymentID: string;
    paymentToken: string;
    shipping_address: {
        city: string;
        country_code: string;
        postal_code: string;
        state: string;
    };
};
export declare type PayPalPaymentData = {
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
                postal_code: string;
                recipient_name: string;
                state: string;
            };
        };
        payment_method: string;
        status: 'UNVERIFIED' | 'VERIFIED';
    };
    state: string;
    transaction: any[];
};
declare type OnShippingChangeReturnType = Promise<number | void> | number | void;
export interface PayPalButtonProps {
    env: 'sandbox' | 'production';
    sandboxID?: string;
    productionID?: string;
    amount: number;
    currency: string;
    onApprove?: (id: string) => void;
    onPaymentStart?: () => void;
    onPaymentSuccess?: (response: PayPalPaymentData) => void;
    onPaymentError?: (msg: string) => void;
    onPaymentCancel?: (data: OnCancelData) => void;
    onShippingChange?: (data: OnShippingChangeData) => OnShippingChangeReturnType;
}
export {};
