export const scriptLoadError = `
  react-paypal-button error loading script.
  Make sure the values you are passing to the paypalOptions prop are valid. Specifically check that
  your clientID is correct and that the intent prop is set to either "authorize" or "capture"
`;

export const authError = `
  react-paypal-button authorization error.
  This is likely an issue with paypal's api and the way they are handling their session data.
  Try closing and reopening your browser
`;

export const captureError = `
  react-paypal-button capture error.
  This is likely an issue with paypal's api and the way they are handling their session data.
  Try closing and reopening your browser
`

export const baseUrl = 'https://www.paypal.com/sdk/js';
