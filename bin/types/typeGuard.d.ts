import { OnApproveData, OnCaptureData } from 'types';
export declare function typeGuard(str: string | undefined): string;
export declare function typeGuardOnApprove(data: OnApproveData | OnCaptureData): OnApproveData | OnCaptureData;
