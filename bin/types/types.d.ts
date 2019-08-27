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
export declare type OnApproveData = {
    orderID: string;
    payerID: string;
};
export declare type OnCaptureData = {
    create_time: string;
    id: string;
    intent: String;
    links: Array<{
        href: string;
        method: string;
        rel: string;
        title: string;
    }>;
    payer: {
        address: {
            country_code: string;
        };
        email_address: string;
        name: {
            given_name: string;
            surname: string;
        };
        payer_id: string;
    };
    purchase_units: Array<object>;
    status: string;
    update_time: string;
};
declare type OnShippingChangeReturnType = Promise<number | void> | number | void;
export declare type PaypalOptions = {
    clientId: string;
    merchantId?: string;
    currency?: number | string;
    intent: 'capture' | 'authorize';
    commit?: boolean | string;
    vault?: boolean | string;
    components?: string;
    disableFunding?: string;
    disableCard?: string;
    integrationDate?: string;
    locale?: string;
    buyerCountry?: string;
    debug?: boolean | string;
};
export declare type ButtonStylingOptions = {
    layout?: 'vertical' | 'horizontal';
    color?: 'blue' | 'gold' | 'silver' | 'white' | 'black';
    shape?: 'rect' | 'pill';
    label?: 'paypal' | 'checkout' | 'buynow' | 'pay' | 'installment';
    tagline?: boolean;
};
export interface PayPalButtonProps {
    paypalOptions: PaypalOptions;
    buttonStyles?: ButtonStylingOptions;
    amount: number | string;
    onApprove?: (data: OnApproveData, authId: string) => void;
    onPaymentStart?: () => void;
    onPaymentSuccess?: (response: OnCaptureData) => void;
    onPaymentError?: (msg: string) => void;
    onPaymentCancel?: (data: OnCancelData) => void;
    onShippingChange?: (data: OnShippingChangeData) => OnShippingChangeReturnType;
}
export {};
