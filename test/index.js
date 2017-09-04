import React from 'react';
import renderer from 'react-test-renderer';
import PaypalButton from '../src/index';

describe('<PaypalButton />', () => {
  it('renders placeholder div', () => {
    const tree = renderer.create(
      <PaypalButton />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
