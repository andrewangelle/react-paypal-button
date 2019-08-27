import { PaypalOptions } from '../types';

export const composeUrl = (options: PaypalOptions) => {
  const baseUrl = 'https://www.paypal.com/sdk/js';

  const queryString = Object
    .keys(options)
    .reduce((prevParams, currentValue, index) => {
      const camelCaseToDash = currentValue.split(/(?=[A-Z])/).join('-').toLowerCase();
      const keyValuePair = `${camelCaseToDash}=${options[currentValue]}`

      // combine the previous key value pairs with the current one
      // seperated by an '&' symbol except for the first key value pair
      return `${prevParams}${index === 0 ? '' : '&'}${keyValuePair}`
    },'?');

  const url = `${baseUrl}${queryString}`;
  return url;
}