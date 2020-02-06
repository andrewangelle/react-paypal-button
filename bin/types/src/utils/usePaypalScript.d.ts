import { PaypalOptions } from '../types';
declare type Props = {
    loading: boolean;
    done: boolean;
    error: boolean;
};
export declare function usePaypalScript(options: PaypalOptions): Props;
export {};
