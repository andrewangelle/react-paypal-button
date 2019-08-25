import { PayPalButtonProps, OnShippingChangeData, OnCancelData, OnCaptureData, OnApproveData } from './types';
declare function usePaypalMethods(props: PayPalButtonProps): {
    onApprove: (data: OnApproveData | OnCaptureData, actions: any) => any;
    onCancel: (data: OnCancelData) => void;
    onShippingChange: (data: OnShippingChangeData, actions: any) => any;
    createOrder: (data: any, actions: any) => any;
    payment: (data: any, actions: any) => any;
};
export default usePaypalMethods;
