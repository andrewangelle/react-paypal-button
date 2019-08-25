import { PayPalButtonProps } from './types';
declare type Props = {
    loading: boolean;
    done: boolean;
    error: boolean;
};
declare function usePaypalScript(props: PayPalButtonProps): Props;
export default usePaypalScript;
