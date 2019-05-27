import '@babel/polyfill';
import React from 'react';
/**
 * types
 */
interface State {
    loaded: boolean;
    error: boolean;
}
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
export declare type PayPalButtonProps = {
    env: 'sandbox' | 'production';
    sandboxID?: string;
    productionID?: string;
    amount: number;
    currency: string;
    onPaymentError?: (msg: string) => void;
    onPaymentStart?: () => void;
    onPaymentSuccess?: (response: PayPalPaymentData) => void;
};
/**
 * component
 */
export declare class PayPalButton extends React.Component<PayPalButtonProps, State> {
    constructor(props: PayPalButtonProps);
    componentDidMount(): Promise<void>;
    componentDidCatch(): void;
    payment(data: any, actions: any): void;
    onAuthorize(data: any, actions: any): void;
    render(): false | JSX.Element | null;
}
export {};
