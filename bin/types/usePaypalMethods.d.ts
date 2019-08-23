import { PayPalButtonProps, OnShippingChangeData, OnCancelData } from './types';
declare function usePaypalMethods(props: PayPalButtonProps): {
    onApprove: (data: any, actions: any) => void;
    onAuthorize: (data: any, actions: any) => any;
    onCancel: (data: OnCancelData) => void;
    onShippingChange: (data: OnShippingChangeData, actions: any) => any;
    createOrder: (data: any, actions: any) => any;
    payment: (data: any, actions: any) => any;
};
export default usePaypalMethods;
