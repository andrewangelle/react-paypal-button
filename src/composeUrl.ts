const composeUrl = (
  apiKey: string
) => {
  const baseUrl = 'https://www.paypal.com/sdk/js';
  return `${baseUrl}?client-id=${apiKey}&intent=authorize`;
}

export default composeUrl