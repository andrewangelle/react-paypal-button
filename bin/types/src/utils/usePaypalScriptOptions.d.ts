/// <reference types="react" />
import { PayPalButtonProps } from '../types';
export declare function usePaypalScriptOptions(props: PayPalButtonProps): {
    style: import("../types").ButtonStylingOptions | undefined;
    amount: import("react").ReactText;
    createOrder: ((data: any, actions: any) => any) | null;
    createSubscription: ((data: any, actions: any) => any) | null;
    onApprove: (data: import("../types").OnApproveData | import("../types").OnCaptureData, actions: any) => any;
    onCancel: (data: import("../types").OnCancelData) => void;
    onError: (data: any) => void;
    onShippingChange: (data: import("../types").OnShippingChangeData, actions: any) => any;
    payment: (data: any, actions: any) => any;
};
