import { PayPalButtonProps } from './types';
declare function usePaypalScript(props: PayPalButtonProps): {
    loading: boolean;
    error: boolean;
    done: boolean;
};
export default usePaypalScript;
