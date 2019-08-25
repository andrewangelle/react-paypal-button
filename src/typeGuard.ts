import { OnApproveData, OnCaptureData } from 'types';

export function typeGuard(str: string | undefined): string {
  if(str !== undefined){
    return str as string
  } else {
    return ''
  }
}

export function typeGuardOnApprove(data: OnApproveData | OnCaptureData){
  if(Object.keys(data).length > 1){
    return data as OnApproveData
  }

  return data
}

