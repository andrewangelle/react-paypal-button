export const scriptLoadError = `
  React-paypal-button loading script error:

  Make sure that you are passing valid values to the paypalOptions prop and the buttonStyles prop.
  Specifically check that your clientID is correct and that the intent prop is set to either "authorize" or "capture".

  For a list of valid properties for paypalOptions see https://developer.paypal.com/docs/checkout/reference/customize-sdk/#query-parameters
  For a list of valid properties for buttonStyles see https://developer.paypal.com/docs/checkout/integration-features/customize-button/#color
`;

export const authError = `
  React-paypal-button authorization error:

  This is likely an issue with paypal's api and the way they are handling their session data.
  Try closing and reopening your browser
`;

export const captureError = `
  React-paypal-button capture error:

  This is likely an issue with paypal's api and the way they are handling their session data.
  Try closing and reopening your browser
`

export const baseUrl = 'https://www.paypal.com/sdk/js';
