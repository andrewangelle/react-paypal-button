import 'babel-polyfill';
import React from 'react';
export interface PayPalButtonProps {
    env: string;
    sandboxID?: string;
    productionID?: string;
    amount: number;
    currency: string;
}
declare class PayPalButton extends React.Component<PayPalButtonProps, {}> {
    client: any;
    componentDidMount(): Promise<void>;
    payment(data: any, actions: any): any;
    onAuthorize(data: any, actions: any): any;
    render(): JSX.Element;
}
export { PayPalButton };
