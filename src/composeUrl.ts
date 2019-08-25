import { PaypalOptions } from 'types';

const composeUrl = (options: PaypalOptions) => {
  const baseUrl = 'https://www.paypal.com/sdk/js';

  const queryParams = Object.keys(options).reduce((prevParams, currentValue, index) => {
    const camelCaseToDash = currentValue.split(/(?=[A-Z])/).join('-').toLowerCase();
    const keyValuePair = `${camelCaseToDash}=${options[currentValue]}`
    return `${prevParams}${index === 0 ? '' : '&'}${keyValuePair}`
  },'?');

  const url = `${baseUrl}${queryParams}`;
  console.log(url)
  return url;
}

export default composeUrl