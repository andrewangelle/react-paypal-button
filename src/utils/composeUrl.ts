import { baseUrl } from './constants';
import { PaypalOptions } from '../types';

export const composeUrl = (options: PaypalOptions) => {
  const queryString = Object.keys(options)
    .reduce((prevParams, currentValue, index) => {
      const convertKeyFromCamelCaseToDash = currentValue
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();

      // for disableCard or disableFunding prop convert array to comma seperated string
      // else return the value
      const value = (currentValue === 'disableCard' || currentValue === 'disableFunding')
        ? (options[currentValue] as string[]).join(',')
        : options[currentValue];

      // add an '&' symbol to key value pair for all except for the first one
      const keyValuePair = `${index === 0 ? '' : '&'}${convertKeyFromCamelCaseToDash}=${value}`

      // combine the previous key value pairs with the current one
      return `${prevParams}${keyValuePair}`
    },'?');

  const url = `${baseUrl}${queryString}`;

  return url;
}