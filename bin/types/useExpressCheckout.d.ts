import { PayPalButtonProps } from 'types';
declare type Props = {
    loading: boolean;
    error: boolean;
    done: boolean;
};
declare function useExpressCheckout(elementId?: string | PayPalButtonProps | undefined, config?: PayPalButtonProps): Props;
export default useExpressCheckout;
