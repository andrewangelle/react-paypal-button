import { renderHook } from '@testing-library/react-hooks';
import { usePaypalScript } from './usePaypalScript';
import { PaypalOptions } from '../types';

const props: PaypalOptions = {
  clientId: '12345',
  intent: 'capture'
}

describe('usePaypalMethods', () => {
  it('returns loading state', () => {
    const { result }= renderHook(() => usePaypalScript(props))
    expect(result.current).toMatchSnapshot()
  })
})