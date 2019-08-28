import { composeUrl } from './composeUrl'
import { PaypalOptions } from '../types';

describe('composeUrl', () => {
  it('composes the paypal url from options', () => {
    const options: PaypalOptions = {
      clientId: '12345',
      intent: 'capture'
    }
    const test = composeUrl(options);
    expect(test).toMatchSnapshot()
  })

  it('works with array values', () => {
    const options: PaypalOptions = {
      clientId: '12345',
      intent: 'capture',
      disableCard: ['amex', 'visa', 'discover'],
      disableFunding: ['credit', 'bancontact']
    }
    const test = composeUrl(options);
    expect(test).toMatchSnapshot()
  })
})
