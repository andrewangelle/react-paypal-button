import { OnShippingChangeData, OnCancelData, OnCaptureData, OnApproveData, PayPalButtonProps } from '../types';
export declare function usePaypalMethods(props: PayPalButtonProps): {
    createOrder: ((data: any, actions: any) => any) | null;
    createSubscription: ((data: any, actions: any) => any) | null;
    onApprove: (data: OnApproveData | OnCaptureData, actions: any) => any;
    onCancel: (data: OnCancelData) => void;
    onError: (data: any) => void;
    onShippingChange: (data: OnShippingChangeData, actions: any) => any;
    payment: (data: any, actions: any) => any;
};
