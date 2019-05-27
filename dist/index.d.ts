import '@babel/polyfill';
import React from 'react';
import { PayPalButtonProps } from './types';
declare class PayPalButton extends React.Component<PayPalButtonProps, {
    loaded: boolean;
}> {
    constructor(props: PayPalButtonProps);
    componentDidMount(): Promise<void>;
    payment(data: any, actions: any): void;
    onAuthorize(data: any, actions: any): void;
    render(): false | JSX.Element;
}
export { PayPalButton };
