import '@babel/polyfill';
import React from 'react';
import { PayPalButtonProps, PayPalPaymentData } from './types';
interface State {
    loaded: boolean;
    error: boolean;
}
declare class PayPalButton extends React.Component<PayPalButtonProps, State> {
    constructor(props: PayPalButtonProps);
    componentDidMount(): Promise<void>;
    componentDidCatch(): void;
    payment(data: any, actions: any): void;
    onAuthorize(data: any, actions: any): void;
    render(): false | JSX.Element | null;
}
export { PayPalButton, PayPalButtonProps, PayPalPaymentData };
